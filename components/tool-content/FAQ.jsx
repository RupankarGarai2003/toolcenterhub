"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../components/Styles/tool-component/FAQ.module.css";
import getToolSlug from "@/utils/getToolSlug";
import {
  getVariantFaqs,
} from "@/utils/getVariantFaqs";

/* COMMON FAQs */
const commonFAQ = [
  {
    q: "Is this tool free to use?",
    a: "Yes, this tool is completely free to use without any hidden charges.",
  },

  {
    q: "Do I need to create an account?",
    a: "No, you can use this tool instantly without registration or login.",
  },

  {
    q: "Are my files secure?",
    a: "Yes, files are processed securely and are not permanently stored.",
  },
];

/* TOOL SPECIFIC FAQs */
const toolFAQs = {
  "image-resizer": [
    {
      q: "How do I resize an image online?",
      a: "Upload your image, choose the desired dimensions and download the resized image instantly.",
    },

    {
      q: "Which image formats can I resize?",
      a: "JPG, JPEG, PNG and WEBP images are supported.",
    },

    {
      q: "Will resizing reduce image quality?",
      a: "The tool is optimized to maintain image quality while changing dimensions.",
    },

    {
      q: "Can I resize images for social media?",
      a: "Yes, you can resize images for Instagram, Facebook, LinkedIn and other platforms.",
    },

    {
      q: "Can I resize images without installing software?",
      a: "Yes, everything works directly in your browser.",
    },
  ],

  "image-compressor": [
    {
      q: "How does image compression work?",
      a: "The tool reduces file size while preserving image quality as much as possible.",
    },

    {
      q: "Can I compress JPG images?",
      a: "Yes, JPG images are fully supported.",
    },

    {
      q: "Can I compress PNG images?",
      a: "Yes, PNG images can be compressed online.",
    },

    {
      q: "Will compression affect image quality?",
      a: "Some quality reduction may occur depending on the settings used.",
    },

    {
      q: "What is the maximum compression possible?",
      a: "Results depend on the image format, dimensions and content.",
    },
  ],

  "pdf-to-word": [
    {
      q: "How do I convert PDF to Word?",
      a: "Upload your PDF file and download the converted DOCX file after processing.",
    },

    {
      q: "Will formatting be preserved?",
      a: "The tool attempts to preserve formatting, fonts and layout.",
    },

    {
      q: "Can I edit the converted Word file?",
      a: "Yes, the resulting DOCX file can be edited in Microsoft Word and compatible editors.",
    },

    {
      q: "Are scanned PDFs supported?",
      a: "Support depends on the PDF content and formatting.",
    },

    {
      q: "Is PDF to Word conversion free?",
      a: "Yes, the tool is completely free to use.",
    },
  ],

  "word-to-pdf": [
    {
      q: "How do I convert Word to PDF?",
      a: "Upload your DOC or DOCX file and download the generated PDF.",
    },

    {
      q: "Will fonts remain unchanged?",
      a: "The tool attempts to preserve fonts and document formatting.",
    },

    {
      q: "Can I convert DOCX files?",
      a: "Yes, DOCX files are supported.",
    },

    {
      q: "Will images remain inside the PDF?",
      a: "Yes, embedded images are included in the converted PDF.",
    },

    {
      q: "Is Word to PDF conversion secure?",
      a: "Yes, files are processed securely.",
    },
  ],

  "jpg-to-pdf": [
    {
      q: "Can I convert JPG images into PDF files?",
      a: "Yes, upload one or multiple JPG images and convert them into PDF.",
    },

    {
      q: "Can multiple images be combined into one PDF?",
      a: "Yes, supported images can be merged into a single PDF.",
    },

    {
      q: "Will image quality be preserved?",
      a: "The tool aims to maintain image quality during conversion.",
    },
  ],

  "pdf-merger": [
    {
      q: "How do I merge PDF files?",
      a: "Upload multiple PDFs and combine them into a single document.",
    },

    {
      q: "Can I rearrange PDF files before merging?",
      a: "Depending on the tool features, file order can be adjusted before merging.",
    },

    {
      q: "Is there a limit on the number of PDFs?",
      a: "Limits may vary depending on file size and browser performance.",
    },
  ],

  "pdf-splitter": [
    {
      q: "How do I split a PDF file?",
      a: "Upload a PDF and choose the pages you want to extract.",
    },

    {
      q: "Can I extract a single page?",
      a: "Yes, individual pages can be separated.",
    },

    {
      q: "Will the original PDF remain unchanged?",
      a: "Yes, the original file is not modified.",
    },
  ],

  "pdf-to-jpg": [
    {
      q: "Can I convert PDF pages into images?",
      a: "Yes, each PDF page can be converted into JPG format.",
    },

    {
      q: "Will image quality be preserved?",
      a: "The tool aims to generate high-quality image output.",
    },

    {
      q: "Can multi-page PDFs be converted?",
      a: "Yes, multiple pages can be processed.",
    },
  ],


  "image-converter": [
    {
      q: "Which image formats can I convert?",
      a: "You can convert between popular formats such as JPG, PNG, and WEBP."
    },
    {
      q: "Will image quality be affected during conversion?",
      a: "The tool is designed to preserve image quality as much as possible during conversion."
    },
    {
      q: "Can I convert images online without software?",
      a: "Yes, the conversion process works directly in your browser."
    },
    {
      q: "Is image conversion free?",
      a: "Yes, the tool is completely free to use."
    },
    {
      q: "Are uploaded images stored permanently?",
      a: "No, uploaded files are processed securely and are not permanently stored."
    }
  ],

  "image-cropper": [
    {
      q: "How do I crop an image online?",
      a: "Upload your image, select the desired area, and download the cropped result."
    },
    {
      q: "Can I crop JPG and PNG images?",
      a: "Yes, JPG, PNG, and WEBP images are supported."
    },
    {
      q: "Will cropping reduce image quality?",
      a: "Cropping removes unwanted areas without significantly affecting image quality."
    },
    {
      q: "Can I crop images for social media?",
      a: "Yes, you can crop images to fit social media dimensions and requirements."
    },
    {
      q: "Is the image cropper free?",
      a: "Yes, you can crop images online for free."
    }
  ],

  "png-to-jpg": [
    {
      q: "How do I convert PNG to JPG?",
      a: "Upload a PNG image and download the converted JPG file."
    },
    {
      q: "Why convert PNG to JPG?",
      a: "JPG files are often smaller and more suitable for websites and sharing."
    },
    {
      q: "Will transparency be preserved?",
      a: "JPG does not support transparency, so transparent areas may be replaced with a background color."
    },
    {
      q: "Can I convert multiple PNG files?",
      a: "Support for multiple files depends on the tool's capabilities."
    },
    {
      q: "Is PNG to JPG conversion secure?",
      a: "Yes, uploaded files are processed securely."
    }
  ],

  "jpg-to-png": [
    {
      q: "How do I convert JPG to PNG?",
      a: "Upload your JPG image and download the converted PNG version."
    },
    {
      q: "Why convert JPG to PNG?",
      a: "PNG is commonly used for higher-quality graphics and lossless image storage."
    },
    {
      q: "Will image quality improve after conversion?",
      a: "Converting formats does not increase image quality but preserves the existing image."
    },
    {
      q: "Can I use JPG to PNG for design projects?",
      a: "Yes, PNG files are widely used in graphic design and web development."
    },
    {
      q: "Is JPG to PNG conversion free?",
      a: "Yes, the tool is free to use."
    }
  ],

  "qr-code-generator": [
    {
      q: "What can I create QR codes for?",
      a: "You can generate QR codes for URLs, text, contact information, Wi-Fi details, and more."
    },
    {
      q: "Can I download generated QR codes?",
      a: "Yes, QR codes can be downloaded and used anywhere."
    },
    {
      q: "Do QR codes expire?",
      a: "Standard QR codes do not expire as long as the linked content remains available."
    },
    {
      q: "Can I use QR codes for business purposes?",
      a: "Yes, QR codes are commonly used in marketing, packaging, and business materials."
    },
    {
      q: "Is the QR Code Generator free?",
      a: "Yes, it is completely free to use."
    }
  ],

  "password-generator": [
    {
      q: "How does the password generator work?",
      a: "The tool creates random passwords using letters, numbers, and special characters."
    },
    {
      q: "Can I generate strong passwords?",
      a: "Yes, the generated passwords are designed to be secure and difficult to guess."
    },
    {
      q: "Can I customize password length?",
      a: "Yes, you can choose the desired password length."
    },
    {
      q: "Are generated passwords stored?",
      a: "No, generated passwords are not stored or tracked."
    },
    {
      q: "Is the password generator free?",
      a: "Yes, it is completely free."
    }
  ],

  "word-counter": [
    {
      q: "What does the Word Counter measure?",
      a: "It counts words, characters, sentences, and paragraphs in your text."
    },
    {
      q: "Can I count words in large documents?",
      a: "Yes, the tool can analyze both short and long text content."
    },
    {
      q: "Is the word count updated automatically?",
      a: "Yes, results are updated in real time as you type or paste content."
    },
    {
      q: "Can students use the Word Counter?",
      a: "Yes, it is useful for essays, assignments, and academic writing."
    },
    {
      q: "Is my text stored?",
      a: "No, your text is not permanently stored."
    }
  ],

  "json-formatter": [
    {
      q: "What does a JSON Formatter do?",
      a: "It organizes JSON data into a readable and properly indented format."
    },
    {
      q: "Can I format large JSON files?",
      a: "Yes, large JSON content can be formatted for easier reading."
    },
    {
      q: "Does formatting change the data?",
      a: "No, formatting only changes the presentation of the JSON structure."
    },
    {
      q: "Who can use a JSON Formatter?",
      a: "Developers, testers, students, and API users commonly use it."
    },
    {
      q: "Is JSON formatting free?",
      a: "Yes, the tool is completely free."
    }
  ],

  "json-validator": [
    {
      q: "What does a JSON Validator check?",
      a: "It verifies whether JSON data follows valid syntax rules."
    },
    {
      q: "Can it detect JSON errors?",
      a: "Yes, invalid formatting and syntax issues can be identified."
    },
    {
      q: "Why is JSON validation important?",
      a: "It helps prevent errors in APIs, applications, and data processing systems."
    },
    {
      q: "Can I validate JSON online?",
      a: "Yes, validation is performed directly in your browser."
    },
    {
      q: "Is the JSON Validator free?",
      a: "Yes, it is free to use."
    }
  ],

  "base64-encoder": [
    {
      q: "What is Base64 encoding?",
      a: "Base64 encoding converts data into a text-based format suitable for transmission and storage."
    },
    {
      q: "Can I encode text online?",
      a: "Yes, simply enter text and generate the Base64 output instantly."
    },
    {
      q: "Is Base64 encoding encryption?",
      a: "No, Base64 is an encoding method, not encryption."
    },
    {
      q: "Who uses Base64 encoding?",
      a: "Developers and IT professionals commonly use Base64 in web and software development."
    },
    {
      q: "Is the Base64 Encoder free?",
      a: "Yes, it is completely free."
    }
  ],

  "base64-decoder": [
    {
      q: "What does a Base64 Decoder do?",
      a: "It converts Base64-encoded data back into readable text."
    },
    {
      q: "Can I decode Base64 strings online?",
      a: "Yes, simply paste the encoded content and decode it instantly."
    },
    {
      q: "Is Base64 decoding secure?",
      a: "Yes, decoding is performed securely within the tool."
    },
    {
      q: "Who uses Base64 decoding?",
      a: "Developers, administrators, and IT professionals frequently use it."
    },
    {
      q: "Is the Base64 Decoder free?",
      a: "Yes, it is completely free."
    }
  ],


  "html-minifier": [
    {
      q: "What does an HTML Minifier do?",
      a: "It removes unnecessary spaces, comments, and formatting from HTML code to reduce file size."
    },
    {
      q: "Will minifying HTML affect website functionality?",
      a: "No, HTML minification is designed to preserve functionality while reducing file size."
    },
    {
      q: "Why should I minify HTML?",
      a: "Minifying HTML can improve website loading speed and overall performance."
    },
    {
      q: "Can I minify HTML code online?",
      a: "Yes, simply paste your HTML code and get the minified version instantly."
    },
    {
      q: "Is the HTML Minifier free to use?",
      a: "Yes, the tool is completely free."
    }
  ],

  "css-minifier": [
    {
      q: "What does a CSS Minifier do?",
      a: "It compresses CSS code by removing unnecessary spaces, comments, and formatting."
    },
    {
      q: "Will CSS minification break my styles?",
      a: "No, CSS minification preserves styling while reducing file size."
    },
    {
      q: "Why should I minify CSS?",
      a: "Smaller CSS files load faster and can improve website performance."
    },
    {
      q: "Can I minify CSS online without software?",
      a: "Yes, the tool works directly in your browser."
    },
    {
      q: "Is CSS Minifier free?",
      a: "Yes, it is completely free to use."
    }
  ],

  "js-minifier": [
    {
      q: "What does a JS Minifier do?",
      a: "It reduces JavaScript file size by removing unnecessary whitespace and formatting."
    },
    {
      q: "Will JavaScript minification affect functionality?",
      a: "No, properly minified JavaScript should work exactly the same as the original code."
    },
    {
      q: "Why should I minify JavaScript?",
      a: "Minified JavaScript files load faster and help improve website performance."
    },
    {
      q: "Can I minify JavaScript online?",
      a: "Yes, simply paste your JavaScript code and generate a minified version instantly."
    },
    {
      q: "Is the JS Minifier free?",
      a: "Yes, the tool is completely free."
    }
  ],

  "url-encoder": [
    {
      q: "What is URL encoding?",
      a: "URL encoding converts special characters into a format that can be safely transmitted in URLs."
    },
    {
      q: "Why do I need to encode URLs?",
      a: "Encoding ensures URLs work correctly when they contain spaces, symbols, or special characters."
    },
    {
      q: "Can I encode URL parameters online?",
      a: "Yes, the tool can encode URLs and query parameters instantly."
    },
    {
      q: "Is URL encoding important for web development?",
      a: "Yes, it helps ensure accurate data transmission between browsers and servers."
    },
    {
      q: "Is the URL Encoder free?",
      a: "Yes, it is completely free to use."
    }
  ],

  "url-decoder": [
    {
      q: "What does a URL Decoder do?",
      a: "It converts encoded URLs and parameters back into a readable format."
    },
    {
      q: "Why would I need to decode a URL?",
      a: "Decoding helps you understand encoded query strings and URL parameters."
    },
    {
      q: "Can I decode URL parameters online?",
      a: "Yes, simply paste the encoded URL and view the decoded result instantly."
    },
    {
      q: "Who commonly uses URL Decoders?",
      a: "Web developers, testers, and IT professionals frequently use URL decoding tools."
    },
    {
      q: "Is the URL Decoder free?",
      a: "Yes, it is completely free."
    }
  ],


  "bmi-calculator": [
    { q: "What is a healthy BMI range?", a: "A BMI between 18.5 and 24.9 is generally considered a healthy weight range for most adults." },
    { q: "How is BMI calculated?", a: "BMI is calculated by dividing your weight in kilograms by the square of your height in meters." },
    { q: "Does BMI account for muscle mass?", a: "No, BMI does not distinguish between muscle and fat, so very muscular individuals may show a higher BMI without excess body fat." },
    { q: "Is BMI different for children?", a: "Yes, children and teens use age- and gender-specific BMI percentiles rather than the fixed adult ranges." },
    { q: "Is the BMI Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "age-calculator": [
    { q: "How is my exact age calculated?", a: "The tool calculates the difference between your date of birth and today (or a chosen end date) in years, months, and days." },
    { q: "Does it account for leap years?", a: "Yes, since it uses actual calendar dates, leap years are automatically factored into the result." },
    { q: "Can I calculate age as of a future or past date?", a: "Yes, you can choose any end date to calculate age or duration as of that date." },
    { q: "Is this useful for eligibility checks?", a: "Yes, it's commonly used to verify age requirements for forms, exams, and applications." },
    { q: "Is the Age Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "percentage-calculator": [
    { q: "How do I calculate a percentage of a number?", a: "Enter the number and the percentage, and the tool instantly returns the calculated value." },
    { q: "Can I calculate percentage increase or decrease?", a: "Yes, enter the original and new values to see the percentage change along with whether it's an increase or decrease." },
    { q: "How do I find what percent one number is of another?", a: "Enter both numbers and the tool calculates what percentage the first is of the second." },
    { q: "Is this useful for calculating discounts?", a: "Yes, it's commonly used to work out sale discounts, tips, and markups." },
    { q: "Is the Percentage Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "emi-calculator": [
    { q: "How is EMI calculated?", a: "EMI is calculated using the loan amount, monthly interest rate, and number of monthly installments with the standard reducing-balance EMI formula." },
    { q: "Does this work for any loan type?", a: "Yes, you can use it for home loans, car loans, personal loans, or any fixed-rate installment loan." },
    { q: "Is a 0% interest rate supported?", a: "Yes, if you enter 0 the tool simply divides the principal evenly across the tenure." },
    { q: "Can I see the total interest paid?", a: "Yes, the result shows total interest and total payment along with the monthly EMI." },
    { q: "Is this EMI calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "compound-interest-calculator": [
    { q: "What is compound interest?", a: "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods." },
    { q: "What compounding frequencies are supported?", a: "You can choose annually, semi-annually, quarterly, or monthly compounding." },
    { q: "How is future value calculated?", a: "Future value uses the formula A = P(1 + r/n)^(nt), where r is the annual rate and n is the compounding frequency." },
    { q: "Can I use this for fixed deposits?", a: "Yes, it works well for estimating returns on fixed deposits, recurring deposits, and savings accounts." },
    { q: "Is this calculator free to use?", a: "Yes, it is completely free with no registration required." },
  ],

  "simple-interest-calculator": [
    { q: "What is simple interest?", a: "Simple interest is calculated only on the original principal amount, unlike compound interest which also earns interest on accumulated interest." },
    { q: "What is the simple interest formula?", a: "Simple Interest = (Principal x Rate x Time) / 100." },
    { q: "Can I use this for loans?", a: "Yes, it works for simple-interest loans, short-term deposits, and basic interest calculations." },
    { q: "Does it show the total amount?", a: "Yes, the result includes both the interest earned and the total amount (principal plus interest)." },
    { q: "Is this tool free?", a: "Yes, completely free with no signup required." },
  ],

  "gst-calculator": [
    { q: "How do I add GST to an amount?", a: "Select 'Add GST', enter the base amount and GST rate, and the tool calculates the GST amount and total price." },
    { q: "How do I remove GST from a total?", a: "Select 'Remove GST', enter the GST-inclusive total and rate, and the tool extracts the original base amount and GST portion." },
    { q: "What GST rates can I use?", a: "You can enter any GST rate such as 5%, 12%, 18%, or 28%, depending on your country's tax slabs." },
    { q: "Is this useful for invoicing?", a: "Yes, it helps quickly verify GST amounts when creating or checking invoices." },
    { q: "Is the GST Calculator free?", a: "Yes, it is completely free with no signup required." },
  ],

  "sales-tax-calculator": [
    { q: "How is sales tax calculated?", a: "Sales tax is calculated by multiplying the price before tax by the tax rate percentage." },
    { q: "Can I use any tax rate?", a: "Yes, you can enter any state, local, or country-specific sales tax rate." },
    { q: "Does it show the final price?", a: "Yes, the result includes both the tax amount and the total price including tax." },
    { q: "Is this useful for online shopping?", a: "Yes, it helps estimate the final checkout price before purchasing." },
    { q: "Is the Sales Tax Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "discount-calculator": [
    { q: "How is the discount amount calculated?", a: "The discount amount is calculated by multiplying the original price by the discount percentage." },
    { q: "Does it show the final price?", a: "Yes, the tool shows both the amount you save and the final discounted price." },
    { q: "Can I use this for multiple discounts?", a: "You can calculate one discount at a time; for stacked discounts, apply the calculator sequentially to each step." },
    { q: "Is this useful for online sales?", a: "Yes, it's ideal for checking sale prices, coupon discounts, and clearance offers." },
    { q: "Is the Discount Calculator free?", a: "Yes, it is completely free with no signup required." },
  ],

  "tip-calculator": [
    { q: "How is the tip amount calculated?", a: "The tip is calculated by multiplying the bill amount by the tip percentage you enter." },
    { q: "Can I split the bill between people?", a: "Yes, enter the number of people and the tool will divide the total bill equally among them." },
    { q: "What is a typical tip percentage?", a: "Common tip percentages range from 10% to 20% depending on service and local customs." },
    { q: "Does it show the total with tip included?", a: "Yes, the result shows the tip amount, the total bill including tip, and the per-person share." },
    { q: "Is the Tip Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "profit-margin-calculator": [
    { q: "What is the difference between margin and markup?", a: "Profit margin is profit as a percentage of the selling price, while markup is profit as a percentage of the cost price." },
    { q: "How is profit margin calculated?", a: "Profit margin is calculated as (Selling Price - Cost Price) / Selling Price x 100." },
    { q: "How is markup calculated?", a: "Markup is calculated as (Selling Price - Cost Price) / Cost Price x 100." },
    { q: "Why do margin and markup differ?", a: "They use different bases for the percentage calculation, so the same profit produces different margin and markup values." },
    { q: "Is this calculator free?", a: "Yes, it is completely free with no signup required." },
  ],

  "break-even-calculator": [
    { q: "What is the break-even point?", a: "The break-even point is the sales volume at which total revenue equals total costs, resulting in zero profit or loss." },
    { q: "How is break-even calculated?", a: "Break-even units are calculated by dividing fixed costs by the contribution margin (price minus variable cost per unit)." },
    { q: "What happens if variable cost exceeds price?", a: "If variable cost per unit is equal to or greater than the price, the product can never break even and no result is shown." },
    { q: "Does it show break-even revenue?", a: "Yes, the result also shows the total revenue needed at the break-even point." },
    { q: "Is this calculator free?", a: "Yes, it is completely free with no signup required." },
  ],

  "sip-calculator": [
    { q: "What is a SIP?", a: "A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly, typically monthly, into mutual funds or other instruments." },
    { q: "How is the future value calculated?", a: "Future value is calculated using the standard SIP compound growth formula based on your monthly investment, expected rate of return, and duration." },
    { q: "Is the return rate guaranteed?", a: "No, the expected return rate is an estimate you provide; actual market returns can vary." },
    { q: "Does it show my total investment separately?", a: "Yes, the result shows your total invested amount and the estimated gains separately from the future value." },
    { q: "Is the SIP Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "mortgage-calculator": [
    { q: "How is the monthly mortgage payment calculated?", a: "It is calculated using the standard amortization formula based on loan amount, monthly interest rate, and total number of monthly payments." },
    { q: "Does this include property tax or insurance?", a: "No, this calculates only the principal and interest portion of your mortgage payment." },
    { q: "Can I use this for any loan term?", a: "Yes, you can enter any loan term in years, such as 15, 20, or 30 years." },
    { q: "Does it show total interest paid?", a: "Yes, the result includes total interest and the total amount paid over the loan term." },
    { q: "Is the Mortgage Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "bmr-calculator": [
    { q: "What is BMR?", a: "BMR (Basal Metabolic Rate) is the number of calories your body needs at complete rest to maintain vital functions." },
    { q: "Which formula is used?", a: "This calculator uses the Mifflin-St Jeor equation, one of the most accurate and widely used BMR formulas." },
    { q: "Is BMR the same as total calories burned per day?", a: "No, BMR only reflects resting energy needs; use a calorie calculator with activity level to estimate total daily needs." },
    { q: "Why does gender affect BMR?", a: "Men typically have more muscle mass than women, which affects the constants used in the BMR formula." },
    { q: "Is the BMR Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "calorie-calculator": [
    { q: "How are calorie needs calculated?", a: "The tool first calculates your BMR using the Mifflin-St Jeor formula, then multiplies it by an activity factor to estimate total daily energy expenditure." },
    { q: "What activity levels are available?", a: "Sedentary, lightly active, moderately active, very active, and extremely active, each with a different multiplier." },
    { q: "How much of a calorie deficit is used for weight loss?", a: "The tool suggests a 500-calorie daily deficit for gradual, sustainable weight loss." },
    { q: "Can this be used for weight gain planning?", a: "Yes, it also shows a calorie target with a 500-calorie surplus for weight gain." },
    { q: "Is the Calorie Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "body-fat-calculator": [
    { q: "How accurate is the US Navy method?", a: "It is a widely used estimation method that is reasonably accurate for most people, though not as precise as clinical methods like DEXA scans." },
    { q: "What measurements do I need?", a: "You need your height, neck circumference, and waist circumference; women also need hip circumference." },
    { q: "Where should I measure my waist?", a: "Measure at the narrowest point of your torso, typically just above the belly button, for the most consistent results." },
    { q: "Does this work for all body types?", a: "The formula works well for most adults but may be less accurate for very lean athletes or certain body types." },
    { q: "Is the Body Fat Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "ideal-weight-calculator": [
    { q: "What formula is used?", a: "This calculator uses the Devine formula, originally developed for medical drug dosage calculations and widely adopted as an ideal weight reference." },
    { q: "Is ideal weight the same for everyone at the same height?", a: "No, factors like muscle mass, bone structure, and body frame size mean ideal weight varies between individuals." },
    { q: "Should I use this as a strict target?", a: "It's best used as a general reference point rather than a strict goal, especially for athletes or muscular individuals." },
    { q: "Does it account for body frame size?", a: "No, this calculator provides a single estimate based on height and gender only." },
    { q: "Is the Ideal Weight Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "gpa-calculator": [
    { q: "How is GPA calculated?", a: "GPA is calculated by multiplying each course's grade point by its credit hours, summing the results, and dividing by total credit hours." },
    { q: "What format should I enter grades and credits in?", a: "Enter comma-separated values in the same order, for example grade points '4,3.7,3.3' and credits '3,4,3'." },
    { q: "Does the number of grades need to match the number of credits?", a: "Yes, each grade point must correspond to a matching credit hour value in the same position." },
    { q: "Can I use this for a semester or cumulative GPA?", a: "Yes, you can use it for a single semester or your entire academic record by including all relevant courses." },
    { q: "Is the GPA Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "average-calculator": [
    { q: "How do I enter my numbers?", a: "Enter your numbers separated by commas, for example '12, 45, 67, 23, 89'." },
    { q: "What statistics does it calculate?", a: "It calculates the average, sum, count, minimum value, and maximum value of the numbers you enter." },
    { q: "Can I use decimals?", a: "Yes, you can enter whole numbers or decimals in your list." },
    { q: "Is there a limit to how many numbers I can enter?", a: "No practical limit; you can enter as many comma-separated values as you need." },
    { q: "Is the Average Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "percentage-change-calculator": [
    { q: "How is percentage change calculated?", a: "Percentage change is calculated as ((New Value - Old Value) / Old Value) x 100." },
    { q: "How do I know if it's an increase or decrease?", a: "The tool automatically labels the result as an increase if the new value is higher, or a decrease if it's lower." },
    { q: "Can I use this for negative numbers?", a: "Yes, the calculator handles negative old and new values correctly using absolute value in the denominator." },
    { q: "What if the old value is zero?", a: "Percentage change cannot be calculated when the old value is zero, since it would require dividing by zero." },
    { q: "Is the Percentage Change Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "date-difference-calculator": [
    { q: "What does the calculator show?", a: "It shows the difference between two dates broken down into years, months and days, plus the total number of days." },
    { q: "Can I calculate the difference between any two dates?", a: "Yes, as long as the end date is the same as or after the start date." },
    { q: "Does it account for leap years?", a: "Yes, since it uses actual calendar dates, leap years are automatically accounted for." },
    { q: "Can I use this for project timelines?", a: "Yes, it's useful for calculating durations of projects, contracts, or events." },
    { q: "Is the Date Difference Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "time-duration-calculator": [
    { q: "What does the calculator show?", a: "It shows the total duration between two times broken down into hours and minutes, along with total minutes." },
    { q: "Can I calculate durations that cross midnight?", a: "Yes, select 'Next Day' for the end time if it falls after midnight relative to the start time." },
    { q: "Is this useful for calculating work hours?", a: "Yes, it's ideal for calculating shift lengths, work hours, and meeting durations." },
    { q: "What time format should I use?", a: "Use the built-in time picker, which uses a standard 24-hour or 12-hour format depending on your device." },
    { q: "Is the Time Duration Calculator free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "length-converter": [
    { q: "Which length units are supported?", a: "Meters, kilometers, centimeters, millimeters, miles, yards, feet, and inches are all supported." },
    { q: "How accurate is the conversion?", a: "Conversions use precise standard conversion factors and are shown to four decimal places." },
    { q: "Can I convert between metric and imperial units?", a: "Yes, you can convert freely between metric units like meters and imperial units like feet or miles." },
    { q: "Can I use decimal values?", a: "Yes, you can enter whole numbers or decimal values for conversion." },
    { q: "Is the Length Converter free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "weight-converter": [
    { q: "Which weight units are supported?", a: "Kilograms, grams, pounds, ounces, and metric tons are all supported." },
    { q: "How accurate is the conversion?", a: "Conversions use precise standard conversion factors and are shown to four decimal places." },
    { q: "Can I convert between metric and imperial units?", a: "Yes, you can convert freely between metric units like kilograms and imperial units like pounds or ounces." },
    { q: "Is this useful for fitness tracking?", a: "Yes, it's commonly used to convert body weight between kilograms and pounds." },
    { q: "Is the Weight Converter free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "temperature-converter": [
    { q: "Which temperature units are supported?", a: "Celsius, Fahrenheit, and Kelvin are all supported for conversion in any direction." },
    { q: "How is Celsius converted to Fahrenheit?", a: "Fahrenheit is calculated as Celsius x 9/5 + 32." },
    { q: "How is Celsius converted to Kelvin?", a: "Kelvin is calculated as Celsius + 273.15." },
    { q: "Can I convert negative temperatures?", a: "Yes, negative values are supported for Celsius and Fahrenheit conversions." },
    { q: "Is the Temperature Converter free?", a: "Yes, it is completely free to use with no signup required." },
  ],

  "grammar-checker": [
    { q: "Is the Grammar Checker free to use?", a: "Yes, it is completely free with no signup or word limit imposed by this tool." },
    { q: "What kind of errors does it catch?", a: "It detects grammar mistakes, spelling errors, punctuation issues, and many common style problems." },
    { q: "Can it fix my text automatically?", a: "Yes, use the 'Apply All Suggestions' button to automatically apply the top suggested fix for every issue found." },
    { q: "Does it work for languages other than English?", a: "This tool is configured for English (US); for other languages, try translating your text first." },
    { q: "Is my text stored or shared?", a: "Your text is sent only to the grammar checking service to be analyzed and is not stored by this tool." },
  ],

  "language-translator": [
    { q: "Is the Language Translator free?", a: "Yes, it is completely free to use with no signup required." },
    { q: "How many languages are supported?", a: "The tool currently supports 12 popular languages including English, Spanish, French, German, Hindi, Chinese, and Arabic." },
    { q: "How accurate are the translations?", a: "Translations are machine-generated and are generally accurate for everyday text, though nuance and idioms may not always translate perfectly." },
    { q: "Is there a limit to how much text I can translate?", a: "The underlying translation service has a daily usage limit per user, so very large volumes of text may occasionally be rate-limited." },
    { q: "Can I swap the translation direction?", a: "Yes, use the swap button to instantly reverse the source and target languages." },
  ],

  "text-to-speech-converter": [
    { q: "Is the Text to Speech Converter free?", a: "Yes, it is completely free and runs entirely in your browser with no signup required." },
    { q: "Do I need an internet connection?", a: "No external service is used for the speech itself; it relies on voices built into your browser and operating system." },
    { q: "Can I change the voice?", a: "Yes, you can choose from any voice installed on your device or browser, and adjust the speed and pitch." },
    { q: "Which browsers support this?", a: "Most modern browsers such as Chrome, Edge, and Safari support text-to-speech; available voices vary by device." },
    { q: "Can I download the audio?", a: "This tool plays audio directly in your browser; downloading as a file is not currently supported." },
  ],

  "speech-to-text-converter": [
    { q: "Is the Speech to Text Converter free?", a: "Yes, it is completely free to use with no signup required." },
    { q: "Which browsers support this tool?", a: "Speech recognition works best in Chrome and Edge on desktop, and Chrome on Android; support in Safari and Firefox is limited." },
    { q: "Does it need microphone access?", a: "Yes, your browser will ask for microphone permission the first time you click Start Listening." },
    { q: "Is my voice recording stored anywhere?", a: "No, audio is processed for transcription only and is not stored or uploaded by this tool." },
    { q: "Can I edit the transcribed text?", a: "Yes, the transcript appears in an editable text box so you can correct or adjust it before copying." },
  ],

  "text-summarizer": [
    { q: "Is the AI Text Summarizer free?", a: "Yes, it is free to use, though it runs on a shared AI quota so heavy use may occasionally be rate-limited." },
    { q: "How long can the text be?", a: "You can paste articles, essays, or documents of most reasonable lengths; extremely long texts may be trimmed by the AI service." },
    { q: "Can I choose how short the summary is?", a: "Yes, choose Short, Medium, or Long to control how detailed the summary is." },
    { q: "Does it work for any topic?", a: "Yes, it works for general text on any subject, including news, academic writing, and reports." },
    { q: "Is my text stored?", a: "Your text is sent to the AI service only to generate the summary and is not stored by this tool." },
  ],

  "paraphrasing-tool": [
    { q: "Is the Paraphrasing Tool free?", a: "Yes, it is free to use, though it runs on a shared AI quota so heavy use may occasionally be rate-limited." },
    { q: "Will the meaning stay the same?", a: "Yes, the AI is instructed to preserve the original meaning while changing wording and sentence structure." },
    { q: "Can I choose the tone of the rewrite?", a: "Yes, choose from standard, formal, casual, simple, or creative tones." },
    { q: "Is this the same as plagiarism removal?", a: "Paraphrasing changes wording and structure, but you should always review and personalize the output for your own use case." },
    { q: "Is my text stored?", a: "Your text is sent to the AI service only to generate the rewrite and is not stored by this tool." },
  ],

  "essay-generator": [
    { q: "Is the AI Essay Generator free?", a: "Yes, it is free to use, though it runs on a shared AI quota so heavy use may occasionally be rate-limited." },
    { q: "Should I submit the generated essay as my own work?", a: "No \u2014 use this as a brainstorming and drafting aid; always review, personalize, and fact-check the output before submitting anything academically." },
    { q: "Can I control the essay's length?", a: "Yes, choose an approximate word count from the length options." },
    { q: "What tones are available?", a: "You can choose informative, persuasive, narrative, or argumentative tones." },
    { q: "Is my topic stored?", a: "Your topic is sent to the AI service only to generate the essay and is not stored by this tool." },
  ],

  "content-generator": [
    { q: "Is the AI Content Generator free?", a: "Yes, it is free to use, though it runs on a shared AI quota so heavy use may occasionally be rate-limited." },
    { q: "What types of content can I generate?", a: "You can generate blog intros, product descriptions, social media posts, and ad copy." },
    { q: "Can I adjust the tone?", a: "Yes, choose from friendly, professional, witty, or luxury tones." },
    { q: "Should I edit the generated content?", a: "Yes, use it as a strong starting draft and personalize it to match your brand voice and facts." },
    { q: "Is my input stored?", a: "Your topic and settings are sent to the AI service only to generate the content and are not stored by this tool." },
  ],

  "resume-analyzer": [
    { q: "Is the AI Resume Analyzer free?", a: "Yes, it is free to use, though it runs on a shared AI quota so heavy use may occasionally be rate-limited." },
    { q: "Does this guarantee I'll pass an ATS system?", a: "No, this provides AI-generated writing and content feedback; it does not simulate a specific company's ATS software." },
    { q: "Should I include the job description?", a: "Including it helps the AI give more targeted feedback on keyword and requirement alignment." },
    { q: "Is my resume data stored?", a: "Your resume text is sent to the AI service only to generate feedback and is not stored by this tool." },
    { q: "Can it rewrite my resume for me?", a: "This tool focuses on feedback and suggestions; use the AI Content Generator or Paraphrasing Tool to help rework specific sections." },
  ],

  "cover-letter-generator": [
    { q: "Is the AI Cover Letter Generator free?", a: "Yes, it is free to use, though it runs on a shared AI quota so heavy use may occasionally be rate-limited." },
    { q: "Will the letter be ready to send as-is?", a: "Treat it as a strong first draft \u2014 review it, add your name and contact details, and personalize any specific details." },
    { q: "What should I put in 'Key Skills'?", a: "List your most relevant experience, achievements, or skills for the specific role, ideally with numbers where possible." },
    { q: "Can I choose the tone?", a: "Yes, choose professional, enthusiastic, or formal tones depending on the company culture." },
    { q: "Is my input stored?", a: "Your inputs are sent to the AI service only to generate the letter and are not stored by this tool." },
  ],

  "email-reply-generator": [
    { q: "Is the AI Email Reply Generator free?", a: "Yes, it is free to use, though it runs on a shared AI quota so heavy use may occasionally be rate-limited." },
    { q: "What should I put in the 'intent' field?", a: "Briefly describe the outcome you want, such as 'politely decline the offer' or 'ask for a deadline extension'." },
    { q: "Can I choose the tone of the reply?", a: "Yes, choose professional, friendly, formal, or apologetic tones." },
    { q: "Will it include a subject line?", a: "No, the generated text is the reply body only; you can keep your existing subject line or add 'Re:' as usual." },
    { q: "Is my email content stored?", a: "Your email content is sent to the AI service only to generate the reply and is not stored by this tool." },
  ],

  "meeting-notes-summarizer": [
    { q: "Is the AI Meeting Notes Summarizer free?", a: "Yes, it is free to use, though it runs on a shared AI quota so heavy use may occasionally be rate-limited." },
    { q: "Where do I get a meeting transcript?", a: "You can use the Speech to Text Converter on this site during a call, or paste transcripts exported from your meeting platform." },
    { q: "Will it identify who owns each action item?", a: "It will include an owner for an action item only if that information appears in the transcript you provide." },
    { q: "Does it work with rough, unstructured notes?", a: "Yes, it works with both clean transcripts and rough notes, though clearer input produces better structured output." },
    { q: "Is my transcript stored?", a: "Your transcript is sent to the AI service only to generate the summary and is not stored by this tool." },
  ],

  "caption-generator": [
    { q: "Is the AI Caption Generator free?", a: "Yes, it is free to use, though it runs on a shared AI quota so heavy use may occasionally be rate-limited." },
    { q: "How many captions do I get?", a: "The tool generates three caption options plus a line of relevant hashtags for each request." },
    { q: "Can I choose the platform?", a: "Yes, choose from Instagram, TikTok, Twitter (X), LinkedIn, or Facebook to match the style of each platform." },
    { q: "Are the hashtags trending or just relevant?", a: "Hashtags are generated based on relevance to your topic; check current trending tags separately if that's important for your campaign." },
    { q: "Is my input stored?", a: "Your topic and settings are sent to the AI service only to generate captions and are not stored by this tool." },
  ],

  "slogan-generator": [
    { q: "Is the AI Slogan Generator free?", a: "Yes, it is free to use, though it runs on a shared AI quota so heavy use may occasionally be rate-limited." },
    { q: "How many slogans do I get per request?", a: "The tool generates 8 slogan options for each request." },
    { q: "Can I regenerate for more options?", a: "Yes, click Generate again to get a fresh new batch of slogans." },
    { q: "Should I trademark-check my chosen slogan?", a: "Yes, always check that your final chosen slogan isn't already trademarked before using it commercially." },
    { q: "Is my input stored?", a: "Your business name and industry are sent to the AI service only to generate slogans and are not stored by this tool." },
  ],

};
export default function FAQ({
  title = "Frequently Asked Questions",
  customFaqs = null,
}) {
  const { slug } = useParams();

  const [open, setOpen] = useState(null);

  const rawSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  // Homepage doesn't have a slug
  const currentSlug = rawSlug
    ? getToolSlug(rawSlug)
    : "";

  const variantFaqs = rawSlug
    ? getVariantFaqs(
        currentSlug.replace(/-/g, " "),
        rawSlug,
        currentSlug
      )
    : [];

  const faqs =
    customFaqs ||
    [
      ...variantFaqs,
      ...(toolFAQs[currentSlug] || []),
      ...commonFAQ,
    ];

  if (!faqs.length) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title}
      </h2>

      <div className={styles.grid}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.item} ${open === index
              ? styles.active
              : ""
              }`}
            onClick={() =>
              setOpen(
                open === index
                  ? null
                  : index
              )
            }
          >
            <div className={styles.header}>
              <p className={styles.question}>
                {faq.q}
              </p>

              <span className={styles.icon}>
                {open === index
                  ? "−"
                  : "+"}
              </span>
            </div>

            <AnimatePresence>
              {open === index && (
                <motion.div
                  className={
                    styles.answerWrapper
                  }
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <p className={styles.answer}>
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}