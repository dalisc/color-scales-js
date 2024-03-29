'use strict';

import Color from './Color';
import { validateAlphaValue, validateColorStops, validateMinMaxValues } from './validators';
import { hexToColor } from './helpers';

export default class ColorScale {
  private min: number;
  private max: number;
  private alpha: number;
  private colorStops: Color[];

  constructor(min: number, max: number, colorStops: string[], alpha: number = 1) {
    validateMinMaxValues(min, max);
    validateColorStops(colorStops);
    validateAlphaValue(alpha);

    this.min = min;
    this.max = max;
    this.alpha = alpha;
    this.colorStops = colorStops.map((colorStop) => hexToColor(colorStop, alpha));
  }

  getColor(value: number) {
    const numOfColorStops = this.colorStops.length;
    if (value < this.min) return this.colorStops[0];
    if (value > this.max) return this.colorStops[numOfColorStops - 1];

    const range = this.max - this.min;
    let weight = (value - this.min) / range;
    const colorStopIndex = Math.max(Math.ceil(weight * (numOfColorStops - 1)), 1);

    const minColor = this.colorStops[colorStopIndex - 1];
    const maxColor = this.colorStops[colorStopIndex];

    weight = weight * (numOfColorStops - 1) - (colorStopIndex - 1);

    const r = Math.floor(weight * maxColor.r + (1 - weight) * minColor.r);
    const g = Math.floor(weight * maxColor.g + (1 - weight) * minColor.g);
    const b = Math.floor(weight * maxColor.b + (1 - weight) * minColor.b);

    return new Color(r, g, b, this.alpha);
  }
}
