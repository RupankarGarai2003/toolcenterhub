/* Central place to detect what kind of tool this is,
   so generated copy (FAQ, HowTo, schema) never says
   "resize image" on a JSON/password/PDF tool. */

export function getToolCategory(toolName = "") {
  const n = toolName.toLowerCase();

  if (/(image|photo|resize|crop|jpg|png|webp)/.test(n) && !/pdf/.test(n)) {
    return {
      category: "image",
      formats: "JPG, JPEG, PNG, and WEBP",
      verb: "resize, compress, or convert",
      noun: "image",
    };
  }

  if (/pdf|word|docx/.test(n)) {
    return {
      category: "document",
      formats: "PDF and Word (DOCX)",
      verb: "convert, merge, split, or process",
      noun: "document",
    };
  }

  if (/json/.test(n)) {
    return {
      category: "json",
      formats: "JSON",
      verb: "format, validate, or beautify",
      noun: "JSON data",
    };
  }

  if (/base64|url|html|css|js|minifier|encoder|decoder/.test(n)) {
    return {
      category: "dev",
      formats: "text and code",
      verb: "encode, decode, or minify",
      noun: "code",
    };
  }

  if (/(grammar|translat|speech|voice|paraphrase|summar)/.test(n)) {
    return {
      category: "text",
      formats: "your text",
      verb: "check, translate, or convert",
      noun: "text",
    };
  }

  if (/(calculator|converter|emi|gpa|gst|tax|interest|sip|mortgage|bmi|bmr|calorie|tip|discount|margin|break-even|age|percentage)/.test(n)) {
    return {
      category: "calculator",
      formats: "your numbers",
      verb: "calculate",
      noun: "values",
    };
  }

  return {
    category: "general",
    formats: "your uploaded file",
    verb: "process",
    noun: "file",
  };
}
