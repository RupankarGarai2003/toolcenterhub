import { getVariantName } from "./toolVariants";

export function getVariantContent(toolName, slug, toolSlug = "") {
  const variant = getVariantName(slug, toolSlug);

  if (!variant) return null;

  const label = variant
    .replace(/^for-/, "")
    .replace(/^under-/, "Under ")
    .replace(/^to-/, "To ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  let title = `About ${toolName}`;
  let content = "";

  // File Size Pages
  if (
    variant.startsWith("under-") ||
    variant.startsWith("to-") ||
    /^\d+(kb|mb)$/.test(variant)
  ) {
    title = `About ${toolName} ${label}`;

    content = `
${toolName} ${label} is a free online tool designed to help you resize and optimize images to meet specific file size requirements without noticeably reducing image quality. Many websites, government portals, online application forms, educational institutions, and recruitment platforms require images to be uploaded below a certain size limit. This tool makes it easy to meet those requirements in just a few clicks.

Using advanced image optimization techniques, the tool reduces file size while preserving sharpness, colors, and overall image quality. Whether you are uploading passport photos, profile pictures, scanned documents, certificates, or other digital images, the optimized output remains suitable for online use.

The tool supports popular image formats including JPG, JPEG, PNG, and WEBP. Simply upload your image, allow the tool to process it automatically, and download the optimized version instantly. No software installation, registration, or technical knowledge is required.

${toolName} ${label} works securely in your browser and is compatible with Windows, macOS, Android, iPhone, and tablets. Your uploaded files are processed securely and removed after processing to protect your privacy.

Whether you need images for government applications, exam forms, email attachments, websites, online portals, or social media uploads, this tool provides a fast, reliable, and user-friendly solution for achieving the required file size.
`;
  }

  // Social Media Pages
  else if (variant.startsWith("for-")) {
    title = `About ${toolName} For ${label}`;

    content = `
${toolName} for ${label} helps you create perfectly optimized images for use on ${label}. Every social media platform has recommended image dimensions and aspect ratios, and using the correct size helps your photos appear clear, professional, and properly aligned across all devices.

This tool allows you to resize images while maintaining excellent quality, making it suitable for profile pictures, cover photos, banners, stories, posts, thumbnails, advertisements, and promotional graphics. The optimized images load faster and display correctly without unwanted cropping or stretching.

Supported image formats include JPG, JPEG, PNG, and WEBP. Simply upload your image, resize it according to your requirements, and download the finished result within seconds. Everything runs directly in your browser, so no software installation or registration is required.

Whether you are a content creator, marketer, business owner, designer, or casual social media user, ${toolName} for ${label} provides a simple way to prepare high-quality images for sharing while preserving clarity and visual appearance.
`;
  }

  // Document Pages
  else if (
    [
      "passport-photo",
      "signature",
      "aadhaar-card",
      "pan-card",
      "profile-photo",
      "resume",
      "cv",
    ].includes(variant)
  ) {
    title = `About ${toolName} ${label}`;

   content = `
${toolName} ${label} is designed to help you prepare images for official documents and online applications. Many government portals, recruitment websites, educational institutions, and verification systems require images that meet specific size and dimension requirements. This tool helps you create compliant images quickly and easily.

Whether you need a passport photo, signature, Aadhaar card image, PAN card photo, profile picture, resume photo, or other document image, the tool optimizes your files while preserving readability and image quality.

Upload your image, adjust the size if necessary, and download the optimized version within seconds. The tool supports common formats such as JPG, JPEG, PNG, and WEBP, and works on all major browsers and devices without requiring additional software.

${toolName} ${label} is ideal for online applications, examination forms, visa applications, government submissions, employment portals, and digital document management. Your files are processed securely and removed after processing to ensure complete privacy.
`;
  }

  // Logo, Banner, Thumbnail
  else if (
    ["logo", "banner", "thumbnail"].includes(variant)
  ) {
    title = `About ${toolName} ${label}`;

content = `
${toolName} ${label} helps you resize and optimize graphics for websites, branding, digital marketing, and online content creation. Maintaining the correct dimensions ensures your logos, banners, and thumbnails appear sharp, professional, and visually appealing across different devices and platforms.

This tool supports popular image formats including JPG, JPEG, PNG, and WEBP while preserving image quality during resizing. It is suitable for website headers, YouTube thumbnails, social media banners, company logos, advertisements, presentations, and marketing materials.

Simply upload your graphic, resize it according to your requirements, and download the optimized version instantly. Everything is processed securely within your browser, eliminating the need for software installation or account registration.

Whether you are a designer, business owner, blogger, content creator, or digital marketer, ${toolName} ${label} offers a fast and reliable solution for preparing professional-quality graphics while maintaining excellent visual clarity.
`;
  }

// Default
else {
  title = `About ${toolName} ${label}`;

  content = `
${toolName} ${label} is a free online tool designed to help users process, optimize, resize, compress, convert, and manage files quickly and securely. Whether you are working with images, PDF documents, office files, or other supported formats, this tool provides a fast and reliable solution that works directly in your web browser without requiring software installation or registration.

The tool is built to simplify everyday tasks by allowing users to upload files, process them instantly, and download the optimized result within seconds. Advanced processing algorithms help maintain high output quality while improving compatibility, reducing file size where necessary, and ensuring files meet the requirements of websites, applications, and online platforms.

${toolName} ${label} supports popular file formats and is compatible with Windows, macOS, Linux, Android, iPhone, and tablets. Its responsive interface works smoothly across desktop and mobile devices, allowing you to complete your tasks from anywhere without installing additional applications.

Privacy and security are important features of this tool. Uploaded files are processed securely, are not permanently stored, and are automatically removed after processing. This allows you to work confidently with personal, professional, and business files while maintaining data privacy.

Whether you are a student, designer, developer, business professional, marketer, photographer, or everyday internet user, ${toolName} ${label} helps save time by providing a simple workflow. Upload your file, choose the required settings if available, process it instantly, and download the finished result with just a few clicks.

Our goal is to provide a fast, accurate, and user-friendly online tool that delivers professional-quality results without unnecessary complexity. No registration, subscriptions, or hidden fees are required, making ${toolName} ${label} an efficient solution for everyday file processing needs.
`;
}

  return {
    title,
    content,
  };
}
