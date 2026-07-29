"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "../../components/Styles/tool-component/RelatedTools.module.css";
import getToolSlug from "@/utils/getToolSlug";

const relatedTools = {
  "image-resizer": [
    { name: "Image Compressor", slug: "image-compressor" },
    { name: "Image Cropper", slug: "image-cropper" },
    { name: "Image Converter", slug: "image-converter" },
    { name: "PNG to JPG", slug: "png-to-jpg" },
    { name: "JPG to PNG", slug: "jpg-to-png" },
  ],

  "image-compressor": [
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image Cropper", slug: "image-cropper" },
    { name: "Image Converter", slug: "image-converter" },
    { name: "PNG to JPG", slug: "png-to-jpg" },
    { name: "JPG to PNG", slug: "jpg-to-png" },
  ],

  "image-cropper": [
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image Compressor", slug: "image-compressor" },
    { name: "Image Converter", slug: "image-converter" },
    { name: "PNG to JPG", slug: "png-to-jpg" },
    { name: "JPG to PNG", slug: "jpg-to-png" },
  ],

  "image-converter": [
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image Compressor", slug: "image-compressor" },
    { name: "Image Cropper", slug: "image-cropper" },
    { name: "PNG to JPG", slug: "png-to-jpg" },
    { name: "JPG to PNG", slug: "jpg-to-png" },
  ],

  "png-to-jpg": [
    { name: "JPG to PNG", slug: "jpg-to-png" },
    { name: "Image Converter", slug: "image-converter" },
    { name: "Image Compressor", slug: "image-compressor" },
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image Cropper", slug: "image-cropper" },
  ],

  "jpg-to-png": [
    { name: "PNG to JPG", slug: "png-to-jpg" },
    { name: "Image Converter", slug: "image-converter" },
    { name: "Image Compressor", slug: "image-compressor" },
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image Cropper", slug: "image-cropper" },
  ],

  "pdf-to-word": [
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "PDF Merger", slug: "pdf-merger" },
    { name: "PDF Splitter", slug: "pdf-splitter" },
    { name: "PDF to JPG", slug: "pdf-to-jpg" },
    { name: "JPG to PDF", slug: "jpg-to-pdf" },
  ],

  "word-to-pdf": [
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "PDF Merger", slug: "pdf-merger" },
    { name: "PDF Splitter", slug: "pdf-splitter" },
    { name: "PDF to JPG", slug: "pdf-to-jpg" },
    { name: "JPG to PDF", slug: "jpg-to-pdf" },
  ],

  "pdf-merger": [
    { name: "PDF Splitter", slug: "pdf-splitter" },
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "PDF to JPG", slug: "pdf-to-jpg" },
    { name: "JPG to PDF", slug: "jpg-to-pdf" },
  ],

  "pdf-splitter": [
    { name: "PDF Merger", slug: "pdf-merger" },
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "PDF to JPG", slug: "pdf-to-jpg" },
    { name: "JPG to PDF", slug: "jpg-to-pdf" },
  ],

  "pdf-to-jpg": [
    { name: "JPG to PDF", slug: "jpg-to-pdf" },
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "PDF Merger", slug: "pdf-merger" },
    { name: "PDF Splitter", slug: "pdf-splitter" },
  ],

  "jpg-to-pdf": [
    { name: "PDF to JPG", slug: "pdf-to-jpg" },
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "PDF Merger", slug: "pdf-merger" },
    { name: "PDF Splitter", slug: "pdf-splitter" },
  ],

  "qr-code-generator": [
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "URL Decoder", slug: "url-decoder" },
    { name: "Password Generator", slug: "password-generator" },
    { name: "Word Counter", slug: "word-counter" },
    { name: "JSON Formatter", slug: "json-formatter" },
  ],

  "password-generator": [
    { name: "QR Code Generator", slug: "qr-code-generator" },
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "URL Decoder", slug: "url-decoder" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "Base64 Decoder", slug: "base64-decoder" },
  ],

  "word-counter": [
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "QR Code Generator", slug: "qr-code-generator" },
    { name: "Password Generator", slug: "password-generator" },
    { name: "URL Encoder", slug: "url-encoder" },
  ],

  "json-formatter": [
    { name: "JSON Validator", slug: "json-validator" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "Base64 Decoder", slug: "base64-decoder" },
    { name: "HTML Minifier", slug: "html-minifier" },
    { name: "JS Minifier", slug: "js-minifier" },
  ],

  "json-validator": [
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "Base64 Decoder", slug: "base64-decoder" },
    { name: "HTML Minifier", slug: "html-minifier" },
    { name: "JS Minifier", slug: "js-minifier" },
  ],

  "base64-encoder": [
    { name: "Base64 Decoder", slug: "base64-decoder" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "URL Decoder", slug: "url-decoder" },
  ],

  "base64-decoder": [
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "URL Decoder", slug: "url-decoder" },
  ],

  "html-minifier": [
    { name: "CSS Minifier", slug: "css-minifier" },
    { name: "JS Minifier", slug: "js-minifier" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "URL Encoder", slug: "url-encoder" },
  ],

  "css-minifier": [
    { name: "HTML Minifier", slug: "html-minifier" },
    { name: "JS Minifier", slug: "js-minifier" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "URL Encoder", slug: "url-encoder" },
  ],

  "js-minifier": [
    { name: "HTML Minifier", slug: "html-minifier" },
    { name: "CSS Minifier", slug: "css-minifier" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
  ],

  "url-encoder": [
    { name: "URL Decoder", slug: "url-decoder" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "Base64 Decoder", slug: "base64-decoder" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
  ],

  "url-decoder": [
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "Base64 Decoder", slug: "base64-decoder" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
  ],
  "emi-calculator": [
    { name: "Mortgage Calculator", slug: "mortgage-calculator" },
    { name: "SIP Calculator", slug: "sip-calculator" },
    { name: "Compound Interest Calculator", slug: "compound-interest-calculator" },
    { name: "Simple Interest Calculator", slug: "simple-interest-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
  ],

  "compound-interest-calculator": [
    { name: "Simple Interest Calculator", slug: "simple-interest-calculator" },
    { name: "SIP Calculator", slug: "sip-calculator" },
    { name: "EMI Calculator", slug: "emi-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
  ],

  "simple-interest-calculator": [
    { name: "Compound Interest Calculator", slug: "compound-interest-calculator" },
    { name: "EMI Calculator", slug: "emi-calculator" },
    { name: "SIP Calculator", slug: "sip-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
  ],

  "gst-calculator": [
    { name: "Sales Tax Calculator", slug: "sales-tax-calculator" },
    { name: "Discount Calculator", slug: "discount-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Tip Calculator", slug: "tip-calculator" },
    { name: "Profit Margin Calculator", slug: "profit-margin-calculator" },
  ],

  "sales-tax-calculator": [
    { name: "GST Calculator", slug: "gst-calculator" },
    { name: "Discount Calculator", slug: "discount-calculator" },
    { name: "Tip Calculator", slug: "tip-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Profit Margin Calculator", slug: "profit-margin-calculator" },
  ],

  "discount-calculator": [
    { name: "Sales Tax Calculator", slug: "sales-tax-calculator" },
    { name: "GST Calculator", slug: "gst-calculator" },
    { name: "Tip Calculator", slug: "tip-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Profit Margin Calculator", slug: "profit-margin-calculator" },
  ],

  "tip-calculator": [
    { name: "Discount Calculator", slug: "discount-calculator" },
    { name: "Sales Tax Calculator", slug: "sales-tax-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
    { name: "GST Calculator", slug: "gst-calculator" },
  ],

  "profit-margin-calculator": [
    { name: "Break-Even Point Calculator", slug: "break-even-calculator" },
    { name: "Discount Calculator", slug: "discount-calculator" },
    { name: "GST Calculator", slug: "gst-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
  ],

  "break-even-calculator": [
    { name: "Profit Margin Calculator", slug: "profit-margin-calculator" },
    { name: "GST Calculator", slug: "gst-calculator" },
    { name: "SIP Calculator", slug: "sip-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
  ],

  "sip-calculator": [
    { name: "Compound Interest Calculator", slug: "compound-interest-calculator" },
    { name: "EMI Calculator", slug: "emi-calculator" },
    { name: "Mortgage Calculator", slug: "mortgage-calculator" },
    { name: "Simple Interest Calculator", slug: "simple-interest-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
  ],

  "mortgage-calculator": [
    { name: "EMI Calculator", slug: "emi-calculator" },
    { name: "SIP Calculator", slug: "sip-calculator" },
    { name: "Compound Interest Calculator", slug: "compound-interest-calculator" },
    { name: "Simple Interest Calculator", slug: "simple-interest-calculator" },
    { name: "Break-Even Point Calculator", slug: "break-even-calculator" },
  ],

  "bmr-calculator": [
    { name: "Calorie Calculator", slug: "calorie-calculator" },
    { name: "Body Fat Calculator", slug: "body-fat-calculator" },
    { name: "Ideal Weight Calculator", slug: "ideal-weight-calculator" },
    { name: "BMI Calculator", slug: "bmi-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
  ],

  "calorie-calculator": [
    { name: "BMR Calculator", slug: "bmr-calculator" },
    { name: "Body Fat Calculator", slug: "body-fat-calculator" },
    { name: "Ideal Weight Calculator", slug: "ideal-weight-calculator" },
    { name: "BMI Calculator", slug: "bmi-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
  ],

  "body-fat-calculator": [
    { name: "BMR Calculator", slug: "bmr-calculator" },
    { name: "Calorie Calculator", slug: "calorie-calculator" },
    { name: "Ideal Weight Calculator", slug: "ideal-weight-calculator" },
    { name: "BMI Calculator", slug: "bmi-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
  ],

  "ideal-weight-calculator": [
    { name: "BMI Calculator", slug: "bmi-calculator" },
    { name: "BMR Calculator", slug: "bmr-calculator" },
    { name: "Body Fat Calculator", slug: "body-fat-calculator" },
    { name: "Calorie Calculator", slug: "calorie-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
  ],

  "gpa-calculator": [
    { name: "Average Calculator", slug: "average-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Percentage Change Calculator", slug: "percentage-change-calculator" },
    { name: "BMI Calculator", slug: "bmi-calculator" },
    { name: "Date Difference Calculator", slug: "date-difference-calculator" },
  ],

  "average-calculator": [
    { name: "GPA Calculator", slug: "gpa-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Percentage Change Calculator", slug: "percentage-change-calculator" },
    { name: "Date Difference Calculator", slug: "date-difference-calculator" },
    { name: "Time Duration Calculator", slug: "time-duration-calculator" },
  ],

  "percentage-change-calculator": [
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Discount Calculator", slug: "discount-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
    { name: "GST Calculator", slug: "gst-calculator" },
    { name: "Profit Margin Calculator", slug: "profit-margin-calculator" },
  ],

  "date-difference-calculator": [
    { name: "Time Duration Calculator", slug: "time-duration-calculator" },
    { name: "Age Calculator", slug: "age-calculator" },
    { name: "Percentage Change Calculator", slug: "percentage-change-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
    { name: "GPA Calculator", slug: "gpa-calculator" },
  ],

  "time-duration-calculator": [
    { name: "Date Difference Calculator", slug: "date-difference-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
    { name: "Percentage Change Calculator", slug: "percentage-change-calculator" },
    { name: "EMI Calculator", slug: "emi-calculator" },
    { name: "GPA Calculator", slug: "gpa-calculator" },
  ],

  "length-converter": [
    { name: "Weight Converter", slug: "weight-converter" },
    { name: "Temperature Converter", slug: "temperature-converter" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
    { name: "Date Difference Calculator", slug: "date-difference-calculator" },
  ],

  "weight-converter": [
    { name: "Length Converter", slug: "length-converter" },
    { name: "Temperature Converter", slug: "temperature-converter" },
    { name: "BMI Calculator", slug: "bmi-calculator" },
    { name: "Ideal Weight Calculator", slug: "ideal-weight-calculator" },
    { name: "Average Calculator", slug: "average-calculator" },
  ],

  "temperature-converter": [
    { name: "Length Converter", slug: "length-converter" },
    { name: "Weight Converter", slug: "weight-converter" },
    { name: "Average Calculator", slug: "average-calculator" },
    { name: "BMR Calculator", slug: "bmr-calculator" },
    { name: "Percentage Calculator", slug: "percentage-calculator" },
  ],

  "grammar-checker": [
    { name: "Language Translator", slug: "language-translator" },
    { name: "Word Counter", slug: "word-counter" },
    { name: "Text to Speech Converter", slug: "text-to-speech-converter" },
    { name: "Speech to Text Converter", slug: "speech-to-text-converter" },
    { name: "JSON Formatter", slug: "json-formatter" },
  ],

  "language-translator": [
    { name: "Grammar Checker", slug: "grammar-checker" },
    { name: "Text to Speech Converter", slug: "text-to-speech-converter" },
    { name: "Speech to Text Converter", slug: "speech-to-text-converter" },
    { name: "Word Counter", slug: "word-counter" },
    { name: "JSON Formatter", slug: "json-formatter" },
  ],

  "text-to-speech-converter": [
    { name: "Speech to Text Converter", slug: "speech-to-text-converter" },
    { name: "Language Translator", slug: "language-translator" },
    { name: "Grammar Checker", slug: "grammar-checker" },
    { name: "Word Counter", slug: "word-counter" },
    { name: "JSON Formatter", slug: "json-formatter" },
  ],

  "speech-to-text-converter": [
    { name: "Text to Speech Converter", slug: "text-to-speech-converter" },
    { name: "Language Translator", slug: "language-translator" },
    { name: "Grammar Checker", slug: "grammar-checker" },
    { name: "Word Counter", slug: "word-counter" },
    { name: "JSON Formatter", slug: "json-formatter" },
  ],

  "text-summarizer": [
    { name: "AI Paraphrasing Tool", slug: "paraphrasing-tool" },
    { name: "AI Meeting Notes Summarizer", slug: "meeting-notes-summarizer" },
    { name: "AI Content Generator", slug: "content-generator" },
    { name: "Grammar Checker", slug: "grammar-checker" },
    { name: "Word Counter", slug: "word-counter" },
  ],

  "paraphrasing-tool": [
    { name: "AI Text Summarizer", slug: "text-summarizer" },
    { name: "Grammar Checker", slug: "grammar-checker" },
    { name: "AI Content Generator", slug: "content-generator" },
    { name: "AI Essay Generator", slug: "essay-generator" },
    { name: "Word Counter", slug: "word-counter" },
  ],

  "essay-generator": [
    { name: "AI Paraphrasing Tool", slug: "paraphrasing-tool" },
    { name: "AI Content Generator", slug: "content-generator" },
    { name: "Grammar Checker", slug: "grammar-checker" },
    { name: "AI Text Summarizer", slug: "text-summarizer" },
    { name: "GPA Calculator", slug: "gpa-calculator" },
  ],

  "content-generator": [
    { name: "AI Essay Generator", slug: "essay-generator" },
    { name: "AI Paraphrasing Tool", slug: "paraphrasing-tool" },
    { name: "AI Caption & Hashtag Generator", slug: "caption-generator" },
    { name: "AI Slogan & Tagline Generator", slug: "slogan-generator" },
    { name: "Grammar Checker", slug: "grammar-checker" },
  ],

  "resume-analyzer": [
    { name: "AI Cover Letter Generator", slug: "cover-letter-generator" },
    { name: "AI Email Reply Generator", slug: "email-reply-generator" },
    { name: "Grammar Checker", slug: "grammar-checker" },
    { name: "AI Paraphrasing Tool", slug: "paraphrasing-tool" },
    { name: "GPA Calculator", slug: "gpa-calculator" },
  ],

  "cover-letter-generator": [
    { name: "AI Resume Analyzer", slug: "resume-analyzer" },
    { name: "AI Email Reply Generator", slug: "email-reply-generator" },
    { name: "Grammar Checker", slug: "grammar-checker" },
    { name: "AI Paraphrasing Tool", slug: "paraphrasing-tool" },
    { name: "AI Slogan & Tagline Generator", slug: "slogan-generator" },
  ],

  "email-reply-generator": [
    { name: "AI Cover Letter Generator", slug: "cover-letter-generator" },
    { name: "Grammar Checker", slug: "grammar-checker" },
    { name: "AI Paraphrasing Tool", slug: "paraphrasing-tool" },
    { name: "Language Translator", slug: "language-translator" },
    { name: "AI Text Summarizer", slug: "text-summarizer" },
  ],

  "meeting-notes-summarizer": [
    { name: "AI Text Summarizer", slug: "text-summarizer" },
    { name: "Speech to Text Converter", slug: "speech-to-text-converter" },
    { name: "AI Email Reply Generator", slug: "email-reply-generator" },
    { name: "Grammar Checker", slug: "grammar-checker" },
    { name: "Time Duration Calculator", slug: "time-duration-calculator" },
  ],

  "caption-generator": [
    { name: "AI Slogan & Tagline Generator", slug: "slogan-generator" },
    { name: "AI Content Generator", slug: "content-generator" },
    { name: "Language Translator", slug: "language-translator" },
    { name: "Text to Speech Converter", slug: "text-to-speech-converter" },
    { name: "Grammar Checker", slug: "grammar-checker" },
  ],

  "slogan-generator": [
    { name: "AI Caption & Hashtag Generator", slug: "caption-generator" },
    { name: "AI Content Generator", slug: "content-generator" },
    { name: "AI Cover Letter Generator", slug: "cover-letter-generator" },
    { name: "GST Calculator", slug: "gst-calculator" },
    { name: "Break-Even Point Calculator", slug: "break-even-calculator" },
  ],

};



export default function RelatedTools() {
    const { slug } = useParams();

    const rawSlug = Array.isArray(slug)
        ? slug[0]
        : slug;

    const currentSlug =
        getToolSlug(rawSlug);

    const tools =
        relatedTools[currentSlug] || [];

    if (!tools.length) return null;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                Related Tools
            </h2>

            <div className={styles.grid}>
                {tools.map((tool) => (
                    <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className={styles.card}
                    >
                        <span>{tool.name}</span>

                        <span className={styles.arrow}>
                            →
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}