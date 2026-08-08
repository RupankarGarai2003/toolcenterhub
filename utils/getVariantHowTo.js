
import { getVariantName } from "./toolVariants";
import { getToolCategory } from "./toolCategory";

export function getVariantHowToTitle(toolName, slug, toolSlug = "") {
  const variant = getVariantName(slug, toolSlug);

  if (!variant) {
    return `How to Use ${toolName} Online`;
  }

  const label = variant
    .replace(/^for-/, "")
    .replace(/^under-/, "Under ")
    .replace(/^to-/, "To ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  const { noun } = getToolCategory(toolName);

  // File size pages
  if (
    variant.startsWith("under-") ||
    variant.startsWith("to-") ||
    /^\d+(kb|mb)$/.test(variant)
  ) {
    return `How to Get ${toolName} ${label} Online`;
  }

  // Social media pages
  if (variant.startsWith("for-")) {
    return `How to Use ${toolName} for ${label}`;
  }

  // Document pages
  if (
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
    return `How to Create ${label} Using ${toolName}`;
  }

  // Logo / Banner / Thumbnail
  if (
    ["logo", "banner", "thumbnail"].includes(variant)
  ) {
    return `How to Resize ${label} Images`;
  }

  // Default
  return `How to Use ${toolName} ${label} Online`;
}
