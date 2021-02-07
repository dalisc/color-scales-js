'use strict'

function componentToHex (c) {
  var hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

function rgbToHex (r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

function hexToRgb (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

class ColorScale {
  constructor (min, max, minColor, maxColor) {
    this.min = min
    this.max = max
    this.minColor = hexToRgb(minColor)
    this.maxColor = hexToRgb(maxColor)
  }

  getColor (value) {
    if (value < min) return this.minColor
    if (value > max) return this.maxColor

    const weight = (value - this.min) / (this.max - this.min)
    const r = weight * this.maxColor.r + (1 - weight) * this.minColor.r
    const g = weight * this.maxColor.g + (1 - weight) * this.minColor.g
    const b = weight * this.maxColor.b + (1 - weight) * this.minColor.g

    return { r, g, b }
  }

  toRGBString (color) {
      return `rgb(${color.r},${color.g},${color.b},1)`;
  }

  toHexString (color) {
      return rgbToHex(color.r, color.g, color.b);
  }
}

module.exports = ColorScale
