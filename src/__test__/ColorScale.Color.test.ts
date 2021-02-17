import ColorScale = require('../ColorScale');
import Color = require('../Color');

/**
 * Valid min and max combination, no alpha
 */

test('Min value should return min color (Color object)', () => {
  const minColor = new ColorScale(0, 100, '#000000', '#ffffff').getColor(0);
  const expectedColor = new Color(0, 0, 0);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Max value should return max color (Color object)', () => {
  const minColor = new ColorScale(0, 100, '#000000', '#ffffff').getColor(100);
  const expectedColor = new Color(255, 255, 255);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Middle value should return the correct middle color (Color object)', () => {
  const minColor = new ColorScale(0, 100, '#000000', '#ffffff').getColor(50);
  const expectedColor = new Color(127, 127, 127);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Value less than min value should return min color (Color object)', () => {
  const minColor = new ColorScale(0, 100, '#000000', '#ffffff').getColor(-1);
  const expectedColor = new Color(0, 0, 0);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Value greater than max value should return max color (Color object)', () => {
  const minColor = new ColorScale(0, 100, '#000000', '#ffffff').getColor(101);
  const expectedColor = new Color(255, 255, 255);
  expect(minColor).toStrictEqual(expectedColor);
});


/**
 * Color to RGBA string
 */
test('Color object with no alpha value should convert to correct RGBA string with alpha value of 1', () => {
  const color = new Color(81,12,33);
  const expectedRGBAString = 'rgba(81,12,33,1)';
  expect(color.toRGBAString()).toBe(expectedRGBAString);
})

test('Color object with specified alpha value should convert to correct RGBA string', () => {
  const color = new Color(81,12,33, 0.7);
  const expectedRGBAString = 'rgba(81,12,33,0.7)';
  expect(color.toRGBAString()).toBe(expectedRGBAString);
})

/**
 * Color to Hex string
 */
test('Color object with no alpha value should convert to correct RGBA string with alpha value of 1', () => {
  const color = new Color(81,12,33);
  const expectedRGBAString = '#510c21';
  expect(color.toHexString()).toBe(expectedRGBAString);
})

test('Color object with specified alpha value should convert to correct RGBA string', () => {
  const color = new Color(81,12,33, 0.7);
  const expectedRGBAString = '#380817';
  expect(color.toHexString()).toBe(expectedRGBAString);
})