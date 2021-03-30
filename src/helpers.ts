'use strict';

import Color from './Color';

export function hexToRgb(hex: string, alpha: number) {
  if (isValid3DigitHexColor(hex)) {
    hex = convertTo6DigitHexColor(hex);
  }

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return new Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), alpha);
  } else {
    throw new Error(`${hex} is not a valid hex color.`);
  }
}

export function isValidHexColor(colorString: string) {
  return isValid3DigitHexColor(colorString) || isValid6DigitHexColor(colorString);
}

function isValid3DigitHexColor(colorString: string) {
  const hexColorRegex = /^#(?:[0-9a-fA-F]{3})$/
  return colorString.match(hexColorRegex);
}

function isValid6DigitHexColor(colorString: string) {
  const hexColorRegex = /^#(?:[0-9a-fA-F]{6})$/
  return colorString.match(hexColorRegex);
}

function convertTo6DigitHexColor(threeDigitHex: string) {
  return threeDigitHex.substring(1).split('').map(function (char) {
    return char + char;
  }).join('');
}


function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export function rgbaToHex(color: Color) {
  const r = Math.floor(color.r * color.a);
  const g = Math.floor(color.g * color.a);
  const b = Math.floor(color.b * color.a);
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}