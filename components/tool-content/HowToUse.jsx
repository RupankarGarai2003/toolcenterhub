"use client";

import { useParams } from "next/navigation";
import styles from "../../components/Styles/tool-component/HowToUse.module.css";
import getToolSlug from "@/utils/getToolSlug";
import {
  getVariantHowToTitle,
} from "@/utils/getVariantHowTo";

import {
  Upload,
  RefreshCw,
  Download,
} from "lucide-react";

const toolSteps = {
  "image-resizer": [
    {
      title: "Upload Your Image",
      desc: "Upload a JPG, PNG, or WEBP image from your device using the Image Resizer tool.",
      icon: <Upload size={32} />,
    },

    {
      title: "Choose Image Dimensions",
      desc: "Set a custom width and height, maintain the aspect ratio, or use percentage-based resizing to adjust image dimensions.",
      icon: <RefreshCw size={32} />,
    },

    {
      title: "Download the Resized Image",
      desc: "Preview the result and download your resized image instantly in JPG, PNG, or WEBP format.",
      icon: <Download size={32} />,
    },
  ],

  "image-compressor": [
    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <Upload size={32} />,
    },

    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <RefreshCw size={32} />,
    },

    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <Download size={32} />,
    },
  ],

  "pdf-to-word": [
    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <Upload size={32} />,
    },

    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <RefreshCw size={32} />,
    },

    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <Download size={32} />,
    },
  ],


  "image-compressor": [
    {
      title: "Upload Your Image",
      desc: "Upload a JPG, PNG, or WEBP image from your device using the Image Compressor tool.",
      icon: <Upload size={32} />,
    },
    {
      title: "Compress the Image",
      desc: "Choose your preferred compression settings and let the tool reduce the image file size while maintaining quality.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download the Compressed Image",
      desc: "Preview the optimized image and download the compressed file instantly.",
      icon: <Download size={32} />,
    },
  ],

  "pdf-to-word": [
    {
      title: "Upload Your PDF File",
      desc: "Select and upload the PDF document you want to convert into an editable Word file.",
      icon: <Upload size={32} />,
    },
    {
      title: "Convert PDF to Word",
      desc: "The tool processes your document and converts it into DOCX format while preserving formatting.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download the Word Document",
      desc: "Download the converted Word file and start editing immediately.",
      icon: <Download size={32} />,
    },
  ],

  "word-to-pdf": [
    {
      title: "Upload Your Word File",
      desc: "Upload a DOC or DOCX document from your device.",
      icon: <Upload size={32} />,
    },
    {
      title: "Convert to PDF",
      desc: "The tool converts your Word document into a professional PDF format.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download the PDF",
      desc: "Download the generated PDF file instantly and share it anywhere.",
      icon: <Download size={32} />,
    },
  ],

  "jpg-to-pdf": [
    {
      title: "Upload JPG Images",
      desc: "Select one or multiple JPG or JPEG images from your device.",
      icon: <Upload size={32} />,
    },
    {
      title: "Create PDF Document",
      desc: "Arrange the images and convert them into a single PDF file.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download the PDF",
      desc: "Save the generated PDF document to your device instantly.",
      icon: <Download size={32} />,
    },
  ],

  "pdf-merger": [
    {
      title: "Upload PDF Files",
      desc: "Choose the PDF documents you want to merge into one file.",
      icon: <Upload size={32} />,
    },
    {
      title: "Merge PDFs",
      desc: "Arrange the files in the correct order and combine them into a single PDF.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download Merged PDF",
      desc: "Download the combined PDF document instantly.",
      icon: <Download size={32} />,
    },
  ],

  "pdf-splitter": [
    {
      title: "Upload Your PDF",
      desc: "Select the PDF file you want to split into smaller documents.",
      icon: <Upload size={32} />,
    },
    {
      title: "Choose Pages",
      desc: "Select specific pages or page ranges to extract from the PDF.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download Split Files",
      desc: "Download the newly created PDF files instantly.",
      icon: <Download size={32} />,
    },
  ],

  "pdf-to-jpg": [
    {
      title: "Upload PDF File",
      desc: "Select the PDF document you want to convert into images.",
      icon: <Upload size={32} />,
    },
    {
      title: "Convert PDF Pages",
      desc: "The tool converts each PDF page into a high-quality JPG image.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download JPG Images",
      desc: "Save the converted JPG files to your device.",
      icon: <Download size={32} />,
    },
  ],

  "image-converter": [
    {
      title: "Upload an Image",
      desc: "Choose the image file you want to convert.",
      icon: <Upload size={32} />,
    },
    {
      title: "Select Output Format",
      desc: "Choose JPG, PNG, or WEBP as the desired output format.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download Converted Image",
      desc: "Download the converted image instantly.",
      icon: <Download size={32} />,
    },
  ],

  "image-cropper": [
    {
      title: "Upload an Image",
      desc: "Select the image you want to crop from your device.",
      icon: <Upload size={32} />,
    },
    {
      title: "Crop the Image",
      desc: "Adjust the crop area and remove unwanted portions of the image.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download Cropped Image",
      desc: "Save the cropped image in your preferred format.",
      icon: <Download size={32} />,
    },
  ],

  "png-to-jpg": [
    {
      title: "Upload PNG Image",
      desc: "Choose the PNG image you want to convert.",
      icon: <Upload size={32} />,
    },
    {
      title: "Convert PNG to JPG",
      desc: "The tool processes the image and converts it into JPG format.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download JPG File",
      desc: "Download the converted JPG image instantly.",
      icon: <Download size={32} />,
    },
  ],

  "jpg-to-png": [
    {
      title: "Upload JPG Image",
      desc: "Select the JPG or JPEG image you want to convert.",
      icon: <Upload size={32} />,
    },
    {
      title: "Convert JPG to PNG",
      desc: "The image is processed and converted into PNG format.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download PNG File",
      desc: "Save the converted PNG image to your device.",
      icon: <Download size={32} />,
    },
  ],

  "qr-code-generator": [
    {
      title: "Enter Your Content",
      desc: "Add a URL, text, contact information, or other content for the QR code.",
      icon: <Upload size={32} />,
    },
    {
      title: "Generate QR Code",
      desc: "Create a QR code instantly using the provided information.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Download QR Code",
      desc: "Save the generated QR code image to your device.",
      icon: <Download size={32} />,
    },
  ],

  "password-generator": [
    {
      title: "Choose Password Settings",
      desc: "Select the desired password length and character options.",
      icon: <Upload size={32} />,
    },
    {
      title: "Generate Password",
      desc: "Create a secure and random password instantly.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Copy the Password",
      desc: "Use the generated password for your accounts and applications.",
      icon: <Download size={32} />,
    },
  ],

  "word-counter": [
    {
      title: "Enter or Paste Text",
      desc: "Type or paste your content into the editor.",
      icon: <Upload size={32} />,
    },
    {
      title: "Analyze the Content",
      desc: "The tool automatically counts words, characters, and sentences.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Review Results",
      desc: "View real-time text statistics instantly.",
      icon: <Download size={32} />,
    },
  ],

  "json-formatter": [
    {
      title: "Paste JSON Data",
      desc: "Copy and paste your JSON data into the JSON Formatter tool.",
      icon: <Upload size={32} />,
    },
    {
      title: "Format the JSON",
      desc: "The tool automatically beautifies and organizes the JSON structure for better readability.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Copy the Formatted JSON",
      desc: "Review the formatted output and copy or use it in your project instantly.",
      icon: <Download size={32} />,
    },
  ],

  "json-validator": [
    {
      title: "Paste JSON Content",
      desc: "Enter or paste the JSON data you want to validate.",
      icon: <Upload size={32} />,
    },
    {
      title: "Validate JSON",
      desc: "The tool checks your JSON syntax and identifies formatting or structural errors.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Review Validation Results",
      desc: "View validation results instantly and fix any issues found in the JSON data.",
      icon: <Download size={32} />,
    },
  ],

  "base64-encoder": [
    {
      title: "Enter Text or Data",
      desc: "Paste the text or data you want to encode into Base64 format.",
      icon: <Upload size={32} />,
    },
    {
      title: "Encode to Base64",
      desc: "The tool converts your content into Base64 encoded format instantly.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Copy the Encoded Output",
      desc: "Copy the generated Base64 string and use it wherever needed.",
      icon: <Download size={32} />,
    },
  ],

  "base64-decoder": [
    {
      title: "Paste Base64 Data",
      desc: "Enter the Base64 encoded string you want to decode.",
      icon: <Upload size={32} />,
    },
    {
      title: "Decode the Content",
      desc: "The tool converts the Base64 string back into its original readable format.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "View the Decoded Result",
      desc: "Review and copy the decoded content instantly.",
      icon: <Download size={32} />,
    },
  ],

  "html-minifier": [
    {
      title: "Paste HTML Code",
      desc: "Copy and paste your HTML code into the HTML Minifier tool.",
      icon: <Upload size={32} />,
    },
    {
      title: "Minify HTML",
      desc: "The tool removes unnecessary spaces, comments, and formatting to reduce file size.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Copy Minified Code",
      desc: "Use the optimized HTML code in your website or application.",
      icon: <Download size={32} />,
    },
  ],

  "css-minifier": [
    {
      title: "Paste CSS Code",
      desc: "Enter or paste the CSS code you want to compress.",
      icon: <Upload size={32} />,
    },
    {
      title: "Minify CSS",
      desc: "The tool removes unnecessary characters and whitespace to reduce file size.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Copy Optimized CSS",
      desc: "Download or copy the minified CSS code for production use.",
      icon: <Download size={32} />,
    },
  ],

  "js-minifier": [
    {
      title: "Paste JavaScript Code",
      desc: "Enter or paste your JavaScript code into the JS Minifier tool.",
      icon: <Upload size={32} />,
    },
    {
      title: "Minify JavaScript",
      desc: "The tool compresses the code by removing unnecessary spaces and formatting.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Copy Minified JavaScript",
      desc: "Use the optimized JavaScript code to improve website performance.",
      icon: <Download size={32} />,
    },
  ],

  "url-encoder": [
    {
      title: "Enter URL or Text",
      desc: "Paste the URL or text that you want to encode safely for web usage.",
      icon: <Upload size={32} />,
    },
    {
      title: "Encode the URL",
      desc: "The tool converts special characters into URL-safe encoded format.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Copy Encoded URL",
      desc: "Use the encoded URL in web applications, APIs, or query strings.",
      icon: <Download size={32} />,
    },
  ],

  "url-decoder": [
    {
      title: "Paste Encoded URL",
      desc: "Enter the encoded URL or query string you want to decode.",
      icon: <Upload size={32} />,
    },
    {
      title: "Decode the URL",
      desc: "The tool converts encoded characters back into readable text.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Copy Decoded Result",
      desc: "Review and use the decoded URL or text instantly.",
      icon: <Download size={32} />,
    },
  ],




  "emi-calculator": [
    { title: "Enter Loan Details", desc: "Input the loan amount, annual interest rate, and tenure in months.", icon: <Upload size={32} /> },
    { title: "Calculate EMI", desc: "Click Calculate to instantly compute your monthly installment.", icon: <RefreshCw size={32} /> },
    { title: "Review Results", desc: "See your monthly EMI, total interest, and total payment amount.", icon: <Download size={32} /> },
  ],

  "compound-interest-calculator": [
    { title: "Enter Investment Details", desc: "Input principal, annual rate, and time period in years.", icon: <Upload size={32} /> },
    { title: "Choose Compounding Frequency", desc: "Select annually, semi-annually, quarterly, or monthly.", icon: <RefreshCw size={32} /> },
    { title: "View Future Value", desc: "See the final amount and total compound interest earned.", icon: <Download size={32} /> },
  ],

  "simple-interest-calculator": [
    { title: "Enter Principal and Rate", desc: "Input the principal amount and annual interest rate.", icon: <Upload size={32} /> },
    { title: "Enter Time Period", desc: "Specify the time period in years.", icon: <RefreshCw size={32} /> },
    { title: "View Results", desc: "See the simple interest and total amount instantly.", icon: <Download size={32} /> },
  ],

  "gst-calculator": [
    { title: "Enter Amount and Rate", desc: "Input the amount and applicable GST rate.", icon: <Upload size={32} /> },
    { title: "Choose Add or Remove", desc: "Select whether to add GST to or remove GST from the amount.", icon: <RefreshCw size={32} /> },
    { title: "View Breakdown", desc: "See the base amount, GST amount, and total instantly.", icon: <Download size={32} /> },
  ],

  "sales-tax-calculator": [
    { title: "Enter Price", desc: "Input the price of the item before tax.", icon: <Upload size={32} /> },
    { title: "Enter Tax Rate", desc: "Input the applicable sales tax rate as a percentage.", icon: <RefreshCw size={32} /> },
    { title: "View Results", desc: "See the tax amount and total price instantly.", icon: <Download size={32} /> },
  ],

  "discount-calculator": [
    { title: "Enter Original Price", desc: "Input the original price of the product.", icon: <Upload size={32} /> },
    { title: "Enter Discount Percentage", desc: "Input the discount percentage being applied.", icon: <RefreshCw size={32} /> },
    { title: "View Savings", desc: "See your savings amount and the final price instantly.", icon: <Download size={32} /> },
  ],

  "tip-calculator": [
    { title: "Enter Bill Amount", desc: "Input the total bill amount before tip.", icon: <Upload size={32} /> },
    { title: "Enter Tip and People", desc: "Input the tip percentage and number of people splitting the bill.", icon: <RefreshCw size={32} /> },
    { title: "View Split Amounts", desc: "See the tip, total, and per-person amount instantly.", icon: <Download size={32} /> },
  ],

  "profit-margin-calculator": [
    { title: "Enter Cost Price", desc: "Input how much the product costs you.", icon: <Upload size={32} /> },
    { title: "Enter Selling Price", desc: "Input the price you sell the product for.", icon: <RefreshCw size={32} /> },
    { title: "View Profit Breakdown", desc: "See profit amount, margin percentage, and markup percentage instantly.", icon: <Download size={32} /> },
  ],

  "break-even-calculator": [
    { title: "Enter Fixed Costs", desc: "Input your total fixed costs such as rent and salaries.", icon: <Upload size={32} /> },
    { title: "Enter Price and Variable Cost", desc: "Input the selling price and variable cost per unit.", icon: <RefreshCw size={32} /> },
    { title: "View Break-Even Point", desc: "See the number of units and revenue needed to break even.", icon: <Download size={32} /> },
  ],

  "sip-calculator": [
    { title: "Enter Monthly Investment", desc: "Input how much you plan to invest every month.", icon: <Upload size={32} /> },
    { title: "Enter Rate and Duration", desc: "Input the expected annual return rate and investment period in years.", icon: <RefreshCw size={32} /> },
    { title: "View Future Value", desc: "See your projected future value, invested amount, and gains.", icon: <Download size={32} /> },
  ],

  "mortgage-calculator": [
    { title: "Enter Loan Amount", desc: "Input the mortgage loan amount.", icon: <Upload size={32} /> },
    { title: "Enter Rate and Term", desc: "Input the annual interest rate and loan term in years.", icon: <RefreshCw size={32} /> },
    { title: "View Monthly Payment", desc: "See your monthly payment, total interest, and total amount paid.", icon: <Download size={32} /> },
  ],

  "bmr-calculator": [
    { title: "Enter Your Details", desc: "Input your gender, age, weight, and height.", icon: <Upload size={32} /> },
    { title: "Calculate BMR", desc: "Click Calculate to compute your basal metabolic rate.", icon: <RefreshCw size={32} /> },
    { title: "View Your Result", desc: "See your estimated BMR in calories per day.", icon: <Download size={32} /> },
  ],

  "calorie-calculator": [
    { title: "Enter Your Details", desc: "Input your gender, age, weight, and height.", icon: <Upload size={32} /> },
    { title: "Select Activity Level", desc: "Choose how physically active you are on a typical day.", icon: <RefreshCw size={32} /> },
    { title: "View Calorie Targets", desc: "See your maintenance calories plus loss and gain targets.", icon: <Download size={32} /> },
  ],

  "body-fat-calculator": [
    { title: "Take Your Measurements", desc: "Measure your height, neck, waist, and hip (for women) with a tape measure.", icon: <Upload size={32} /> },
    { title: "Enter Your Measurements", desc: "Input the values along with your gender.", icon: <RefreshCw size={32} /> },
    { title: "View Body Fat Estimate", desc: "See your estimated body fat percentage instantly.", icon: <Download size={32} /> },
  ],

  "ideal-weight-calculator": [
    { title: "Select Gender", desc: "Choose your gender for an accurate formula.", icon: <Upload size={32} /> },
    { title: "Enter Height", desc: "Input your height in centimeters.", icon: <RefreshCw size={32} /> },
    { title: "View Ideal Weight", desc: "See your estimated ideal body weight instantly.", icon: <Download size={32} /> },
  ],

  "gpa-calculator": [
    { title: "Enter Grade Points", desc: "List each course's grade point, separated by commas.", icon: <Upload size={32} /> },
    { title: "Enter Credit Hours", desc: "List each course's credit hours in the same order, separated by commas.", icon: <RefreshCw size={32} /> },
    { title: "View Your GPA", desc: "See your calculated GPA and total credit hours instantly.", icon: <Download size={32} /> },
  ],

  "average-calculator": [
    { title: "Enter Your Numbers", desc: "Type or paste your numbers separated by commas.", icon: <Upload size={32} /> },
    { title: "Calculate", desc: "Click Calculate to process the list.", icon: <RefreshCw size={32} /> },
    { title: "View Statistics", desc: "See the average, sum, count, minimum, and maximum instantly.", icon: <Download size={32} /> },
  ],

  "percentage-change-calculator": [
    { title: "Enter Old Value", desc: "Input the original or starting value.", icon: <Upload size={32} /> },
    { title: "Enter New Value", desc: "Input the updated or current value.", icon: <RefreshCw size={32} /> },
    { title: "View Percentage Change", desc: "See whether the value increased or decreased, and by how much.", icon: <Download size={32} /> },
  ],

  "date-difference-calculator": [
    { title: "Select Start Date", desc: "Choose the earlier date using the date picker.", icon: <Upload size={32} /> },
    { title: "Select End Date", desc: "Choose the later date using the date picker.", icon: <RefreshCw size={32} /> },
    { title: "View Difference", desc: "See the exact difference in years, months, days, and total days.", icon: <Download size={32} /> },
  ],

  "time-duration-calculator": [
    { title: "Enter Start and End Time", desc: "Use the time pickers to select the start and end times.", icon: <Upload size={32} /> },
    { title: "Select Day Option", desc: "Choose whether the end time is on the same day or the next day.", icon: <RefreshCw size={32} /> },
    { title: "View Duration", desc: "See the total duration in hours and minutes instantly.", icon: <Download size={32} /> },
  ],

  "length-converter": [
    { title: "Enter a Value", desc: "Input the length value you want to convert.", icon: <Upload size={32} /> },
    { title: "Choose Units", desc: "Select the unit to convert from and the unit to convert to.", icon: <RefreshCw size={32} /> },
    { title: "View Converted Value", desc: "See the accurately converted length instantly.", icon: <Download size={32} /> },
  ],

  "weight-converter": [
    { title: "Enter a Value", desc: "Input the weight value you want to convert.", icon: <Upload size={32} /> },
    { title: "Choose Units", desc: "Select the unit to convert from and the unit to convert to.", icon: <RefreshCw size={32} /> },
    { title: "View Converted Value", desc: "See the accurately converted weight instantly.", icon: <Download size={32} /> },
  ],

  "temperature-converter": [
    { title: "Enter a Value", desc: "Input the temperature value you want to convert.", icon: <Upload size={32} /> },
    { title: "Choose Units", desc: "Select the unit to convert from and the unit to convert to.", icon: <RefreshCw size={32} /> },
    { title: "View Converted Value", desc: "See the accurately converted temperature instantly.", icon: <Download size={32} /> },
  ],

  "grammar-checker": [
    { title: "Paste Your Text", desc: "Type or paste the text you want to check.", icon: <Upload size={32} /> },
    { title: "Check Grammar", desc: "Click Check Grammar to scan your text for issues.", icon: <RefreshCw size={32} /> },
    { title: "Review and Fix", desc: "Read the suggestions and apply fixes individually or all at once.", icon: <Download size={32} /> },
  ],

  "language-translator": [
    { title: "Choose Languages", desc: "Select the language you're translating from and to.", icon: <Upload size={32} /> },
    { title: "Enter Your Text", desc: "Type or paste the text you want translated.", icon: <RefreshCw size={32} /> },
    { title: "Get Translation", desc: "Click Translate to see the result instantly, then copy it.", icon: <Download size={32} /> },
  ],

  "text-to-speech-converter": [
    { title: "Enter Your Text", desc: "Type or paste the text you want read aloud.", icon: <Upload size={32} /> },
    { title: "Choose Voice and Settings", desc: "Select a voice and adjust speed and pitch to your liking.", icon: <RefreshCw size={32} /> },
    { title: "Press Speak", desc: "Click Speak to hear your text read aloud instantly.", icon: <Download size={32} /> },
  ],

  "speech-to-text-converter": [
    { title: "Allow Microphone Access", desc: "Click Start Listening and allow microphone access when prompted.", icon: <Upload size={32} /> },
    { title: "Speak Naturally", desc: "Talk normally; your words will appear as text in real time.", icon: <RefreshCw size={32} /> },
    { title: "Copy Your Transcript", desc: "Click Stop when finished, then copy or edit the transcribed text.", icon: <Download size={32} /> },
  ],

  "text-summarizer": [
    { title: "Paste Your Text", desc: "Copy and paste the article or document you want summarized.", icon: <Upload size={32} /> },
    { title: "Choose Length", desc: "Select short, medium, or long summary length.", icon: <RefreshCw size={32} /> },
    { title: "Generate Summary", desc: "Click Generate to get your AI-written summary instantly.", icon: <Download size={32} /> },
  ],

  "paraphrasing-tool": [
    { title: "Paste Your Text", desc: "Copy and paste the sentence or paragraph you want rewritten.", icon: <Upload size={32} /> },
    { title: "Choose a Tone", desc: "Select the tone you want the rewrite to have.", icon: <RefreshCw size={32} /> },
    { title: "Generate Rewrite", desc: "Click Generate to get your paraphrased text instantly.", icon: <Download size={32} /> },
  ],

  "essay-generator": [
    { title: "Enter Your Topic", desc: "Type the topic you want the essay written about.", icon: <Upload size={32} /> },
    { title: "Choose Length and Tone", desc: "Select an approximate word count and tone.", icon: <RefreshCw size={32} /> },
    { title: "Generate Essay", desc: "Click Generate to get your AI-drafted essay instantly.", icon: <Download size={32} /> },
  ],

  "content-generator": [
    { title: "Choose Content Type", desc: "Select blog intro, product description, social post, or ad copy.", icon: <Upload size={32} /> },
    { title: "Describe Your Topic", desc: "Enter the topic or product you need content about.", icon: <RefreshCw size={32} /> },
    { title: "Generate Content", desc: "Click Generate to get AI-written copy instantly.", icon: <Download size={32} /> },
  ],

  "resume-analyzer": [
    { title: "Paste Your Resume", desc: "Copy and paste the full text of your resume.", icon: <Upload size={32} /> },
    { title: "Add Job Description (Optional)", desc: "Paste a job description for more targeted feedback.", icon: <RefreshCw size={32} /> },
    { title: "Get Feedback", desc: "Click Analyze to receive AI-powered resume feedback instantly.", icon: <Download size={32} /> },
  ],

  "cover-letter-generator": [
    { title: "Enter Job Details", desc: "Add the job title, company name, and your key skills.", icon: <Upload size={32} /> },
    { title: "Choose a Tone", desc: "Select professional, enthusiastic, or formal.", icon: <RefreshCw size={32} /> },
    { title: "Generate Letter", desc: "Click Generate to get your AI-written cover letter instantly.", icon: <Download size={32} /> },
  ],

  "email-reply-generator": [
    { title: "Paste the Original Email", desc: "Copy and paste the email you're replying to.", icon: <Upload size={32} /> },
    { title: "Describe Your Intent", desc: "Briefly say what you want the reply to achieve.", icon: <RefreshCw size={32} /> },
    { title: "Generate Reply", desc: "Click Generate to get your AI-drafted reply instantly.", icon: <Download size={32} /> },
  ],

  "meeting-notes-summarizer": [
    { title: "Paste Your Transcript", desc: "Copy and paste the meeting transcript or rough notes.", icon: <Upload size={32} /> },
    { title: "Generate Summary", desc: "Click Generate to have the AI structure your notes.", icon: <RefreshCw size={32} /> },
    { title: "Review and Share", desc: "Copy the structured summary to share with your team.", icon: <Download size={32} /> },
  ],

  "caption-generator": [
    { title: "Describe Your Post", desc: "Briefly describe what the post is about.", icon: <Upload size={32} /> },
    { title: "Choose Platform and Tone", desc: "Select the platform and the tone you want.", icon: <RefreshCw size={32} /> },
    { title: "Generate Captions", desc: "Click Generate to get captions and hashtags instantly.", icon: <Download size={32} /> },
  ],

  "slogan-generator": [
    { title: "Enter Business Details", desc: "Add your business name and industry.", icon: <Upload size={32} /> },
    { title: "Choose a Tone", desc: "Select catchy, professional, playful, or luxury.", icon: <RefreshCw size={32} /> },
    { title: "Generate Slogans", desc: "Click Generate to get 8 AI-written slogan options instantly.", icon: <Download size={32} /> },
  ],

};

export default function HowToUse() {
  const { slug } = useParams();

  const rawSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const currentSlug =
    getToolSlug(rawSlug);

  const toolName =
    currentSlug
      .replace(/-/g, " ")
      .replace(
        /\b\w/g,
        (c) => c.toUpperCase()
      );

  const steps =
    toolSteps[currentSlug] || [];

  if (!steps.length) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {getVariantHowToTitle(
          toolName,
          rawSlug,
          currentSlug
        )}
      </h2>

      <div className={styles.grid}>
        {steps.map((step, i) => (
          <div
            key={i}
            className={styles.card}
          >
            <div className={styles.icon}>
              {step.icon}
            </div>

            <h3
              className={
                styles.stepTitle
              }
            >
              {i + 1}. {step.title}
            </h3>

            <p className={styles.desc}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}