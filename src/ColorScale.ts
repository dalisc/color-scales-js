'use strict';

import Color = require('./Color');
import { validateAlphaValue, validateMinMaxColors, validateMinMaxValues } from './validators';

function hexToRgb(hex: string, alpha: number) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? new Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), alpha)
    : new Color(0, 0, 0, alpha);
}

class ColorScale {
  private min: number;
  private max: number;
  private alpha: number;
  private minColor: Color;
  private maxColor: Color;

  constructor(min: number, max: number, minColor: string, maxColor: string, alpha: number = 1) {
    validateMinMaxValues(min, max);
    validateMinMaxColors(minColor, maxColor);
    validateAlphaValue(alpha);

    this.min = min;
    this.max = max;
    this.alpha = alpha;
    this.minColor = hexToRgb(minColor, alpha);
    this.maxColor = hexToRgb(maxColor, alpha);
  }

  getColor(value: number) {
    if (value < this.min) return this.minColor;
    if (value > this.max) return this.maxColor;

    const weight = (value - this.min) / (this.max - this.min);
    const r = Math.floor(weight * this.maxColor.r + (1 - weight) * this.minColor.r);
    const g = Math.floor(weight * this.maxColor.g + (1 - weight) * this.minColor.g);
    const b = Math.floor(weight * this.maxColor.b + (1 - weight) * this.minColor.b);

    return new Color(r, g, b, this.alpha);
  }
}

export = ColorScale;
