import type { MetadataRoute } from "next";
import { tools } from "@/lib/toolsList";

const toolSeoVariants: Record<
  string,
  string[]
> = {
  /* IMAGE RESIZER */
  "image-resizer": [
    "for-instagram",
    "for-facebook",
    "for-whatsapp",
    "for-linkedin",
    "for-youtube-thumbnail",

    "under-20kb",
    "under-50kb",
    "under-100kb",
    "under-200kb",
    "under-500kb",
    "under-1mb",

    "passport-photo",
    "signature",
    "aadhaar-card",
    "pan-card",
    "profile-photo",
  ],

  /* IMAGE COMPRESSOR */
  "image-compressor": [
    "to-20kb",
    "to-50kb",
    "to-100kb",
    "to-200kb",
    "to-500kb",

    "for-instagram",
    "for-whatsapp",
  ],

  /* IMAGE CROPPER */
  "image-cropper": [
    "by-pixel",
    "circle",
    "passport-photo",
    "profile-photo",
  ],

  /* IMAGE CONVERTER */
  "image-converter": [
    "to-jpg",
    "to-png",
    "to-pdf",

    "webp-to-jpg",
    "webp-to-png",
    "png-to-webp",
    "jpg-to-webp",
  ],

  /* PNG TO JPG */
  "png-to-jpg": [
    "50kb",
    "100kb",
  ],

  /* JPG TO PNG */
  "jpg-to-png": [
    "under-50kb",
  ],

  /* PDF TO WORD */
  "pdf-to-word": [
    "with-ocr",
    "editable-word",
  ],

  /* WORD TO PDF */
  "word-to-pdf": [
    "docx-to-pdf",
    "maker",
  ],

  /* JPG TO PDF */
  "jpg-to-pdf": [
    "multiple-images",
  ],

  /* PDF MERGER */
  "pdf-merger": [
    "combine-pdf-files",
  ],

  /* PDF SPLITTER */
  "pdf-splitter": [
    "extract-pages",
    "split-large-pdf",
  ],

  /* PDF TO JPG */
  "pdf-to-jpg": [
    "high-quality",
    "extract-images",
    "100kb",
  ],

  /* QR CODE GENERATOR */
  "qr-code-generator": [
    "with-logo",
    "wifi-qr-code",
    "url-qr-code",
    "for-website",
    "for-whatsapp",
  ],

  /* PASSWORD GENERATOR */
  "password-generator": [
    "random-password",
    "strong-password",
  ],

  /* WORD COUNTER */
  "word-counter": [
    "from-pdf",
    "character-counter",
  ],

  /* JSON FORMATTER */
  "json-formatter": [
    "viewer",
    "and-compare",
    "to-single-line",
    "beautify-json",
  ],

  /* JSON VALIDATOR */
  "json-validator": [
    "and-fixer",
    "with-schema",
    "validate-json",
  ],

  /* BASE64 ENCODER */
  "base64-encoder": [
    "image",
    "website",
    "text-to-base64",
  ],

  /* BASE64 DECODER */
  "base64-decoder": [
    "to-image",
    "to-file",
    "to-pdf",
    "base64-to-text",
  ],

  /* HTML MINIFIER */
  "html-minifier": [
    "compress-html",
  ],

  /* CSS MINIFIER */
  "css-minifier": [
    "and-compressor",
    "code-minifier",
    "compress-css",
  ],

  /* JS MINIFIER */
  "js-minifier": [
    "and-obfuscator",
    "compress-javascript",
  ],

  /* URL ENCODER */
  "url-encoder": [
    "for-svg",
    "encode-url",
  ],

  /* URL DECODER */
  "url-decoder": [
    "decode-url",
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://toolscenterhub.com";

  const toolRoutes = tools.flatMap(
    (tool) => {
      const variants =
        toolSeoVariants[
          tool.slug
        ] || [];

      return [
        {
          url: `${baseUrl}/tools/${tool.slug}`,
          lastModified: new Date(),
          changeFrequency:
            "weekly" as const,
          priority: 0.8,
        },

        ...variants.map(
          (variant) => ({
            url: `${baseUrl}/tools/${tool.slug}-${variant}`,
            lastModified:
              new Date(),
            changeFrequency:
              "weekly" as const,
            priority: 0.7,
          })
        ),
      ];
    }
  );

  return [
    {
      url: baseUrl,
      lastModified:
        new Date(),
      changeFrequency:
        "daily",
      priority: 1,
    },

    ...toolRoutes,
  ];
}