"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import styles from "../../components/Styles/tool-component/Benefits.module.css";
import getToolSlug from "@/utils/getToolSlug";

const toolBenefits = {
  "image-resizer": [
    "Resize images for websites, blogs, and online stores",
    "Optimize images for social media platforms",
    "Reduce image dimensions without installing software",
    "Maintain image quality while resizing",
    "Prepare images for email attachments and online forms",
    "Save time with instant online image resizing",
    "Works directly in your browser on any device",
    "Secure image processing with no permanent storage",
  ],

  "image-compressor": [
    "Reduce image file size for faster website loading",
    "Improve SEO and page speed performance",
    "Save storage space on devices and servers",
    "Share images more easily through email and messaging",
    "Maintain visual quality while compressing images",
    "Optimize images for social media and websites",
    "No software installation required",
    "Secure browser-based image compression",
  ],

  "pdf-to-word": [
    "Edit PDF content easily in Microsoft Word",
    "Save time compared to manual document recreation",
    "Preserve document formatting and layout",
    "Convert business and personal documents quickly",
    "Improve document editing workflows",
    "Access converted files instantly",
    "Works online without software installation",
    "Secure document processing",
  ],

  "word-to-pdf": [
    "Create professional PDF documents instantly",
    "Preserve fonts and formatting accurately",
    "Improve document compatibility across devices",
    "Share files in a universally accepted format",
    "Protect document layout from unwanted changes",
    "Fast online conversion process",
    "No registration required",
    "Secure file handling",
  ],


"jpg-to-pdf": [
  "Convert JPG images into PDF documents online",
  "Combine multiple JPG files into a single PDF",
  "Create printable and shareable PDF files",
  "Preserve image quality during conversion",
  "Perfect for scanned documents and photos",
  "No software installation required",
  "Fast JPG to PDF conversion process",
  "Secure file processing and privacy protection",
],

"pdf-merger": [
  "Merge multiple PDF files into one document",
  "Organize reports, invoices, and contracts easily",
  "Combine PDFs without losing formatting",
  "Improve document management workflows",
  "Share a single PDF instead of multiple files",
  "Fast online PDF merging",
  "Works on desktop and mobile devices",
  "Secure and private PDF processing",
],

"pdf-splitter": [
  "Split PDF files into smaller documents instantly",
  "Extract specific pages from PDF files",
  "Reduce PDF file size by separating pages",
  "Organize large PDF documents efficiently",
  "Save time managing PDF content",
  "No software installation needed",
  "Works directly in your browser",
  "Secure PDF splitting process",
],

"pdf-to-jpg": [
  "Convert PDF pages into high-quality JPG images",
  "Extract images from PDF documents easily",
  "Create shareable image files from PDFs",
  "Perfect for presentations and social media",
  "Maintain image clarity during conversion",
  "Fast PDF to JPG conversion",
  "No registration required",
  "Secure document processing",
],

"image-converter": [
  "Convert JPG, PNG, and WEBP images online",
  "Change image formats without quality loss",
  "Improve image compatibility across devices",
  "Optimize images for websites and apps",
  "Quick image format conversion process",
  "Supports popular image file types",
  "No software installation required",
  "Secure image conversion",
],

"image-cropper": [
  "Crop images online with precision",
  "Remove unwanted areas from photos",
  "Create perfect social media image sizes",
  "Improve image composition instantly",
  "Supports JPG, PNG, and WEBP formats",
  "Easy drag-and-crop functionality",
  "No software download required",
  "Secure image editing process",
],

"png-to-jpg": [
  "Convert PNG images to JPG format instantly",
  "Reduce image file size for faster uploads",
  "Improve compatibility with websites and apps",
  "Maintain image quality during conversion",
  "Perfect for online sharing and publishing",
  "Fast PNG to JPG conversion",
  "Works on all devices",
  "Secure image processing",
],

"jpg-to-png": [
  "Convert JPG images to PNG format online",
  "Generate high-quality PNG image files",
  "Ideal for graphics and design projects",
  "Improve image editing flexibility",
  "Fast JPG to PNG conversion process",
  "No registration or installation required",
  "Supports high-resolution images",
  "Secure file conversion",
],

"qr-code-generator": [
  "Generate QR codes for URLs and text instantly",
  "Create QR codes for business and marketing",
  "Share information quickly using QR technology",
  "Download high-quality QR code images",
  "Perfect for websites, flyers, and packaging",
  "Easy QR code creation process",
  "Works on desktop and mobile devices",
  "Free online QR code generator",
],

"password-generator": [
  "Generate strong and secure passwords instantly",
  "Protect accounts from unauthorized access",
  "Create random passwords with custom length",
  "Improve online security and privacy",
  "Generate passwords with symbols and numbers",
  "Perfect for personal and business accounts",
  "No data storage or tracking",
  "Free secure password generator",
],

"word-counter": [
  "Count words and characters instantly",
  "Track essay and article word limits",
  "Analyze writing length and readability",
  "Monitor content creation progress",
  "Useful for students and content writers",
  "Real-time word count updates",
  "Works directly in your browser",
  "Free online word counter tool",
],

"json-formatter": [
  "Format and beautify JSON data instantly",
  "Improve JSON readability for developers",
  "Debug API responses more efficiently",
  "Automatically indent JSON structures",
  "Save time during development",
  "Validate JSON formatting visually",
  "Browser-based JSON formatting",
  "Free online JSON formatter",
],

"json-validator": [
  "Validate JSON syntax instantly",
  "Detect JSON errors and formatting issues",
  "Improve API development workflows",
  "Verify JSON structure before deployment",
  "Reduce debugging time",
  "Fast and accurate validation results",
  "Works directly in your browser",
  "Free online JSON validator",
],

"base64-encoder": [
  "Encode text into Base64 format instantly",
  "Useful for APIs and data transmission",
  "Generate Base64 strings quickly",
  "Support web development workflows",
  "Fast and accurate encoding process",
  "No software installation required",
  "Works on all modern browsers",
  "Secure online Base64 encoding",
],

"base64-decoder": [
  "Decode Base64 strings instantly",
  "Convert encoded data into readable text",
  "Useful for APIs and development projects",
  "Fast Base64 decoding process",
  "Improve debugging efficiency",
  "Browser-based decoding tool",
  "No registration required",
  "Secure Base64 decoding online",
],

"html-minifier": [
  "Minify HTML code for faster websites",
  "Reduce HTML file size instantly",
  "Improve website loading speed",
  "Optimize pages for better SEO performance",
  "Remove unnecessary whitespace and comments",
  "Generate production-ready HTML code",
  "Browser-based HTML optimization",
  "Free online HTML minifier",
],

"css-minifier": [
  "Compress CSS code for faster page loads",
  "Reduce stylesheet file size instantly",
  "Improve website performance and SEO",
  "Generate production-ready CSS code",
  "Remove unnecessary spaces and comments",
  "Optimize frontend resources",
  "Fast browser-based processing",
  "Free online CSS minifier",
],

"js-minifier": [
  "Minify JavaScript code for better performance",
  "Reduce JS file size and bandwidth usage",
  "Improve website loading speed",
  "Generate optimized production code",
  "Remove unnecessary whitespace and formatting",
  "Enhance frontend performance",
  "Fast browser-based JavaScript minification",
  "Free online JS minifier",
],

"url-encoder": [
  "Encode URLs and query parameters safely",
  "Convert special characters into URL-safe format",
  "Useful for APIs and web applications",
  "Improve URL compatibility across systems",
  "Fast and accurate URL encoding",
  "Browser-based processing",
  "No software installation required",
  "Free online URL encoder",
],

"url-decoder": [
  "Decode encoded URLs instantly",
  "Convert URL-safe strings into readable text",
  "Analyze query parameters easily",
  "Useful for debugging and API development",
  "Fast URL decoding process",
  "Browser-based tool",
  "No registration required",
  "Free online URL decoder",
],


  "emi-calculator": [
    "Plan monthly budgets before taking a loan",
    "Compare EMIs across different interest rates",
    "Understand true cost of borrowing",
    "Useful for financial planning and advisory",
    "Avoid loan repayment surprises",
    "Quick decision-making for loan tenure",
  ],

  "compound-interest-calculator": [
    "Plan long-term investments confidently",
    "Compare compounding frequencies easily",
    "Understand true growth of savings",
    "Useful for students learning finance",
    "Helps choose between FD and RD options",
    "Free browser-based calculation",
  ],

  "simple-interest-calculator": [
    "Quickly estimate loan or deposit interest",
    "Useful for students learning finance basics",
    "Compare simple vs compound interest",
    "Plan short-term savings goals",
    "Fast, browser-based calculations",
    "No account needed",
  ],

  "gst-calculator": [
    "Simplifies GST-inclusive pricing",
    "Helps verify invoice amounts",
    "Useful for small business owners",
    "Saves time on manual tax math",
    "Works for any GST slab",
    "Free and instant results",
  ],

  "sales-tax-calculator": [
    "Helps estimate true checkout cost",
    "Useful for budgeting purchases",
    "Saves time on manual tax math",
    "Works for any region's tax rate",
    "Free and instant calculation",
    "Simple, easy-to-use interface",
  ],

  "discount-calculator": [
    "Helps compare sale prices quickly",
    "Useful for budgeting purchases",
    "Saves time on manual math",
    "Works for retailers and shoppers alike",
    "Free and instant calculation",
    "Simple, easy-to-use interface",
  ],

  "tip-calculator": [
    "Makes bill splitting fair and easy",
    "Saves time doing mental math at the table",
    "Useful for group dinners and events",
    "Helps calculate appropriate tips",
    "Free and instant calculation",
    "Simple, easy-to-use interface",
  ],

  "profit-margin-calculator": [
    "Helps set profitable selling prices",
    "Useful for retail and e-commerce sellers",
    "Clarifies margin vs markup confusion",
    "Saves time on manual calculations",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "break-even-calculator": [
    "Helps validate new business ideas",
    "Useful for pricing and cost planning",
    "Clarifies how many sales are needed to profit",
    "Saves time on manual financial math",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "sip-calculator": [
    "Helps plan long-term wealth creation",
    "Useful for mutual fund investors",
    "Clarifies power of compounding on SIPs",
    "Saves time on manual projection math",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "mortgage-calculator": [
    "Helps plan home buying budgets",
    "Useful for comparing loan terms",
    "Clarifies true cost of a mortgage",
    "Saves time on manual amortization math",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "bmr-calculator": [
    "Helps plan a calorie budget",
    "Useful foundation for weight loss or gain goals",
    "Clarifies your body's resting energy needs",
    "Saves time compared to manual formulas",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "calorie-calculator": [
    "Helps plan a personalized diet",
    "Useful for weight loss or muscle gain goals",
    "Clarifies realistic daily calorie targets",
    "Saves time compared to manual formulas",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "body-fat-calculator": [
    "Helps track body composition over time",
    "Useful for fitness and health goals",
    "No expensive equipment required",
    "Clarifies progress beyond just body weight",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "ideal-weight-calculator": [
    "Provides a healthy weight reference point",
    "Useful for fitness and diet planning",
    "Simple alternative to complex weight charts",
    "Helps set realistic health goals",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "gpa-calculator": [
    "Helps track academic performance",
    "Useful for students and advisors",
    "Saves time over manual GPA math",
    "Works for any grading scale using grade points",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "average-calculator": [
    "Saves time over manual calculation",
    "Useful for grading, statistics, and data review",
    "Works directly in your browser",
    "Handles large lists of numbers easily",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "percentage-change-calculator": [
    "Helps track price or sales changes over time",
    "Useful for business and financial analysis",
    "Saves time over manual percentage math",
    "Clarifies trends between two data points",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "date-difference-calculator": [
    "Helps calculate exact durations quickly",
    "Useful for legal, HR, and project timelines",
    "Saves time over manual calendar counting",
    "Clarifies exact days between milestones",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "time-duration-calculator": [
    "Helps calculate work or shift hours accurately",
    "Useful for HR, payroll, and scheduling",
    "Saves time over manual time math",
    "Clarifies exact meeting or event durations",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "length-converter": [
    "Simplifies switching between measurement systems",
    "Useful for travel, construction, and education",
    "Saves time over manual conversion math",
    "Works for both metric and imperial units",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "weight-converter": [
    "Simplifies switching between measurement systems",
    "Useful for tracking fitness and diet goals",
    "Saves time over manual conversion math",
    "Works for both metric and imperial units",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "temperature-converter": [
    "Simplifies understanding weather and science data",
    "Useful for students and travelers",
    "Saves time over manual conversion formulas",
    "Works across all three major temperature scales",
    "Free and instant results",
    "Simple, easy-to-use interface",
  ],

  "grammar-checker": [
    "Helps you write more professionally",
    "Catches mistakes before you hit send",
    "Useful for essays, emails, and posts",
    "Saves time over manual proofreading",
    "Great for non-native English writers",
    "Free and instant feedback",
  ],

  "language-translator": [
    "Useful for travel, study, and work",
    "Saves time compared to switching apps",
    "Helps understand foreign-language text quickly",
    "Great for quick everyday translations",
    "Free and always accessible",
    "Simple, easy-to-use interface",
  ],

  "text-to-speech-converter": [
    "Useful for proofreading by listening",
    "Great for accessibility needs",
    "Helps multitask while consuming content",
    "No app download required",
    "Free and instantly available",
    "Simple, easy-to-use interface",
  ],

  "speech-to-text-converter": [
    "Great for hands-free note taking",
    "Useful for quick voice memos and drafts",
    "Saves time compared to manual typing",
    "Helpful for accessibility needs",
    "Free and instantly available",
    "Simple, easy-to-use interface",
  ],

  "text-summarizer": [
    "Saves time reading long documents",
    "Helps with research and studying",
    "Useful for quick content overviews",
    "Great for professionals reviewing reports",
    "Free and instant",
    "Simple, easy-to-use interface",
  ],

  "paraphrasing-tool": [
    "Helps avoid repetitive phrasing",
    "Useful for rewording notes and drafts",
    "Adjusts tone for different audiences",
    "Saves time over manual rewriting",
    "Free and instant",
    "Simple, easy-to-use interface",
  ],

  "essay-generator": [
    "Helps overcome writer's block",
    "Useful for essay structure and brainstorming",
    "Saves time drafting a first version",
    "Great starting point for further editing",
    "Free and instant",
    "Simple, easy-to-use interface",
  ],

  "content-generator": [
    "Saves time writing marketing copy",
    "Useful for small businesses and marketers",
    "Great starting draft for any campaign",
    "No copywriter needed for quick content",
    "Free and instant",
    "Simple, easy-to-use interface",
  ],

  "resume-analyzer": [
    "Helps improve resumes before applying",
    "Useful second opinion for job seekers",
    "Highlights keyword gaps against a job post",
    "Saves cost of a professional resume review",
    "Free and instant",
    "Simple, easy-to-use interface",
  ],

  "cover-letter-generator": [
    "Saves time writing cover letters",
    "Helps tailor letters to each application",
    "Useful starting draft for any job seeker",
    "Reduces blank-page stress",
    "Free and instant",
    "Simple, easy-to-use interface",
  ],

  "email-reply-generator": [
    "Saves time replying to emails",
    "Helps maintain a consistent professional tone",
    "Useful for tricky or sensitive replies",
    "Reduces email-related stress",
    "Free and instant",
    "Simple, easy-to-use interface",
  ],

  "meeting-notes-summarizer": [
    "Saves time writing up meeting notes",
    "Ensures action items aren't forgotten",
    "Useful for teams and project managers",
    "Creates a shareable record of decisions",
    "Free and instant",
    "Simple, easy-to-use interface",
  ],

  "caption-generator": [
    "Saves time writing social captions",
    "Beats creative block for regular posters",
    "Useful for businesses and influencers",
    "Improves post engagement with better copy",
    "Free and instant",
    "Simple, easy-to-use interface",
  ],

  "slogan-generator": [
    "Saves time brainstorming taglines",
    "Useful for startups and small businesses",
    "No branding agency needed for first ideas",
    "Great for website, ads, and packaging copy",
    "Free and instant",
    "Simple, easy-to-use interface",
  ],

};

export default function Benefits() {
  const { slug } = useParams();

  const rawSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const currentSlug =
    getToolSlug(rawSlug);

  const items =
    toolBenefits[currentSlug] || [];

  if (!items.length) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Why Use This Tool?
      </h2>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
            }}
            whileHover={{
              scale: 1.04,
            }}
          >
            <div className={styles.icon}>
              ✓
            </div>

            <p className={styles.text}>
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}