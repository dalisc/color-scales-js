import Color = require('./Color');

export function validateMinMaxValues(min: number, max: number) {
  if (min === max) {
    throw new Error('The minimum value cannot be equal to the maximum value.');
  } else if (min > max) {
    throw new Error('The minimum value must be less than the maximum value.');
  }
}

export function validateMinMaxColors(minColor: string, maxColor: string) {
  if (minColor.toUpperCase() === maxColor.toUpperCase()) {
    throw new Error('The minimum and maximum colors cannot be equal.');
  }
}

export function validateAlphaValue(alpha: number) {
  if (alpha < 0 || alpha > 1) {
    throw new Error('The alpha value must be between 0 and 1.');
  }
}
