'use strict';

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(color: Color) {
  return '#' + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}

class Color {
  public r: number;
  public g: number;
  public b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  toRGBString() {
    return `rgb(${this.r},${this.g},${this.b})`;
  }

  toHexString() {
    return rgbToHex(this);
  }
}

export = Color;
