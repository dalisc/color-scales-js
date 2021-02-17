'use strict';

import { validateAlphaValue } from './validators';

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbaToHex(color: Color) {
  const r = Math.floor(color.r * color.a);
  const g = Math.floor(color.g * color.a);
  const b = Math.floor(color.b * color.a);
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

class Color {
  public r: number;
  public g: number;
  public b: number;
  public a: number;

  constructor(r: number, g: number, b: number, a: number = 1) {
    validateAlphaValue(a);

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  toRGBAString() {
    return `rgba(${this.r},${this.g},${this.b},${this.a})`;
  }

  toHexString() {
    return rgbaToHex(this);
  }
}

export = Color;
