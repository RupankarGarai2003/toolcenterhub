"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import styles from "../../components/Styles/tool-component/Features.module.css";
import getToolSlug from "@/utils/getToolSlug";

const toolFeatures = {
  "image-resizer": [
    "Resize JPG, PNG and WEBP images online",
    "Custom image width and height settings",
    "Maintain original aspect ratio automatically",
    "Resize images by percentage or dimensions",
    "High-quality image resizing technology",
    "Instant browser-based image processing",
    "No software installation required",
    "Secure and private image handling",
  ],

  "image-compressor": [
    "Compress JPG, PNG and WEBP images",
    "Reduce image file size instantly",
    "Maintain image quality during compression",
    "Fast browser-based image optimization",
    "Supports multiple image formats",
    "No registration required",
    "Secure image processing",
    "Free online image compression",
  ],

  "pdf-to-word": [
    "Convert PDF files into editable Word documents",
    "Preserve document formatting and layout",
    "Fast PDF to DOCX conversion",
    "Supports business and personal documents",
    "Easy drag and drop workflow",
    "Secure file processing",
    "No software installation required",
    "Free online PDF conversion",
  ],

  "word-to-pdf": [
    "Convert DOC and DOCX files to PDF",
    "Maintain fonts and document formatting",
    "Fast Word to PDF conversion",
    "High-quality PDF output",
    "Supports Microsoft Word documents",
    "Secure browser-based processing",
    "Easy file uploads",
    "Free online conversion",
  ],

 
"jpg-to-pdf": [
  "Convert JPG and JPEG images to PDF documents",
  "Combine multiple images into a single PDF file",
  "Preserve image quality during PDF conversion",
  "Custom page size and layout options",
  "Fast browser-based image to PDF processing",
  "Supports high-resolution image files",
  "Secure file conversion with no storage",
  "Free online JPG to PDF tool",
],

"pdf-merger": [
  "Merge multiple PDF files into one document",
  "Arrange PDF files before combining",
  "Preserve original document formatting",
  "Fast PDF merging directly in your browser",
  "Supports business and personal documents",
  "Easy drag and drop file uploads",
  "Secure and private PDF processing",
  "Free online PDF merger",
],

"pdf-splitter": [
  "Split PDF files into smaller documents",
  "Extract specific pages from PDF files",
  "Create separate PDFs from selected pages",
  "Maintain original document quality",
  "Fast browser-based PDF splitting",
  "Supports large PDF documents",
  "Secure file handling and privacy protection",
  "Free online PDF splitter",
],

"pdf-to-jpg": [
  "Convert PDF pages into high-quality JPG images",
  "Extract images from PDF documents",
  "Supports multi-page PDF conversion",
  "Maintain image clarity and resolution",
  "Fast PDF to image conversion process",
  "Browser-based file processing",
  "Secure document conversion",
  "Free online PDF to JPG tool",
],

"image-converter": [
  "Convert images between JPG, PNG, and WEBP formats",
  "Preserve image quality during conversion",
  "Fast online image format conversion",
  "Supports popular image file types",
  "No software installation required",
  "Browser-based image processing",
  "Secure and private file handling",
  "Free online image converter",
],

"image-cropper": [
  "Crop images online with precision",
  "Remove unwanted areas from photos",
  "Custom crop dimensions and ratios",
  "Supports JPG, PNG, and WEBP images",
  "Maintain image quality after cropping",
  "Fast browser-based image editing",
  "No software download required",
  "Secure image processing",
],

"png-to-jpg": [
  "Convert PNG images to JPG format instantly",
  "Reduce image file size for easier sharing",
  "Maintain image quality during conversion",
  "Fast browser-based processing",
  "Supports high-resolution PNG files",
  "Improved compatibility with websites and apps",
  "Secure image conversion",
  "Free online PNG to JPG tool",
],

"jpg-to-png": [
  "Convert JPG and JPEG images to PNG format",
  "Generate high-quality PNG image files",
  "Supports transparent-ready workflows",
  "Fast online image conversion",
  "Maintain image clarity and detail",
  "No software installation required",
  "Secure browser-based processing",
  "Free online JPG to PNG converter",
],

"qr-code-generator": [
  "Generate QR codes for URLs, text, and contact details",
  "Create downloadable high-quality QR codes",
  "Supports business and marketing use cases",
  "Instant QR code generation",
  "Works on desktop and mobile devices",
  "Simple and user-friendly interface",
  "Secure browser-based processing",
  "Free online QR code generator",
],

"password-generator": [
  "Generate strong and secure passwords instantly",
  "Custom password length options",
  "Include letters, numbers, and symbols",
  "Create random passwords for maximum security",
  "Protect personal and business accounts",
  "Fast browser-based password generation",
  "No password storage or tracking",
  "Free online password generator",
],

"word-counter": [
  "Count words, characters, and sentences instantly",
  "Real-time text statistics and analysis",
  "Track writing progress efficiently",
  "Supports essays, articles, and reports",
  "Character count with and without spaces",
  "Fast browser-based text analysis",
  "No registration required",
  "Free online word counter tool",
],

"json-formatter": [
  "Format and beautify JSON data instantly",
  "Improve JSON readability and structure",
  "Automatic indentation and organization",
  "Supports large JSON datasets",
  "Useful for API development and testing",
  "Fast browser-based formatting",
  "Secure JSON processing",
  "Free online JSON formatter",
],

"json-validator": [
  "Validate JSON syntax instantly",
  "Detect JSON errors and formatting issues",
  "Verify JSON structure and validity",
  "Useful for APIs and development workflows",
  "Fast browser-based validation",
  "Detailed error checking",
  "Secure JSON processing",
  "Free online JSON validator",
],

"base64-encoder": [
  "Encode text into Base64 format instantly",
  "Fast and accurate Base64 conversion",
  "Useful for web development and APIs",
  "Supports text-based encoding workflows",
  "Browser-based processing",
  "No software installation required",
  "Secure encoding operations",
  "Free online Base64 encoder",
],

"base64-decoder": [
  "Decode Base64 strings into readable text",
  "Instant Base64 decoding results",
  "Useful for development and debugging",
  "Supports encoded text processing",
  "Fast browser-based decoding",
  "Simple and easy-to-use interface",
  "Secure decoding operations",
  "Free online Base64 decoder",
],

"html-minifier": [
  "Minify HTML code for faster website performance",
  "Remove unnecessary spaces and comments",
  "Reduce HTML file size instantly",
  "Generate production-ready HTML code",
  "Improve website loading speed",
  "Browser-based code optimization",
  "Secure processing of source code",
  "Free online HTML minifier",
],

"css-minifier": [
  "Compress CSS code for better performance",
  "Remove unnecessary whitespace and comments",
  "Reduce stylesheet file size instantly",
  "Generate optimized production-ready CSS",
  "Improve website loading speed",
  "Fast browser-based CSS processing",
  "Secure code handling",
  "Free online CSS minifier",
],

"js-minifier": [
  "Minify JavaScript code instantly",
  "Reduce JS file size for faster loading",
  "Generate optimized production-ready scripts",
  "Remove unnecessary formatting and whitespace",
  "Improve website performance and speed",
  "Browser-based JavaScript processing",
  "Secure code optimization",
  "Free online JS minifier",
],

"url-encoder": [
  "Encode URLs and query parameters safely",
  "Convert special characters into URL-safe format",
  "Useful for APIs and web applications",
  "Fast browser-based URL encoding",
  "Supports complex query strings",
  "Accurate URL conversion results",
  "Secure data processing",
  "Free online URL encoder",
],

"url-decoder": [
  "Decode encoded URLs instantly",
  "Convert URL-safe strings into readable text",
  "Analyze query parameters and encoded data",
  "Useful for debugging and web development",
  "Fast browser-based URL decoding",
  "Accurate decoding results",
  "Secure data processing",
  "Free online URL decoder",
],


  "emi-calculator": [
    "Instant EMI calculation for any loan",
    "Shows total interest and total payment",
    "Works for home, car and personal loans",
    "No signup or installation required",
    "Accurate reducing-balance formula",
    "Free and secure browser-based tool",
  ],

  "compound-interest-calculator": [
    "Supports multiple compounding frequencies",
    "Instant future value calculation",
    "Shows total compound interest earned",
    "Useful for investments and savings",
    "No signup required",
    "Accurate and fast calculations",
  ],

  "simple-interest-calculator": [
    "Instant simple interest calculation",
    "Shows total repayment amount",
    "Works for loans and deposits",
    "Simple and accurate formula",
    "No installation required",
    "Free and secure to use",
  ],

  "gst-calculator": [
    "Add or remove GST instantly",
    "Supports any GST percentage",
    "Shows base amount and GST separately",
    "Useful for invoices and billing",
    "No signup required",
    "Fast and accurate calculations",
  ],

  "sales-tax-calculator": [
    "Instant sales tax calculation",
    "Works with any tax rate",
    "Shows tax amount and total price",
    "Useful for shopping and invoicing",
    "No signup required",
    "Fast and accurate results",
  ],

  "discount-calculator": [
    "Instant discount and savings calculation",
    "Shows final discounted price",
    "Works for any percentage discount",
    "Useful for sales and shopping",
    "No signup required",
    "Fast and accurate results",
  ],

  "tip-calculator": [
    "Instant tip calculation",
    "Splits bill among multiple people",
    "Works with any tip percentage",
    "Useful for restaurants and group outings",
    "No signup required",
    "Fast and accurate results",
  ],

  "profit-margin-calculator": [
    "Instant profit, margin and markup calculation",
    "Useful for pricing products",
    "Shows both margin and markup",
    "Works for any currency",
    "No signup required",
    "Fast and accurate results",
  ],

  "break-even-calculator": [
    "Instant break-even point calculation",
    "Shows both units and revenue needed",
    "Useful for new product planning",
    "Works for any business type",
    "No signup required",
    "Fast and accurate results",
  ],

  "sip-calculator": [
    "Instant SIP future value estimate",
    "Shows invested amount vs estimated gains",
    "Useful for long-term investment planning",
    "Works for any monthly amount or duration",
    "No signup required",
    "Fast and accurate results",
  ],

  "mortgage-calculator": [
    "Instant monthly mortgage payment estimate",
    "Shows total interest over loan term",
    "Works for any loan term or rate",
    "Useful for comparing mortgage offers",
    "No signup required",
    "Fast and accurate results",
  ],

  "bmr-calculator": [
    "Instant BMR calculation",
    "Uses accurate Mifflin-St Jeor formula",
    "Works for both men and women",
    "Useful for diet and fitness planning",
    "No signup required",
    "Fast and accurate results",
  ],

  "calorie-calculator": [
    "Instant daily calorie needs calculation",
    "Accounts for activity level",
    "Shows maintenance, loss and gain targets",
    "Useful for diet and fitness planning",
    "No signup required",
    "Fast and accurate results",
  ],

  "body-fat-calculator": [
    "Instant body fat percentage estimate",
    "Uses the proven US Navy method",
    "No calipers or special equipment needed",
    "Works for both men and women",
    "No signup required",
    "Fast and private calculation",
  ],

  "ideal-weight-calculator": [
    "Instant ideal weight estimate",
    "Uses the established Devine formula",
    "Works for both men and women",
    "Useful as a general health reference",
    "No signup required",
    "Fast and private calculation",
  ],

  "gpa-calculator": [
    "Instant weighted GPA calculation",
    "Supports any number of courses",
    "Shows total credit hours used",
    "Useful for semester or cumulative GPA",
    "No signup required",
    "Fast and accurate results",
  ],

  "average-calculator": [
    "Instant average, sum, min and max calculation",
    "Works with any list of numbers",
    "No spreadsheet needed",
    "Useful for students and analysts",
    "No signup required",
    "Fast and accurate results",
  ],

  "percentage-change-calculator": [
    "Instant percentage increase or decrease calculation",
    "Clearly labels increase vs decrease",
    "Works with positive or negative values",
    "Useful for tracking growth or decline",
    "No signup required",
    "Fast and accurate results",
  ],

  "date-difference-calculator": [
    "Instant date difference calculation",
    "Shows years, months, days and total days",
    "Automatically accounts for leap years",
    "Useful for contracts and project planning",
    "No signup required",
    "Fast and accurate results",
  ],

  "time-duration-calculator": [
    "Instant time duration calculation",
    "Handles durations that cross midnight",
    "Shows hours, minutes and total minutes",
    "Useful for shift and work hour tracking",
    "No signup required",
    "Fast and accurate results",
  ],

  "length-converter": [
    "Instant length unit conversion",
    "Supports metric and imperial units",
    "Handles decimals accurately",
    "Useful for students and professionals",
    "No signup required",
    "Fast and accurate results",
  ],

  "weight-converter": [
    "Instant weight unit conversion",
    "Supports metric and imperial units",
    "Handles decimals accurately",
    "Useful for fitness, cooking, and shipping",
    "No signup required",
    "Fast and accurate results",
  ],

  "temperature-converter": [
    "Instant temperature conversion",
    "Supports Celsius, Fahrenheit and Kelvin",
    "Handles negative values correctly",
    "Useful for science, travel, and cooking",
    "No signup required",
    "Fast and accurate results",
  ],

  "grammar-checker": [
    "Instant grammar and spell checking",
    "Clear explanations for each issue",
    "One-click apply all suggestions",
    "No signup or word limit",
    "Works directly in your browser",
    "Free and fast results",
  ],

  "language-translator": [
    "Instant translation between 12 languages",
    "One-click language swap",
    "No signup or installation required",
    "Free to use with no hidden limits",
    "Works directly in your browser",
    "Fast and simple interface",
  ],

  "text-to-speech-converter": [
    "Instant text-to-speech playback",
    "Adjustable speed and pitch",
    "Multiple voice options",
    "No signup or installation required",
    "Runs entirely in your browser",
    "Free and private \u2014 text never leaves your device",
  ],

  "speech-to-text-converter": [
    "Real-time speech-to-text transcription",
    "No signup or installation required",
    "Editable transcript output",
    "One-click copy to clipboard",
    "Works directly in your browser",
    "Free and private microphone-based transcription",
  ],

  "text-summarizer": [
    "AI-powered summarization",
    "Adjustable summary length",
    "Works for articles, essays, and reports",
    "No signup required",
    "Fast results",
    "Free to use",
  ],

  "paraphrasing-tool": [
    "AI-powered paraphrasing",
    "Multiple tone options",
    "Preserves original meaning",
    "No signup required",
    "Fast results",
    "Free to use",
  ],

  "essay-generator": [
    "AI-powered essay drafting",
    "Adjustable length and tone",
    "Clear structure with intro, body, conclusion",
    "No signup required",
    "Fast results",
    "Free to use",
  ],

  "content-generator": [
    "AI-powered marketing copy generation",
    "Multiple content types in one tool",
    "Adjustable tone",
    "No signup required",
    "Fast results",
    "Free to use",
  ],

  "resume-analyzer": [
    "AI-powered resume feedback",
    "Optional job description matching",
    "Covers strengths, gaps, and suggestions",
    "No signup required",
    "Fast results",
    "Free to use",
  ],

  "cover-letter-generator": [
    "AI-powered cover letter drafting",
    "Tailored to job title and company",
    "Adjustable tone",
    "No signup required",
    "Fast results",
    "Free to use",
  ],

  "email-reply-generator": [
    "AI-powered email reply drafting",
    "Customizable intent and tone",
    "Works for any email scenario",
    "No signup required",
    "Fast results",
    "Free to use",
  ],

  "meeting-notes-summarizer": [
    "AI-powered meeting summarization",
    "Extracts decisions and action items",
    "Works with transcripts or rough notes",
    "No signup required",
    "Fast results",
    "Free to use",
  ],

  "caption-generator": [
    "AI-powered caption and hashtag generation",
    "Multiple caption options per request",
    "Platform-specific tone matching",
    "No signup required",
    "Fast results",
    "Free to use",
  ],

  "slogan-generator": [
    "AI-powered slogan generation",
    "8 unique options per request",
    "Multiple tone choices",
    "No signup required",
    "Fast results",
    "Free to use",
  ],

};

export default function Features() {
  const { slug } = useParams();

  const rawSlug = Array.isArray(slug)
  ? slug[0]
  : slug;

const currentSlug =
  getToolSlug(rawSlug);

  const items =
    toolFeatures[currentSlug] || [];

  if (!items.length) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Features
      </h2>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
            }}
            whileHover={{
              scale: 1.05,
            }}
            className={styles.card}
          >
            <div className={styles.glow}></div>

            <div className={styles.content}>
              <div className={styles.icon}>
                {i + 1}
              </div>

              <p className={styles.text}>
                {item}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}