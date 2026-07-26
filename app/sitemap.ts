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
    "for-youtube", // GSC: 74 impressions, real demand

    "20kb", // GSC: 78 impressions
    "under-20kb",
    "under-50kb",
    "under-100kb",
    "under-200kb",
    "under-500kb",
    "under-1mb",
    "1mb", // GSC: 161 impressions

    "profilephoto", // GSC: 11 impressions, position 8.3

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

    "pan-card", // GSC: position 5.0, real clicks already
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

    "free", // GSC: 63 impressions
    "under-50kb", // GSC: 21 impressions, has clicks
    "for-youtube", // GSC: early position 1.0
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

    "aadhaar-card", // GSC: real demand, position 6.0
  ],

  /* WORD TO PDF */
  "word-to-pdf": [
    "docx-to-pdf",
    "maker",

    "aadhaar-card", // GSC: real demand, position 6.0
  ],

  /* JPG TO PDF */
  "jpg-to-pdf": [
    "multiple-images",

    "200kb", // GSC: 45 impressions, position 44.0
  ],

  /* PDF MERGER */
  "pdf-merger": [
    "combine-pdf-files",
  ],

  /* PDF SPLITTER */
  "pdf-splitter": [
    "extract-pages",
    "split-large-pdf",

    "under-50kb", // GSC: 11 impressions, position 10.5
  ],

  /* PDF TO JPG */
  "pdf-to-jpg": [
    "high-quality",
    "extract-images",
    "100kb",

    "aadhaar", // GSC: 10 impressions, position 9.7
    "examform", // GSC: position 10.0
    "under-20kb", // GSC: position 3.0
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

    "under-150kb", // GSC: 41 impressions, position 78.9
  ],

  /* JSON VALIDATOR */
  "json-validator": [
    "and-fixer",
    "with-schema",
    "validate-json",

    "and-beautifier", // GSC: position 6.5
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

    "twitter", // GSC: 35 impressions, position 30.8
  ],

  /* HTML MINIFIER */
  "html-minifier": [
    "compress-html",

    "aadhaar", // GSC: 14 impressions, position 10.4
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

    "under-5mb", // GSC: 425 impressions — highest of any variant, real demand
    "for-youtube", // GSC: position 11.0
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