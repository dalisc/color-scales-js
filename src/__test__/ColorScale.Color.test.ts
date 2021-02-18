import ColorScale = require('../ColorScale');
import Color = require('../Color');

/**
 * Valid min and max combination, 2 colors, no alpha
 */
test('Min value should return min color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff']).getColor(0);
  const expectedColor = new Color(0, 0, 0);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Max value should return max color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff']).getColor(100);
  const expectedColor = new Color(255, 255, 255);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Middle value should return the correct middle color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff']).getColor(50);
  const expectedColor = new Color(127, 127, 127);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Value less than min value should return min color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff']).getColor(-1);
  const expectedColor = new Color(0, 0, 0);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Value greater than max value should return max color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff']).getColor(101);
  const expectedColor = new Color(255, 255, 255);
  expect(minColor).toStrictEqual(expectedColor);
});

/**
 * Valid min and max combination, 3 colors, no alpha
 */
test('Min value should return min color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff', 'ff0000']).getColor(0);
  const expectedColor = new Color(0, 0, 0);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Max value should return max color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff', 'ff0000']).getColor(100);
  const expectedColor = new Color(255, 0, 0);
  expect(minColor).toStrictEqual(expectedColor);
});

test('First segment value should return the correct color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff', 'ff0000']).getColor(25);
  const expectedColor = new Color(127, 127, 127);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Middle value should return the correct middle color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff', 'ff0000']).getColor(50);
  const expectedColor = new Color(255, 255, 255);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Second segment value should return the correct color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff', 'ff0000']).getColor(75);
  const expectedColor = new Color(255, 127, 127);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Value less than min value should return min color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff', 'ff0000']).getColor(-1);
  const expectedColor = new Color(0, 0, 0);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Value greater than max value should return max color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff', 'ff0000']).getColor(101);
  const expectedColor = new Color(255, 0, 0);
  expect(minColor).toStrictEqual(expectedColor);
});

/**
 * Valid min and max combination, 4 colors, no alpha
 */

test('First segment value should return the correct color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff', '#ff0000', '#0000ff']).getColor(20);
  const expectedColor = new Color(153, 153, 153);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Second segment value should return the correct color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff', '#ff0000', '#0000ff']).getColor(50);
  const expectedColor = new Color(255, 127, 127);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Third segment value should return the correct color (Color object)', () => {
  const minColor = new ColorScale(0, 100, ['#000000', '#ffffff', '#ff0000', '#0000ff']).getColor(90);
  const expectedColor = new Color(76, 0, 178);
  expect(minColor).toStrictEqual(expectedColor);
});

/**
 * Color to RGB string
 */
test('Color object with no alpha value should convert to correct RGB string', () => {
  const color = new Color(81, 12, 33);
  const expectedRGBString = 'rgb(81,12,33)';
  expect(color.toRGBString()).toBe(expectedRGBString);
});

test('Color object with specified alpha value should convert to correct RGB string', () => {
  const color = new Color(81, 12, 33, 0.7);
  const expectedRGBString = 'rgb(56,8,23)';
  expect(color.toRGBString()).toBe(expectedRGBString);
});

/**
 * Color to RGBA string
 */
test('Color object with no alpha value should convert to correct RGBA string with alpha value of 1', () => {
  const color = new Color(81, 12, 33);
  const expectedRGBAString = 'rgba(81,12,33,1)';
  expect(color.toRGBAString()).toBe(expectedRGBAString);
});

test('Color object with specified alpha value should convert to correct RGBA string', () => {
  const color = new Color(81, 12, 33, 0.7);
  const expectedRGBAString = 'rgba(81,12,33,0.7)';
  expect(color.toRGBAString()).toBe(expectedRGBAString);
});

/**
 * Color to Hex string
 */
test('Color object with no alpha value should convert to correct hex string with alpha value of 1', () => {
  const color = new Color(81, 12, 33);
  const expectedRGBAString = '#510c21';
  expect(color.toHexString()).toBe(expectedRGBAString);
});

test('Color object with specified alpha value should convert to correct hex string', () => {
  const color = new Color(81, 12, 33, 0.7);
  const expectedRGBAString = '#380817';
  expect(color.toHexString()).toBe(expectedRGBAString);
});

/**
 * Alpha input
 */
test('Error thrown when alpha value is less than 0', () => {
  expect(() => new Color(12, 123, 4, -0.6)).toThrow('The alpha value must be between 0 and 1.');
});

test('Error thrown when alpha value is more than 1', () => {
  expect(() => new Color(12, 123, 4, 2)).toThrow('The alpha value must be between 0 and 1.');
});

test('No error thrown when alpha value is between 0 and 1', () => {
  expect(() => new Color(12, 123, 4, 0.7)).not.toThrow();
});
