'use strict';

import Color = require('./Color');

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? new Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16))
    : new Color(0, 0, 0);
}

class ColorScale {
  private min: number;
  private max: number;
  private minColor: Color;
  private maxColor: Color;

  constructor(min: number, max: number, minColor: string, maxColor: string) {
    if (min === max) {
      throw new Error('The minimum value cannot be equal to the maximum value.');
    } else if (min > max) {
      throw new Error('The minimum value must be less than the maximum value.');
    }

    if (minColor.toUpperCase() === maxColor.toUpperCase()) {
      throw new Error('The minimum and maximum colors cannot be equal.');
    }

    this.min = min;
    this.max = max;
    this.minColor = hexToRgb(minColor);
    this.maxColor = hexToRgb(maxColor);
  }

  getColor(value: number) {
    if (value < this.min) return this.minColor;
    if (value > this.max) return this.maxColor;

    const weight = (value - this.min) / (this.max - this.min);
    const r = Math.floor(weight * this.maxColor.r + (1 - weight) * this.minColor.r);
    const g = Math.floor(weight * this.maxColor.g + (1 - weight) * this.minColor.g);
    const b = Math.floor(weight * this.maxColor.b + (1 - weight) * this.minColor.b);

    return new Color(r, g, b);
  }
}

export = ColorScale;
