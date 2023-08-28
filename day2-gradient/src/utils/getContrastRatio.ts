export function getRelativeLuminance(hex: string) {
  const r = parseInt(hex.substring(1, 3), 16) / 255;
  const g = parseInt(hex.substring(3, 5), 16) / 255;
  const b = parseInt(hex.substring(5, 7), 16) / 255;

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio(hexColor1: string, hexColor2: string = "#000000") {
  const luminance1 = getRelativeLuminance(hexColor1);
  const luminance2 = getRelativeLuminance(hexColor2);

  const brighterLuminance = Math.max(luminance1, luminance2);
  const darkerLuminance = Math.min(luminance1, luminance2);

  return (brighterLuminance + 0.05) / (darkerLuminance + 0.05);
}

export function getContrastColor(hexColor: string) {
  const luminance = getRelativeLuminance(hexColor);

  const contrastRatio = getContrastRatio(hexColor);

  console.log(`Luminance: ${luminance}`);
  console.log(`Contrast ratio: ${contrastRatio}`);

  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}
