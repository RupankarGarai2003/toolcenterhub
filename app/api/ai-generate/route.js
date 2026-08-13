import { NextResponse } from "next/server";

/* ---------------------------------------------------------------------
   Shared AI generation endpoint.

   Every AI-powered tool on the site posts here with a `tool` name and
   its own `inputs`. This route builds the actual prompt server-side
   (so the client can never inject or see the system prompt), calls
   Groq, and returns plain text back to the tool.

   Requires GROQ_API_KEY to be set in your environment (see .env.example).
   Get a free key at https://console.groq.com/keys
------------------------------------------------------------------------ */

const GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

// ---------------------------------------------------------------------
// Very simple in-memory per-IP rate limiter.
//
// NOTE: this resets whenever the server restarts, and does NOT share
// state across multiple serverless instances (e.g. on Vercel, each
// cold-started function has its own memory). It's fine for a single
// long-running server or low/medium traffic, but if you deploy on
// serverless and get real traffic, swap this for Upstash Redis or
// Vercel KV so the limit is enforced globally.
// ---------------------------------------------------------------------
const RATE_LIMIT = 15; // requests
const RATE_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT;
}

// ---------------------------------------------------------------------
// Per-tool prompt builders. Each takes the raw `inputs` object from the
// client and returns the full prompt string sent to Gemini. Keeping
// these server-side means the client only ever sends form data, never
// a prompt or instructions.
// ---------------------------------------------------------------------
const PROMPT_BUILDERS = {
  "text-summarizer": ({ text, length = "medium" }) => `
Summarize the following text. Target length: ${length} (short = 2-3 sentences, medium = 1 short paragraph, long = 3-4 sentences per key point).
Return ONLY the summary, no preamble.

Text:
"""${text}"""
  `,

  "paraphrasing-tool": ({ text, tone = "standard" }) => `
Rewrite the following text in a ${tone} tone, keeping the original meaning intact. Vary sentence structure and word choice meaningfully.
Return ONLY the rewritten text, no preamble.

Text:
"""${text}"""
  `,

  "essay-generator": ({ topic, wordCount = "400", tone = "informative" }) => `
Write a well-structured essay of approximately ${wordCount} words on the topic: "${topic}".
Tone: ${tone}. Include a clear introduction, body paragraphs with distinct points, and a conclusion.
Return ONLY the essay text, no preamble or title labels like "Introduction:".
  `,

  "content-generator": ({ contentType = "blog intro", topic, tone = "friendly" }) => `
Write a ${contentType} about: "${topic}".
Tone: ${tone}. Keep it engaging and appropriate in length for a ${contentType}.
Return ONLY the generated content, no preamble.
  `,

  "resume-analyzer": ({ resumeText, jobDescription = "" }) => `
You are an experienced recruiter and resume coach. Review the resume below${
    jobDescription ? " against the provided job description" : ""
  }.
Give feedback as:
1. Overall impression (2-3 sentences)
2. Strengths (bullet points)
3. Weaknesses / gaps (bullet points)
4. Specific suggestions to improve wording, formatting, or keyword match
Be specific and actionable, not generic.

Resume:
"""${resumeText}"""
${jobDescription ? `\nJob Description:\n"""${jobDescription}"""` : ""}
  `,

"cover-letter-generator": ({
  jobTitle,
  company,
  keySkills,
  tone = "professional",
  targetWords = 300,
}) => `
Write a ${tone} cover letter for a "${jobTitle}" position at "${company}".

Highlight these skills/experience naturally:
${keySkills}

Length requirement:
- Target approximately ${targetWords} words.
- Stay as close as reasonably possible to ${targetWords} words.
- Never produce fewer than 200 words.
- Never exceed 400 words.
- Do not add repetitive or meaningless content just to reach the target.

Structure:
- Write 3-4 well-written paragraphs.
- Keep the writing professional, natural, and specific to the job.
- Do not use bullet points.
- Do not add unnecessary headings.
- Do not use placeholder brackets such as [Your Name].
- Return ONLY the cover letter text.

The final cover letter should be approximately ${targetWords} words.
`,

  "email-reply-generator": ({ originalEmail, intent, tone = "professional" }) => `
Write a ${tone} email reply to the message below. The reply should: ${intent}.
Return ONLY the reply email text, no subject line needed.

Original email:
"""${originalEmail}"""
  `,

  "meeting-notes-summarizer": ({ transcript }) => `
Summarize the following meeting transcript into:
1. Key discussion points (bullet points)
2. Decisions made (bullet points)
3. Action items with owner if mentioned (bullet points)
Be concise and only include what's actually in the transcript.

Transcript:
"""${transcript}"""
  `,

  "caption-generator": ({ topic, platform = "Instagram", tone = "fun" }) => `
Write 3 different ${tone} social media captions for ${platform} about: "${topic}".
After the captions, add a single line of 8-10 relevant hashtags.
Format as:
1. ...
2. ...
3. ...
Hashtags: ...
  `,

  "slogan-generator": ({ businessName, industry, tone = "catchy" }) => `
Generate 8 short, ${tone} slogans/taglines for a business called "${businessName}" in the ${industry} industry.
Return them as a numbered list, one per line, no explanations.
  `,
};

export async function POST(req) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "AI service is not configured yet. Add GROQ_API_KEY to your environment to enable this tool.",
        },
        { status: 503 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const { tool, inputs } = await req.json();

    const buildPrompt = PROMPT_BUILDERS[tool];
    if (!buildPrompt) {
      return NextResponse.json({ error: "Unknown tool." }, { status: 400 });
    }

    if (!inputs || typeof inputs !== "object") {
      return NextResponse.json({ error: "Missing inputs." }, { status: 400 });
    }

    const prompt = buildPrompt(inputs);

    const groqRes = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", groqRes.status, errText);
      return NextResponse.json(
        { error: "The AI service failed to respond. Please try again shortly." },
        { status: 502 }
      );
    }

    const data = await groqRes.json();
    const resultText = data?.choices?.[0]?.message?.content || "";

    if (!resultText) {
      return NextResponse.json(
        { error: "The AI returned an empty response. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ result: resultText.trim() });
  } catch (err) {
    console.error("AI generate route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
