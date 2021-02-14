// const colorScale = require("./colorScale");

// module.exports = colorScale;

'use strict';

interface Color {
  r: number;
  g: number;
  b: number;
}

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(color: Color) {
  return '#' + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: 0,
        g: 0,
        b: 0,
      };
}

class ColorScale {
  private min: number;
  private max: number;
  private minColor: Color;
  private maxColor: Color;

  constructor(min: number, max: number, minColor: string, maxColor: string) {
    this.min = min;
    this.max = max;
    this.minColor = hexToRgb(minColor);
    this.maxColor = hexToRgb(maxColor);
  }

  getColor(value: number) {
    if (value < this.min) return this.minColor;
    if (value > this.max) return this.maxColor;

    const weight = (value - this.min) / (this.max - this.min);
    const r = weight * this.maxColor.r + (1 - weight) * this.minColor.r;
    const g = weight * this.maxColor.g + (1 - weight) * this.minColor.g;
    const b = weight * this.maxColor.b + (1 - weight) * this.minColor.g;

    return { r, g, b };
  }

  toRGBString(color: Color) {
    return `rgb(${color.r},${color.g},${color.b},1)`;
  }

  toHexString(color: Color) {
    return rgbToHex(color);
  }
}

export = ColorScale;
