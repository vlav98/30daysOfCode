import { getRandomHexaColor } from "./getRandomHexaColor";

export function getRandomGradient() {
  const hex1 = getRandomHexaColor();
  const hex2 = getRandomHexaColor();

  const degree = Math.random() * (360 - 0) + 0;

  const linearGradientValue = `linear-gradient(${degree}deg, ${hex1}, ${hex2})`;

  return { linearGradientValue, hex1, hex2 };
}
