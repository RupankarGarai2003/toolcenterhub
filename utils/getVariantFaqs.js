
import { getVariantName } from "./toolVariants";
import { getToolCategory } from "./toolCategory";

export function getVariantFaqs(toolName, slug) {
  const variant = getVariantName(slug);

  if (!variant) return [];

  const label = variant
    .replace(/^for-/, "")
    .replace(/^under-/, "Under ")
    .replace(/^to-/, "To ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  const { formats, verb } = getToolCategory(toolName);

  return [
    {
      q: `How can I use ${toolName} ${label} online for free?`,
      a: `Simply upload your file, ${verb} it using our online ${toolName}, and download the result instantly. No registration or software installation is required.`,
    },

    {
      q: `Does ${toolName} ${label} affect quality or accuracy?`,
      a: `${toolName} is built to ${verb} your file while preserving quality and accuracy as closely as possible to your original.`,
    },

    {
      q: `Which file formats are supported by ${toolName} ${label}?`,
      a: `Our tool supports ${formats}, so you can work with the file types you actually need for this task.`,
    },

    {
      q: `Is ${toolName} ${label} safe to use?`,
      a: `Yes. All uploaded files are processed securely and are automatically removed after processing to help protect your privacy and personal data.`,
    },

    {
      q: `Can I use ${toolName} ${label} on mobile devices?`,
      a: `Yes. The tool works on Android phones, iPhones, tablets, Windows, macOS, and Linux using any modern web browser.`,
    },

    {
      q: `Do I need to install software to use ${toolName} ${label}?`,
      a: `No. Everything works directly in your browser, so there is nothing to download or install.`,
    },

    {
      q: `Is ${toolName} ${label} completely free?`,
      a: `Yes. You can use ${toolName} ${label} online for free without creating an account or paying any subscription fees.`,
    },

    {
      q: `Why should I use ${toolName} ${label}?`,
      a: `${toolName} ${label} helps you save time by handling this task quickly and reliably, without needing extra software or technical knowledge.`,
    },
  ];
}