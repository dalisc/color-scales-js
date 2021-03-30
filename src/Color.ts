'use strict';

import { validateAlphaValue } from './validators';
import { rgbaToHex } from './helpers';

export default class Color {
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

  toRGBString() {
    return `rgb(${Math.floor(this.r * this.a)},${Math.floor(this.g * this.a)},${Math.floor(this.b * this.a)})`;
  }

  toRGBAString() {
    return `rgba(${this.r},${this.g},${this.b},${this.a})`;
  }

  toHexString() {
    return rgbaToHex(this);
  }
}
