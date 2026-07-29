// utils/seo.js

function formatName(slug) {
  return slug
    ?.replace(/-/g, " ")
    .replace(
      /\b\w/g,
      (c) => c.toUpperCase()
    );
}


const customSeo = {
  // IMAGE TOOLS

  "image-resizer": {
    title:
      "Image Resizer Online Free - Resize JPG, PNG & WEBP Images",

    description:
      "Resize JPG, PNG and WEBP images online for free. Change image dimensions instantly without losing quality. Fast, secure and easy-to-use image resizer.",

    keywords:
      "image resizer, resize image online, resize jpg, resize png, resize webp, change image dimensions, resize photos online, free image resizer",
  },

  "image-compressor": {
    title:
      "Image Compressor Online Free - Reduce JPG, PNG & WEBP File Size",

    description:
      "Compress JPG, PNG and WEBP images online without losing quality. Reduce image file size instantly for websites, email and social media.",

    keywords:
      "image compressor, compress image online, reduce image size, jpg compressor, png compressor, webp compressor",
  },

  "image-converter": {
    title:
      "Image Converter Online Free - Convert Images Instantly",

    description:
      "Convert images between JPG, PNG and WEBP formats online for free. Fast, secure and easy image conversion.",

    keywords:
      "image converter, convert image online, jpg converter, png converter, webp converter",
  },

  "image-cropper": {
    title:
      "Image Cropper Online Free - Crop Images Easily",

    description:
      "Crop JPG, PNG and WEBP images online for free. Adjust image dimensions and remove unwanted areas instantly.",

    keywords:
      "image cropper, crop image online, photo cropper, image editing tool",
  },

  "png-to-jpg": {
    title:
      "PNG to JPG Converter Online Free",

    description:
      "Convert PNG images to JPG format online for free. Fast image conversion without software installation.",

    keywords:
      "png to jpg, convert png to jpg, image converter",
  },

  "jpg-to-png": {
    title:
      "JPG to PNG Converter Online Free",

    description:
      "Convert JPG images to PNG format online instantly. Free and secure image conversion tool.",

    keywords:
      "jpg to png, convert jpg to png, image converter",
  },

  // PDF TOOLS

  "pdf-to-word": {
    title:
      "PDF to Word Converter Online Free - Convert PDF to DOCX",

    description:
      "Convert PDF files to editable Word documents online for free. Preserve formatting, text and layout with fast and secure conversion.",

    keywords:
      "pdf to word, pdf to docx, convert pdf to word, pdf converter, pdf to editable word",
  },

  "word-to-pdf": {
    title:
      "Word to PDF Converter Online Free - Convert DOCX to PDF",

    description:
      "Convert Word documents to PDF online for free. Preserve formatting, fonts and layout with secure and fast conversion.",

    keywords:
      "word to pdf, docx to pdf, convert word to pdf, word document to pdf",
  },

  "jpg-to-pdf": {
    title:
      "JPG to PDF Converter Online Free",

    description:
      "Convert JPG images into PDF documents online for free. Combine multiple images into a single PDF file instantly.",

    keywords:
      "jpg to pdf, image to pdf, convert jpg to pdf, pdf converter",
  },

  "pdf-merger": {
    title:
      "PDF Merger Online Free - Combine PDF Files Easily",

    description:
      "Merge multiple PDF files into a single document online for free. Fast, secure and easy-to-use PDF merger.",

    keywords:
      "pdf merger, merge pdf online, combine pdf files, join pdf documents",
  },

  "pdf-splitter": {
    title:
      "PDF Splitter Online Free - Split PDF Pages Easily",

    description:
      "Split PDF files into separate pages online for free. Extract pages instantly with our secure PDF splitter.",

    keywords:
      "pdf splitter, split pdf online, extract pdf pages, separate pdf pages",
  },

  "pdf-to-jpg": {
    title:
      "PDF to JPG Converter Online Free",

    description:
      "Convert PDF pages into high-quality JPG images online for free. Fast and secure PDF to image conversion.",

    keywords:
      "pdf to jpg, convert pdf to image, pdf image converter",
  },

  // UTILITY TOOLS

  "qr-code-generator": {
    title:
      "QR Code Generator Online Free - Create QR Codes Instantly",

    description:
      "Generate QR codes online for URLs, text, contact information and more. Free, fast and easy QR code generator.",

    keywords:
      "qr code generator, create qr code, qr maker, free qr generator",
  },

  "password-generator": {
    title:
      "Password Generator Online Free - Create Strong Passwords",

    description:
      "Generate secure and random passwords online instantly. Create strong passwords to improve account security.",

    keywords:
      "password generator, random password generator, secure password creator",
  },

  "word-counter": {
    title:
      "Word Counter Online Free - Count Words and Characters",

    description:
      "Count words, characters, sentences and paragraphs online instantly. Free word counter tool for writers and students.",

    keywords:
      "word counter, character counter, text counter, word count tool",
  },

  // DEVELOPER TOOLS

  "json-formatter": {
    title:
      "JSON Formatter Online Free - Format JSON Instantly",

    description:
      "Format and beautify JSON data online. Improve readability and validate JSON structure instantly.",

    keywords:
      "json formatter, json beautifier, format json online",
  },

  "json-validator": {
    title:
      "JSON Validator Online Free - Validate JSON Data",

    description:
      "Validate JSON data online and detect syntax errors instantly. Fast and accurate JSON validation tool.",

    keywords:
      "json validator, validate json, json checker",
  },

  "base64-encoder": {
    title:
      "Base64 Encoder Online Free",

    description:
      "Encode text and data into Base64 format online instantly. Fast and secure Base64 encoder tool.",

    keywords:
      "base64 encoder, encode base64, text to base64",
  },

  "base64-decoder": {
    title:
      "Base64 Decoder Online Free",

    description:
      "Decode Base64 encoded text and data online instantly. Fast and easy Base64 decoder tool.",

    keywords:
      "base64 decoder, decode base64, base64 converter",
  },

  "html-minifier": {
    title:
      "HTML Minifier Online Free - Minify HTML Code",

    description:
      "Minify HTML code online to reduce file size and improve website performance instantly.",

    keywords:
      "html minifier, minify html, html compressor",
  },

  "css-minifier": {
    title:
      "CSS Minifier Online Free - Minify CSS Code",

    description:
      "Minify CSS code online to reduce file size and improve website performance. Fast and secure CSS minifier.",

    keywords:
      "css minifier, minify css, css compressor",
  },

  "js-minifier": {
    title:
      "JavaScript Minifier Online Free - Minify JS Code",

    description:
      "Minify JavaScript code online and reduce file size instantly. Improve performance with our JS minifier.",

    keywords:
      "js minifier, javascript minifier, minify javascript",
  },

  "url-encoder": {
    title:
      "URL Encoder Online Free - Encode URLs Instantly",

    description:
      "Encode URLs and special characters online instantly. Fast and easy URL encoding tool.",

    keywords:
      "url encoder, encode url, url encoding tool",
  },

  "url-decoder": {
    title:
      "URL Decoder Online Free - Decode URLs Instantly",

    description:
      "Decode encoded URLs and special characters online instantly. Free URL decoder tool.",

    keywords:
      "url decoder, decode url, url decoding tool",
  },
  "emi-calculator": {
    title: "EMI Calculator Online Free - Calculate Loan EMI Instantly",
    description: "Calculate your loan EMI, total interest and total payment online for free. Works for home loans, car loans and personal loans.",
    keywords: "emi calculator, loan emi calculator, home loan emi, car loan emi calculator, calculate emi online",
  },

  "compound-interest-calculator": {
    title: "Compound Interest Calculator Online Free - Calculate Future Value",
    description: "Calculate compound interest and future value of your investment online for free with annual, quarterly or monthly compounding.",
    keywords: "compound interest calculator, calculate compound interest, future value calculator, investment growth calculator",
  },

  "simple-interest-calculator": {
    title: "Simple Interest Calculator Online Free - Calculate Interest Instantly",
    description: "Calculate simple interest and total amount online for free. Fast and accurate interest calculator for loans and deposits.",
    keywords: "simple interest calculator, calculate simple interest, interest calculator online, si formula calculator",
  },

  "gst-calculator": {
    title: "GST Calculator Online Free - Add or Remove GST Instantly",
    description: "Calculate GST online for free. Add or remove GST from any amount and get an instant breakdown of base price, GST and total.",
    keywords: "gst calculator, gst calculator online, add gst calculator, remove gst calculator, gst amount calculator",
  },

  "sales-tax-calculator": {
    title: "Sales Tax Calculator Online Free - Calculate Tax & Total Price",
    description: "Calculate sales tax and total price online for free. Enter price and tax rate to get an instant, accurate breakdown.",
    keywords: "sales tax calculator, calculate sales tax, tax calculator online, price with tax calculator",
  },

  "discount-calculator": {
    title: "Discount Calculator Online Free - Calculate Sale Price & Savings",
    description: "Calculate discounted price and savings online for free. Enter the original price and discount percentage for an instant breakdown.",
    keywords: "discount calculator, calculate discount, sale price calculator, percentage off calculator",
  },

  "tip-calculator": {
    title: "Tip Calculator Online Free - Calculate Tip & Split Bill",
    description: "Calculate tip amount and split the bill among multiple people online for free. Fast, accurate and easy to use.",
    keywords: "tip calculator, bill splitter, calculate tip online, split bill calculator, restaurant tip calculator",
  },

  "profit-margin-calculator": {
    title: "Profit Margin Calculator Online Free - Calculate Margin & Markup",
    description: "Calculate profit, profit margin and markup online for free. Enter cost and selling price for an instant breakdown.",
    keywords: "profit margin calculator, markup calculator, calculate profit margin, margin vs markup calculator",
  },

  "break-even-calculator": {
    title: "Break-Even Calculator Online Free - Calculate Break-Even Point",
    description: "Calculate your break-even point in units and revenue online for free. Ideal for new business and product planning.",
    keywords: "break even calculator, break even point calculator, calculate break even, business break even analysis",
  },

  "sip-calculator": {
    title: "SIP Calculator Online Free - Calculate SIP Future Value",
    description: "Calculate the future value of your monthly SIP investment online for free. See projected returns instantly.",
    keywords: "sip calculator, sip calculator online, mutual fund sip calculator, calculate sip returns",
  },

  "mortgage-calculator": {
    title: "Mortgage Calculator Online Free - Calculate Monthly Payment",
    description: "Calculate your monthly mortgage payment and total interest online for free. Fast and accurate home loan calculator.",
    keywords: "mortgage calculator, home loan calculator, calculate mortgage payment, monthly mortgage calculator",
  },

  "bmr-calculator": {
    title: "BMR Calculator Online Free - Calculate Basal Metabolic Rate",
    description: "Calculate your Basal Metabolic Rate (BMR) online for free using the Mifflin-St Jeor formula. Fast and accurate.",
    keywords: "bmr calculator, basal metabolic rate calculator, calculate bmr, mifflin st jeor calculator",
  },

  "calorie-calculator": {
    title: "Calorie Calculator Online Free - Daily Calorie Needs",
    description: "Calculate your daily calorie needs online for free based on activity level. Get maintenance, weight loss and weight gain targets.",
    keywords: "calorie calculator, daily calorie calculator, calculate calorie needs, weight loss calorie calculator",
  },

  "body-fat-calculator": {
    title: "Body Fat Calculator Online Free - US Navy Method",
    description: "Estimate your body fat percentage online for free using the US Navy circumference method. No calipers required.",
    keywords: "body fat calculator, body fat percentage calculator, us navy body fat calculator, calculate body fat",
  },

  "ideal-weight-calculator": {
    title: "Ideal Weight Calculator Online Free - Devine Formula",
    description: "Estimate your ideal body weight online for free using the Devine formula. Quick and easy health reference tool.",
    keywords: "ideal weight calculator, calculate ideal weight, devine formula calculator, healthy weight calculator",
  },

  "gpa-calculator": {
    title: "GPA Calculator Online Free - Calculate Your Grade Point Average",
    description: "Calculate your GPA online for free from grade points and credit hours. Fast, accurate weighted GPA calculator.",
    keywords: "gpa calculator, calculate gpa online, grade point average calculator, weighted gpa calculator",
  },

  "average-calculator": {
    title: "Average Calculator Online Free - Calculate Mean, Sum, Min & Max",
    description: "Calculate the average, sum, minimum and maximum of a list of numbers online for free. Fast and accurate.",
    keywords: "average calculator, calculate average online, mean calculator, sum calculator",
  },

  "percentage-change-calculator": {
    title: "Percentage Change Calculator Online Free - Increase or Decrease",
    description: "Calculate percentage increase or decrease between two values online for free. Fast and accurate percentage change calculator.",
    keywords: "percentage change calculator, percentage increase calculator, percentage decrease calculator, calculate percent change",
  },

  "date-difference-calculator": {
    title: "Date Difference Calculator Online Free - Days Between Dates",
    description: "Calculate the exact difference between two dates online for free in years, months and days. Fast and accurate.",
    keywords: "date difference calculator, days between dates calculator, date duration calculator, calculate date difference",
  },

  "time-duration-calculator": {
    title: "Time Duration Calculator Online Free - Calculate Hours Between Times",
    description: "Calculate the exact duration between two times online for free, including overnight durations. Fast and accurate.",
    keywords: "time duration calculator, time difference calculator, hours calculator, calculate time between two times",
  },

  "length-converter": {
    title: "Length Converter Online Free - Convert Meters, Feet, Miles & More",
    description: "Convert length units online for free including meters, feet, miles, yards, inches and more. Fast and accurate.",
    keywords: "length converter, convert length units, meters to feet converter, miles to km converter",
  },

  "weight-converter": {
    title: "Weight Converter Online Free - Convert Kg, Pounds, Ounces & More",
    description: "Convert weight units online for free including kilograms, pounds, ounces, grams and metric tons. Fast and accurate.",
    keywords: "weight converter, convert weight units, kg to lbs converter, pounds to kg converter",
  },

  "temperature-converter": {
    title: "Temperature Converter Online Free - Celsius, Fahrenheit & Kelvin",
    description: "Convert temperature online for free between Celsius, Fahrenheit and Kelvin. Fast, accurate and easy to use.",
    keywords: "temperature converter, celsius to fahrenheit converter, fahrenheit to celsius, kelvin converter",
  },

  "grammar-checker": {
    title: "Grammar Checker Online Free - Check Grammar & Spelling Instantly",
    description: "Check your text for grammar, spelling and punctuation mistakes online for free. Instant suggestions, no signup required.",
    keywords: "grammar checker, free grammar checker, spell checker online, check grammar online, punctuation checker",
  },

  "language-translator": {
    title: "Language Translator Online Free - Translate Text Instantly",
    description: "Translate text between English, Spanish, French, German, Hindi and more online for free. Fast and instant translation.",
    keywords: "language translator, free online translator, text translator, translate text online",
  },

  "text-to-speech-converter": {
    title: "Text to Speech Converter Online Free - Convert Text to Audio",
    description: "Convert text to natural-sounding speech online for free, directly in your browser. Adjustable voice, speed and pitch.",
    keywords: "text to speech, tts online free, text to speech converter, text to audio online",
  },

  "speech-to-text-converter": {
    title: "Speech to Text Converter Online Free - Voice to Text Instantly",
    description: "Convert speech to text online for free using your microphone. Real-time voice transcription, no signup required.",
    keywords: "speech to text, voice to text converter, speech to text online free, voice typing online",
  },

  "text-summarizer": {
    title: "AI Text Summarizer Online Free - Summarize Any Text Instantly",
    description: "Summarize articles, essays and documents online for free using AI. Get a clear, concise summary in seconds.",
    keywords: "ai text summarizer, free text summarizer, summarize text online, ai summary generator",
  },

  "paraphrasing-tool": {
    title: "AI Paraphrasing Tool Online Free - Rewrite Text Instantly",
    description: "Paraphrase and rewrite text online for free using AI. Choose a tone and get a fresh version of your text instantly.",
    keywords: "ai paraphrasing tool, free paraphrase online, sentence rewriter, ai rewrite text",
  },

  "essay-generator": {
    title: "AI Essay Generator Online Free - Generate Essays Instantly",
    description: "Generate a well-structured essay on any topic online for free using AI. Choose length and tone instantly.",
    keywords: "ai essay generator, free essay writer, ai essay writer online, generate essay online",
  },

  "content-generator": {
    title: "AI Content Generator Online Free - Generate Marketing Copy Instantly",
    description: "Generate blog intros, product descriptions, social posts and ad copy online for free using AI.",
    keywords: "ai content generator, free content writer, ai copywriting tool, product description generator",
  },

  "resume-analyzer": {
    title: "AI Resume Analyzer Online Free - Get Instant Resume Feedback",
    description: "Get AI-powered resume feedback online for free. Check strengths, weaknesses and job description keyword match instantly.",
    keywords: "ai resume analyzer, resume checker online, ats resume checker, free resume feedback",
  },

  "cover-letter-generator": {
    title: "AI Cover Letter Generator Online Free - Write a Cover Letter Instantly",
    description: "Generate a personalized cover letter online for free using AI. Tailored to any job title and company in seconds.",
    keywords: "ai cover letter generator, free cover letter writer, cover letter maker online, ai job application letter",
  },

  "email-reply-generator": {
    title: "AI Email Reply Generator Online Free - Draft Email Replies Instantly",
    description: "Generate a smart, ready-to-send email reply online for free using AI. Choose your intent and tone instantly.",
    keywords: "ai email reply generator, free email reply writer, ai email assistant, auto reply generator",
  },

  "meeting-notes-summarizer": {
    title: "AI Meeting Notes Summarizer Online Free - Summarize Meetings Instantly",
    description: "Turn meeting transcripts into key points, decisions and action items online for free using AI.",
    keywords: "ai meeting notes summarizer, meeting summary generator, ai meeting minutes, summarize meeting transcript",
  },

  "caption-generator": {
    title: "AI Caption & Hashtag Generator Free - Instagram, TikTok Captions",
    description: "Generate catchy social media captions and hashtags online for free using AI. Works for Instagram, TikTok and more.",
    keywords: "ai caption generator, instagram caption generator, hashtag generator free, ai social media captions",
  },

  "slogan-generator": {
    title: "AI Slogan Generator Online Free - Generate Taglines Instantly",
    description: "Generate catchy business slogans and taglines online for free using AI. Get 8 unique options in seconds.",
    keywords: "ai slogan generator, free tagline generator, business slogan maker, ai tagline generator",
  },

};

export function getSeoData(
  tool,
  limit,
  unit,
  rawSlug = ""
) {
  const name =
    formatName(tool);

  const slug =
    rawSlug.toLowerCase();

  /* IMAGE RESIZER - SIZE VARIANTS */

  if (tool === "image-resizer" && limit) {
  const unit = slug.includes("mb") ? "MB" : "KB";

  return {
    title: `Resize Image Under ${limit}${unit} Online Free`,

    description: `Resize image under ${limit}${unit} online without losing quality. Perfect for job applications, government forms, passport photos, exam forms, email attachments, and website uploads.`,

    keywords: `
      resize image under ${limit}${unit.toLowerCase()},
      image resizer ${limit}${unit.toLowerCase()},
      reduce image size ${limit}${unit.toLowerCase()},
      compress image under ${limit}${unit.toLowerCase()},
      online image resizer
    `,
  };
}

  /* IMAGE COMPRESSOR - SIZE VARIANTS */

  if (
    tool === "image-compressor" &&
    limit
  ) {
    return {
      title: `Compress Image To ${limit}${unit} Online Free`,

      description: `Compress image to ${limit}KB while maintaining image quality. Fast, secure and free online image compression tool.`,

      keywords: `
        compress image to ${limit}kb,
        image compressor ${limit}kb,
        reduce image size,
        image compression online
      `,
    };
  }

  /* INSTAGRAM */

  if (
    tool === "image-resizer" &&
    slug.includes("instagram")
  ) {
    return {
      title:
        "Image Resizer For Instagram Online Free",

      description:
        "Resize images for Instagram posts, stories, reels and profile photos online. Fast and free image resizer.",

      keywords:
        "instagram image resizer, resize image for instagram, instagram image size, instagram photo resize",
    };
  }

  /* FACEBOOK */

  if (
    tool === "image-resizer" &&
    slug.includes("facebook")
  ) {
    return {
      title:
        "Image Resizer For Facebook Online Free",

      description:
        "Resize images for Facebook posts, cover photos and profile pictures online instantly.",

      keywords:
        "facebook image resizer, resize image for facebook, facebook image size",
    };
  }

  /* WHATSAPP */

  if (
    tool === "image-resizer" &&
    slug.includes("whatsapp")
  ) {
    return {
      title:
        "Image Resizer For WhatsApp Online Free",

      description:
        "Resize images for WhatsApp profile photos, status images and sharing. Fast and free online tool.",

      keywords:
        "whatsapp image resizer, resize image for whatsapp, whatsapp photo resize",
    };
  }

  /* LINKEDIN */

  if (
    tool === "image-resizer" &&
    slug.includes("linkedin")
  ) {
    return {
      title:
        "Image Resizer For LinkedIn Online Free",

      description:
        "Resize images for LinkedIn posts, banners and profile pictures with the correct dimensions.",

      keywords:
        "linkedin image resizer, resize image for linkedin, linkedin banner size",
    };
  }

  /* YOUTUBE */

  if (
    tool === "image-resizer" &&
    slug.includes("youtube")
  ) {
    return {
      title:
        "Image Resizer For YouTube Thumbnail Online Free",

      description:
        "Resize images for YouTube thumbnails with the perfect dimensions and quality.",

      keywords:
        "youtube thumbnail resizer, resize image for youtube thumbnail, youtube image size",
    };
  }

  /* CUSTOM TOOL SEO */

  if (customSeo[tool]) {
    return customSeo[tool];
  }

  /* DEFAULT */

  return {
    title:
      `${name} Online Free`,

    description: `Use our free ${name} tool online. Fast, secure and works directly in your browser with no signup required.`,

    keywords: `${tool}, ${tool} online, free ${tool}`,
  };
}