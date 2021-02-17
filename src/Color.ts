'use strict';

import { validateAlphaValue } from './validators';

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbaToHex(color: Color) {
  const r = Math.floor(color.r * color.alpha);
  const g = Math.floor(color.g * color.alpha);
  const b = Math.floor(color.b * color.alpha);
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

class Color {
  public r: number;
  public g: number;
  public b: number;
  public alpha: number;

  constructor(r: number, g: number, b: number, alpha: number = 1) {
    validateAlphaValue(alpha);

    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = alpha;
  }

  toRGBAString() {
    return `rgba(${this.r},${this.g},${this.b},${this.alpha})`;
  }

  toHexString() {
    return rgbaToHex(this);
  }
}

export = Color;
