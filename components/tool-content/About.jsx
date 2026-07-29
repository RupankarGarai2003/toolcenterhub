"use client";

import { useParams } from "next/navigation";
import styles from "../../components/Styles/tool-component/About.module.css";
import getToolSlug from "@/utils/getToolSlug";
  import {
  getVariantContent,
} from "@/utils/toolVariantContent";

const aboutContent = {
  "image-resizer":{
    title: "About Image Resizer",
    content: `
        Image Resizer is a free online tool that allows you to resize JPG, PNG, and WEBP images quickly without installing any software. Whether you need to adjust image dimensions for websites, social media posts, email attachments, online forms, or digital marketing campaigns, our tool makes the process simple and efficient.

        With this Image Resizer, you can customize image width and height, maintain the original aspect ratio, and choose different output formats based on your requirements. The tool is designed to preserve image quality while reducing or increasing dimensions, ensuring your images remain sharp and professional.

        Our online image resizer supports popular formats including JPG, PNG, and WEBP. You can upload an image directly from your device, set the desired dimensions, preview the result, and download the resized image instantly. No registration, installation, or technical knowledge is required.

        This tool is useful for bloggers, designers, students, marketers, website owners, and anyone who needs to resize images online. Whether you are preparing images for social media platforms, optimizing visuals for websites, or adjusting photos for documents, the Image Resizer provides a fast and secure solution.

        All image processing is performed securely, and your files are not permanently stored. This ensures privacy, security, and complete control over your data while using the tool.
            `,
  },

"image-compressor": {
  title: "About Image Compressor",
  content: `
      Image Compressor is a free online tool that helps you reduce the file size of JPG, JPEG, PNG, and WEBP images without installing any software. Whether you need to optimize images for websites, social media, email attachments, or online forms, this tool makes image compression fast and simple.

      With our Image Compressor, you can significantly decrease image file size while maintaining excellent visual quality. Smaller image files load faster, improve website performance, and help save storage space without noticeably affecting appearance.

      The tool supports popular image formats including JPG, PNG, and WEBP. Simply upload your image, compress it in seconds, preview the result, and download the optimized version instantly. No registration or technical expertise is required.

      Image Compressor is useful for bloggers, designers, marketers, students, website owners, and anyone who needs smaller image files for faster sharing and improved performance.

      All image processing is performed securely, and your files are not permanently stored, ensuring privacy and complete control over your data.
  `,
},

"pdf-to-word": {
  title: "About PDF to Word",
  content: `
      PDF to Word is a free online tool that converts PDF files into editable Word documents quickly and accurately. It allows you to extract text and content from PDF files so you can make changes using Microsoft Word or compatible word processors.

      Whether you need to edit contracts, reports, assignments, resumes, or business documents, this tool helps transform PDF files into DOCX format while preserving formatting as much as possible.

      Simply upload your PDF file, start the conversion process, and download the Word document within seconds. No software installation, registration, or technical knowledge is required.

      PDF to Word is useful for students, professionals, teachers, businesses, and anyone who needs to edit PDF content efficiently.

      Your files are processed securely and are not permanently stored, ensuring privacy and data protection.
  `,
},

"word-to-pdf": {
  title: "About Word to PDF",
  content: `
      Word to PDF is a free online tool that converts DOC and DOCX documents into PDF files quickly and securely. It helps preserve formatting, fonts, images, and document structure while creating professional PDF files.

      Whether you are sharing reports, resumes, invoices, assignments, or business documents, converting Word files to PDF ensures consistent formatting across devices and platforms.

      Simply upload your Word document and download the generated PDF instantly. No registration, software installation, or technical expertise is required.

      This tool is ideal for students, professionals, businesses, and anyone who needs reliable Word to PDF conversion online.

      All uploaded files are processed securely and are not permanently stored, helping protect your privacy and sensitive information.
  `,
},

"jpg-to-pdf": {
  title: "About JPG to PDF",
  content: `
      JPG to PDF is a free online tool that allows you to convert JPG and JPEG images into PDF documents quickly and easily. It is perfect for creating professional PDF files from photos, scanned documents, screenshots, and other image files.

      You can combine one or multiple JPG images into a single PDF document while maintaining image quality and proper page layout.

      Simply upload your images, arrange them if needed, and download the generated PDF instantly. No registration or software installation is required.

      This tool is useful for students, office workers, businesses, and anyone who needs to convert images into a shareable and printable PDF format.

      All file processing is performed securely, and uploaded images are not permanently stored.
  `,
},

"pdf-merger": {
  title: "About PDF Merger",
  content: `
      PDF Merger is a free online tool that allows you to combine multiple PDF files into a single document quickly and efficiently. Whether you need to merge reports, invoices, contracts, presentations, or scanned documents, this tool simplifies the process.

      You can upload multiple PDF files, arrange them in your preferred order, and create one consolidated PDF document in just a few clicks.

      The PDF Merger tool helps improve document organization and makes sharing multiple files more convenient.

      No software installation, registration, or technical skills are required. Simply upload, merge, and download your combined PDF instantly.

      All uploaded files are processed securely and are not permanently stored, ensuring privacy and data protection.
  `,
},

"pdf-splitter": {
  title: "About PDF Splitter",
  content: `
      PDF Splitter is a free online tool that helps you extract pages or divide large PDF files into smaller documents. It provides a quick and efficient way to manage PDF files without installing software.

      Whether you need to separate chapters, extract specific pages, split reports, or create smaller PDF documents for sharing, this tool makes the process simple and reliable.

      Upload your PDF file, choose the pages you want to extract or split, and download the new PDF files instantly.

      PDF Splitter is useful for students, professionals, businesses, and anyone who works regularly with PDF documents.

      All file processing is performed securely, and uploaded documents are not permanently stored to protect your privacy.
  `,
},

"pdf-to-jpg": {
  title: "About PDF to JPG",
  content: `
      PDF to JPG is a free online tool that converts PDF pages into high-quality JPG images. It allows you to transform PDF documents into image files that can be easily shared, edited, or used in presentations and websites.

      Whether you need to extract pages from reports, convert scanned documents, or create images from PDF content, this tool provides a fast and accurate solution.

      Simply upload your PDF file, convert it to JPG format, and download the generated images instantly.

      The tool is ideal for students, designers, marketers, businesses, and anyone who needs image versions of PDF documents.

      All uploaded files are processed securely and are not permanently stored, ensuring complete privacy and security.
  `,
},

"image-converter": {
  title: "About Image Converter",
  content: `
      Image Converter is a free online tool that allows you to convert images between popular formats such as JPG, PNG, and WEBP. It provides a fast and convenient way to change image formats without installing software.

      Whether you need better compatibility, smaller file sizes, or a specific format for a project, this tool helps convert images while maintaining quality.

      Upload your image, select the desired output format, and download the converted image instantly. No registration or technical expertise is required.

      This tool is useful for designers, bloggers, marketers, website owners, students, and anyone who works with digital images.

      All image processing is performed securely, and uploaded files are not permanently stored.
  `,
},

"image-cropper": {
  title: "About Image Cropper",
  content: `
      Image Cropper is a free online tool that allows you to crop images quickly and precisely. It helps remove unwanted areas, improve composition, and prepare images for websites, social media, documents, and marketing materials.

      With this tool, you can select the exact portion of an image you want to keep while maintaining image quality and clarity.

      The Image Cropper supports popular formats including JPG, PNG, and WEBP. Simply upload your image, crop it to the desired area, preview the result, and download it instantly.

      This tool is useful for photographers, designers, students, marketers, and anyone who needs to edit images online.

      All uploaded files are processed securely and are not permanently stored, ensuring complete privacy.
  `,
},

"png-to-jpg": {
  title: "About PNG to JPG",
  content: `
      PNG to JPG is a free online tool that converts PNG images into JPG format quickly and efficiently. Converting PNG files to JPG can help reduce file size and improve compatibility across websites, applications, and devices.

      The tool preserves image quality while generating optimized JPG files suitable for sharing, uploading, and publishing online.

      Simply upload your PNG image, convert it within seconds, and download the JPG version instantly.

      This tool is ideal for students, designers, website owners, bloggers, and anyone who needs fast PNG to JPG conversion.

      All file processing is performed securely, and uploaded images are not permanently stored.
  `,
},

"jpg-to-png": {
  title: "About JPG to PNG",
  content: `
      JPG to PNG is a free online tool that converts JPG and JPEG images into PNG format. PNG files are widely used for high-quality graphics, transparency support, and lossless image storage.

      Whether you need PNG images for graphic design, website development, presentations, or digital projects, this tool provides a quick and reliable conversion solution.

      Upload your JPG image, convert it to PNG format, and download the result instantly without installing any software.

      The tool is useful for designers, developers, marketers, students, and anyone who works with digital images.

      All image processing is performed securely, and uploaded files are not permanently stored to ensure privacy and security.
  `,
},


"qr-code-generator": {
  title: "About QR Code Generator",
  content: `
      QR Code Generator is a free online tool that allows you to create QR codes instantly for URLs, text, contact information, Wi-Fi credentials, and more. QR codes make it easy to share information quickly using smartphones and QR code scanners.

      Simply enter your content, generate the QR code, and download it for use in marketing materials, business cards, posters, websites, packaging, and digital campaigns.

      The generated QR codes are high quality and can be used for both personal and professional purposes.

      This tool is useful for businesses, marketers, students, event organizers, and anyone who wants to share information efficiently.

      No registration is required, and all processing is performed securely to protect your data.
  `,
},

"password-generator": {
  title: "About Password Generator",
  content: `
      Password Generator is a free online tool that helps you create strong, secure, and random passwords instantly. Strong passwords play an important role in protecting online accounts, personal information, and sensitive data from unauthorized access.

      You can generate passwords with customizable lengths and character combinations, including uppercase letters, lowercase letters, numbers, and special symbols.

      Whether you need passwords for email accounts, social media, banking, business applications, or websites, this tool provides secure password generation in seconds.

      No passwords are stored or transmitted, ensuring complete privacy and security while using the tool.
  `,
},

"word-counter": {
  title: "About Word Counter",
  content: `
      Word Counter is a free online tool that instantly counts words, characters, sentences, and paragraphs in your text. It helps writers, students, bloggers, marketers, and professionals analyze written content quickly and accurately.

      Whether you are working on essays, articles, reports, social media posts, or website content, the tool provides detailed statistics to help meet word count requirements and improve writing productivity.

      Simply paste or type your text into the editor and view real-time results immediately.

      The tool works directly in your browser and does not permanently store your content, ensuring privacy and security.
  `,
},

"json-formatter": {
  title: "About JSON Formatter",
  content: `
      JSON Formatter is a free online tool that helps format and beautify JSON data for improved readability and debugging. Properly formatted JSON makes it easier to understand data structures and identify errors during development.

      Simply paste your JSON code and the tool will automatically organize and indent the content into a clean, readable format.

      This tool is useful for developers, software engineers, API users, testers, and students who regularly work with JSON data.

      No software installation is required, and all processing is performed securely within your browser whenever possible.
  `,
},

"json-validator": {
  title: "About JSON Validator",
  content: `
      JSON Validator is a free online tool that checks whether JSON data is valid and properly structured. It helps developers identify syntax errors, formatting issues, and invalid JSON elements quickly.

      Simply paste your JSON content into the validator and receive instant feedback about any detected errors.

      This tool is valuable for API development, data processing, software testing, and web development projects that rely on JSON data exchange.

      Fast validation and easy-to-understand error reporting help save time and improve development efficiency.

      Your data is processed securely and is not permanently stored.
  `,
},

"base64-encoder": {
  title: "About Base64 Encoder",
  content: `
      Base64 Encoder is a free online tool that converts text and data into Base64 format quickly and accurately. Base64 encoding is commonly used for data transmission, email attachments, APIs, authentication systems, and web development.

      Simply enter your text and generate the encoded Base64 output instantly.

      This tool is useful for developers, system administrators, students, and IT professionals who work with encoded data regularly.

      No software installation is required, and all processing is performed securely for maximum privacy.
  `,
},

"base64-decoder": {
  title: "About Base64 Decoder",
  content: `
      Base64 Decoder is a free online tool that converts Base64-encoded data back into its original readable format. It helps developers and IT professionals quickly decode text, strings, and encoded information.

      Simply paste your Base64 content and view the decoded result instantly.

      This tool is commonly used in software development, API integrations, authentication systems, and data processing workflows.

      Fast decoding and an easy-to-use interface make it a convenient solution for handling Base64 data online.

      Your information is processed securely and is not permanently stored.
  `,
},

"html-minifier": {
  title: "About HTML Minifier",
  content: `
      HTML Minifier is a free online tool that reduces HTML file size by removing unnecessary spaces, comments, and formatting. Minified HTML files load faster and help improve website performance.

      By optimizing HTML code, developers can reduce page size and improve user experience without changing website functionality.

      Simply paste your HTML code into the tool and receive a compressed version instantly.

      This tool is useful for web developers, designers, website owners, and digital marketers focused on performance optimization.

      All processing is performed securely and efficiently.
  `,
},

"css-minifier": {
  title: "About CSS Minifier",
  content: `
      CSS Minifier is a free online tool that compresses CSS code by removing unnecessary whitespace, comments, and formatting. Smaller CSS files help websites load faster and improve overall performance.

      The tool preserves functionality while reducing file size, making it ideal for production-ready websites and web applications.

      Simply paste your CSS code and generate a minified version instantly.

      CSS Minifier is useful for developers, designers, website owners, and performance optimization specialists.

      No software installation is required, and all processing is performed securely.
  `,
},

"js-minifier": {
  title: "About JS Minifier",
  content: `
      JS Minifier is a free online tool that compresses JavaScript code by removing unnecessary characters, spaces, and formatting. Minified JavaScript files load faster and help improve website speed and efficiency.

      The tool reduces file size while maintaining functionality, making it suitable for production environments and performance optimization.

      Simply paste your JavaScript code and generate the optimized version instantly.

      This tool is useful for web developers, software engineers, and website owners who want to improve page performance and reduce bandwidth usage.

      All code processing is handled securely and efficiently.
  `,
},

"url-encoder": {
  title: "About URL Encoder",
  content: `
      URL Encoder is a free online tool that converts special characters into URL-safe encoded formats. URL encoding ensures that web addresses and query parameters can be transmitted correctly over the internet.

      The tool is useful for developers, API integrations, web applications, and data transmission tasks where encoded URLs are required.

      Simply enter your text or URL and generate the encoded output instantly.

      URL Encoder is fast, accurate, and works directly in your browser without requiring software installation.

      Your data is processed securely and is not permanently stored.
  `,
},

"url-decoder": {
  title: "About URL Decoder",
  content: `
      URL Decoder is a free online tool that converts encoded URLs back into their original readable format. It helps developers and users understand encoded query strings, parameters, and web addresses.

      Simply paste an encoded URL and view the decoded output instantly.

      This tool is commonly used during web development, debugging, API testing, and data analysis.

      URL Decoder provides fast and accurate decoding while maintaining complete privacy and security.

      No registration or software installation is required.
  `,
},


"emi-calculator": {
  title: "About EMI Calculator",
  content: `
        EMI Calculator is a free online tool that helps you calculate the Equated Monthly Installment for home loans, car loans, and personal loans. Enter the loan amount, interest rate, and tenure to instantly see your monthly payment.

        The tool also breaks down the total interest you will pay over the life of the loan and the total amount repaid, helping you compare loan offers and plan your budget more effectively.

        This calculator is useful for borrowers, financial planners, and anyone comparing loan options before making a borrowing decision. All calculations happen instantly in your browser.
      `,
},

"compound-interest-calculator": {
  title: "About Compound Interest Calculator",
  content: `
        Compound Interest Calculator is a free online tool that calculates how your money grows over time when interest is compounded annually, semi-annually, quarterly, or monthly.

        Simply enter the principal amount, annual interest rate, time period, and compounding frequency to see the future value of your investment and the total interest earned.

        This tool is useful for investors, students, and anyone planning savings, fixed deposits, or long-term investments.
      `,
},

"simple-interest-calculator": {
  title: "About Simple Interest Calculator",
  content: `
        Simple Interest Calculator is a free online tool that calculates interest earned or owed based on a fixed principal amount, without compounding.

        Enter the principal, annual interest rate, and time period in years to instantly see the interest amount and the total repayment or maturity value.

        This tool is useful for loans, short-term deposits, and any scenario where interest accrues in a straight line rather than compounding.
      `,
},

"gst-calculator": {
  title: "About GST Calculator",
  content: `
        GST Calculator is a free online tool that helps you add or remove GST (Goods and Services Tax) from any amount in seconds.

        Choose whether you want to add GST to a base price or extract the GST already included in a total price, enter the GST rate, and get an instant, accurate breakdown.

        This tool is useful for business owners, accountants, freelancers, and shoppers who need to verify GST-inclusive or GST-exclusive prices.
      `,
},

"sales-tax-calculator": {
  title: "About Sales Tax Calculator",
  content: `
        Sales Tax Calculator is a free online tool that calculates the sales tax amount and final price for any purchase based on your local tax rate.

        Enter the pre-tax price and the applicable sales tax rate to instantly see the tax amount and the total amount you will pay at checkout.

        This tool is useful for shoppers, retailers, and accountants who need quick and accurate sales tax calculations.
      `,
},

"discount-calculator": {
  title: "About Discount Calculator",
  content: `
        Discount Calculator is a free online tool that helps you calculate the final price of a product after a percentage discount is applied.

        Enter the original price and the discount percentage to instantly see how much you save and what the final price will be.

        This tool is useful for shoppers comparing sale prices, and for retailers setting promotional discounts.
      `,
},

"tip-calculator": {
  title: "About Tip Calculator",
  content: `
        Tip Calculator is a free online tool that calculates how much tip to leave at a restaurant and how to split the total bill among multiple people.

        Enter the bill amount, desired tip percentage, and number of people to instantly see the tip amount, total bill, and each person's share.

        This tool is useful for diners splitting checks, group outings, and anyone who wants to quickly calculate a fair tip.
      `,
},

"profit-margin-calculator": {
  title: "About Profit Margin Calculator",
  content: `
        Profit Margin Calculator is a free online tool that calculates your profit, profit margin percentage, and markup based on cost and selling price.

        Enter the cost price and selling price of a product to instantly see the profit amount, profit margin, and markup percentage.

        This tool is useful for retailers, e-commerce sellers, and business owners pricing products for a target profit margin.
      `,
},

"break-even-calculator": {
  title: "About Break-Even Point Calculator",
  content: `
        Break-Even Point Calculator is a free online tool that calculates how many units you need to sell to cover your fixed and variable costs.

        Enter your fixed costs, selling price per unit, and variable cost per unit to instantly see the break-even point in units and revenue.

        This tool is useful for entrepreneurs, small business owners, and financial planners evaluating a new product or business idea.
      `,
},

"sip-calculator": {
  title: "About SIP Calculator",
  content: `
        SIP Calculator is a free online tool that estimates the future value of a Systematic Investment Plan (SIP) based on your monthly contribution, expected return rate, and investment period.

        Enter your monthly investment amount, expected annual rate of return, and duration in years to see how much your investment could grow to, along with your total invested amount and estimated gains.

        This tool is useful for mutual fund investors and anyone planning long-term wealth creation through regular monthly investments.
      `,
},

"mortgage-calculator": {
  title: "About Mortgage Calculator",
  content: `
        Mortgage Calculator is a free online tool that estimates your monthly home loan payment based on the loan amount, interest rate, and loan term.

        Enter the loan amount, annual interest rate, and term in years to instantly see your monthly payment along with the total interest and total amount paid over the life of the loan.

        This tool is useful for home buyers comparing mortgage offers and planning long-term housing budgets.
      `,
},

"bmr-calculator": {
  title: "About BMR Calculator",
  content: `
        BMR Calculator is a free online tool that estimates your Basal Metabolic Rate — the number of calories your body burns at rest to maintain basic functions like breathing and circulation.

        Using the Mifflin-St Jeor equation, enter your gender, age, weight, and height to instantly see your estimated daily BMR in calories.

        This tool is useful for anyone planning a diet, fitness routine, or calorie budget, since BMR forms the baseline for calculating total daily energy needs.
      `,
},

"calorie-calculator": {
  title: "About Calorie Calculator",
  content: `
        Calorie Calculator is a free online tool that estimates your daily calorie needs for maintaining, losing, or gaining weight based on your activity level.

        Enter your gender, age, weight, height, and activity level to see your maintenance calories along with suggested calorie targets for weight loss and weight gain.

        This tool is useful for anyone following a diet plan, tracking fitness goals, or building a sustainable nutrition routine.
      `,
},

"body-fat-calculator": {
  title: "About Body Fat Calculator",
  content: `
        Body Fat Calculator is a free online tool that estimates your body fat percentage using the U.S. Navy circumference method, based on height, neck, waist, and (for women) hip measurements.

        Simply measure yourself with a tape measure, enter the values, and instantly get an estimated body fat percentage without needing calipers or a DEXA scan.

        This tool is useful for fitness enthusiasts, athletes, and anyone tracking body composition changes over time.
      `,
},

"ideal-weight-calculator": {
  title: "About Ideal Weight Calculator",
  content: `
        Ideal Weight Calculator is a free online tool that estimates your ideal body weight based on your height and gender using the Devine formula, a method widely used in medicine.

        Simply enter your height and select your gender to instantly see an estimated healthy weight range as a reference point.

        This tool is useful as a general wellness reference, though ideal weight can vary based on muscle mass, body frame, and individual health factors.
      `,
},

"gpa-calculator": {
  title: "About GPA Calculator",
  content: `
        GPA Calculator is a free online tool that calculates your Grade Point Average based on the grade points and credit hours of each course.

        Enter your grade points and corresponding credit hours as comma-separated lists to instantly calculate your weighted GPA.

        This tool is useful for students tracking their academic performance across a semester or entire program.
      `,
},

"average-calculator": {
  title: "About Average Calculator",
  content: `
        Average Calculator is a free online tool that calculates the average, sum, count, minimum, and maximum of any list of numbers.

        Simply enter your numbers separated by commas to instantly get a full statistical summary without needing a spreadsheet.

        This tool is useful for students, teachers, analysts, and anyone who needs a quick average of test scores, data points, or measurements.
      `,
},

"percentage-change-calculator": {
  title: "About Percentage Change Calculator",
  content: `
        Percentage Change Calculator is a free online tool that calculates the percentage increase or decrease between an old value and a new value.

        Enter the original value and the new value to instantly see whether it increased or decreased, and by what percentage.

        This tool is useful for tracking price changes, sales growth, weight changes, or any comparison between two numbers over time.
      `,
},

"date-difference-calculator": {
  title: "About Date Difference Calculator",
  content: `
        Date Difference Calculator is a free online tool that calculates the exact number of years, months, and days between two dates.

        Enter a start date and an end date to instantly see the difference broken down into years, months, and days, along with the total number of days.

        This tool is useful for calculating durations for contracts, project timelines, anniversaries, and countdowns.
      `,
},

"time-duration-calculator": {
  title: "About Time Duration Calculator",
  content: `
        Time Duration Calculator is a free online tool that calculates the exact duration between a start time and an end time.

        Enter the start and end times, choose whether the end time falls on the same day or the next day, and instantly see the duration in hours and minutes.

        This tool is useful for calculating work hours, event durations, meeting lengths, and shift timings.
      `,
},

"length-converter": {
  title: "About Length Converter",
  content: `
        Length Converter is a free online tool that converts between common length units including meters, kilometers, centimeters, millimeters, miles, yards, feet, and inches.

        Enter a value, choose the unit you're converting from and to, and instantly get an accurate converted result.

        This tool is useful for students, engineers, travelers, and anyone working across metric and imperial measurement systems.
      `,
},

"weight-converter": {
  title: "About Weight Converter",
  content: `
        Weight Converter is a free online tool that converts between common weight units including kilograms, grams, pounds, ounces, and metric tons.

        Enter a value, choose the unit you're converting from and to, and instantly get an accurate converted result.

        This tool is useful for cooking, fitness tracking, shipping, and anyone working across metric and imperial weight systems.
      `,
},

"temperature-converter": {
  title: "About Temperature Converter",
  content: `
        Temperature Converter is a free online tool that converts temperature values between Celsius, Fahrenheit, and Kelvin instantly.

        Enter a temperature value, choose the unit you're converting from and to, and get an accurate converted result immediately.

        This tool is useful for students, scientists, travelers, and anyone who needs quick, accurate temperature conversions.
      `,
},


"grammar-checker": {
  title: "About Grammar Checker",
  content: `
        Grammar Checker is a free online tool that scans your writing for grammar mistakes, spelling errors, and punctuation issues, then suggests corrections in real time.

        Paste or type your text, click Check Grammar, and instantly see a list of issues with clear explanations and suggested fixes. You can apply all suggestions at once or review them individually.

        This tool is useful for students, professionals, bloggers, and non-native English speakers who want cleaner, more polished writing before sending an email, publishing a post, or submitting an assignment.
      `,
},

"language-translator": {
  title: "About Language Translator",
  content: `
        Language Translator is a free online tool that translates text between English, Spanish, French, German, Hindi, Chinese, Arabic, and several other languages.

        Type or paste your text, choose the source and target languages, and get an instant translation you can copy or use right away. A swap button lets you quickly reverse the translation direction.

        This tool is useful for travelers, students, and professionals who need a quick translation without installing a dedicated app.
      `,
},

"text-to-speech-converter": {
  title: "About Text to Speech Converter",
  content: `
        Text to Speech Converter is a free online tool that reads your text aloud using your browser's built-in voices, with adjustable speed and pitch.

        Type or paste any text, choose a voice, adjust the speaking speed and pitch, and click Speak to hear it read aloud instantly. You can pause, resume, or stop playback at any time.

        This tool is useful for proofreading by ear, creating quick voiceovers, assisting with accessibility, or simply listening to articles instead of reading them.
      `,
},

"speech-to-text-converter": {
  title: "About Speech to Text Converter",
  content: `
        Speech to Text Converter is a free online tool that transcribes your spoken words into text in real time using your device's microphone.

        Click Start Listening, speak naturally, and watch your words appear as text as you talk. You can edit the transcript directly, then copy it for use elsewhere.

        This tool is useful for dictating notes, drafting emails hands-free, or quickly transcribing short voice memos without typing.
      `,
},

"text-summarizer": {
  title: "About AI Text Summarizer",
  content: `
        AI Text Summarizer is a free online tool that uses AI to condense long articles, essays, or documents into a short, clear summary in seconds.

        Paste your text, choose a summary length, and get a well-written summary that captures the key points without losing meaning.

        This tool is useful for students, researchers, and professionals who need to quickly understand long content or prepare a brief overview.
      `,
},

"paraphrasing-tool": {
  title: "About AI Paraphrasing Tool",
  content: `
        AI Paraphrasing Tool is a free online tool that rewrites your sentences or paragraphs in a different style while preserving the original meaning.

        Paste your text, choose a tone such as formal, casual, or simple, and get a freshly worded version instantly.

        This tool is useful for writers avoiding repetitive phrasing, students rewording notes in their own words, and professionals adjusting tone for different audiences.
      `,
},

"essay-generator": {
  title: "About AI Essay Generator",
  content: `
        AI Essay Generator is a free online tool that uses AI to draft a complete, well-structured essay on any topic you provide.

        Enter your topic, choose an approximate length and tone, and get an essay with a clear introduction, body paragraphs, and conclusion in seconds.

        This tool is useful for students brainstorming structure and ideas, and writers who want a fast first draft to edit and personalize.
      `,
},

"content-generator": {
  title: "About AI Content Generator",
  content: `
        AI Content Generator is a free online tool that creates ready-to-use marketing content such as blog intros, product descriptions, social posts, and ad copy.

        Choose the type of content you need, describe your topic or product, pick a tone, and get AI-generated copy instantly.

        This tool is useful for marketers, small business owners, and content creators who need quick, on-brand copy without hiring a copywriter for every piece.
      `,
},

"resume-analyzer": {
  title: "About AI Resume Analyzer",
  content: `
        AI Resume Analyzer is a free online tool that reviews your resume and gives AI-powered feedback on strengths, weaknesses, and specific improvements.

        Paste your resume text, optionally add a job description to check keyword alignment, and get structured feedback covering overall impression, strengths, gaps, and actionable suggestions.

        This tool is useful for job seekers preparing applications and wanting a second opinion before submitting their resume.
      `,
},

"cover-letter-generator": {
  title: "About AI Cover Letter Generator",
  content: `
        AI Cover Letter Generator is a free online tool that writes a personalized cover letter for any job application based on the role, company, and your key skills.

        Enter the job title, company name, and your relevant skills or experience, choose a tone, and get a ready-to-edit cover letter instantly.

        This tool is useful for job seekers who want a strong starting draft tailored to a specific position without staring at a blank page.
      `,
},

"email-reply-generator": {
  title: "About AI Email Reply Generator",
  content: `
        AI Email Reply Generator is a free online tool that drafts a ready-to-send reply to any email based on what you want to say and the tone you want.

        Paste the email you received, describe what your reply should accomplish, choose a tone, and get a complete draft instantly.

        This tool is useful for professionals who want to reply faster to emails while keeping their tone consistent and polished.
      `,
},

"meeting-notes-summarizer": {
  title: "About AI Meeting Notes Summarizer",
  content: `
        AI Meeting Notes Summarizer is a free online tool that turns a raw meeting transcript into an organized summary of key points, decisions, and action items.

        Paste your meeting transcript or rough notes, and the AI will structure it into discussion points, decisions made, and action items with owners where mentioned.

        This tool is useful for teams who want clean meeting notes without manually reviewing a long transcript after every call.
      `,
},

"caption-generator": {
  title: "About AI Caption & Hashtag Generator",
  content: `
        AI Caption & Hashtag Generator is a free online tool that creates catchy social media captions and relevant hashtags for your posts using AI.

        Describe your post, choose a platform and tone, and get three caption options plus a ready-to-use set of hashtags instantly.

        This tool is useful for content creators, small businesses, and social media managers who post regularly and want fresh, engaging captions without the writer's block.
      `,
},

"slogan-generator": {
  title: "About AI Slogan & Tagline Generator",
  content: `
        AI Slogan & Tagline Generator is a free online tool that creates catchy slogans and taglines for your business using AI.

        Enter your business name and industry, choose a tone, and get 8 unique slogan options instantly to use on your branding, website, or ads.

        This tool is useful for startups, small business owners, and marketers who want fresh tagline ideas without hiring a branding agency.
      `,
},


};

export default function About() {
  const { slug } = useParams();

  const rawSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const currentSlug =
    getToolSlug(rawSlug);



const baseTool =
  aboutContent[currentSlug];

const variantTool =
  getVariantContent(
    baseTool?.title?.replace(
      "About ",
      ""
    ),
    rawSlug
  );

const tool =
  variantTool || baseTool;

if (!tool) return null;


  return (
    <div className={styles.container}>
      <div className={styles.topLine}></div>

      <h2 className={styles.heading}>
        {tool.title}
      </h2>

      <div className={styles.text}>
        {tool.content
          .trim()
          .split("\n\n")
          .map((paragraph, index) => (
            <p key={index}>
              {paragraph.trim()}
            </p>
          ))}
      </div>
    </div>
  );
}