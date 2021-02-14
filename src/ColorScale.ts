import Color = require('./Color');

('use strict');

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

    return new Color(r, g, b);
  }
}

export = ColorScale;
