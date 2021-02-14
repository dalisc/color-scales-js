import ColorScale = require('../ColorScale');
import Color = require('../Color');

/**
 * Valid min and max combination
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

test('Min value should return min color (hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(0).toHexString()).toBe('#000000');
});

test('Max value should return min color (hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(100).toHexString()).toBe('#ffffff');
});

test('Min value should return min color (rgb string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(0).toRGBString()).toBe('rgb(0,0,0)');
});

test('Max value should return min color (rgb string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(100).toRGBString()).toBe('rgb(255,255,255)');
});

/**
 * Invalid min and max combinations
 */

test('Error thrown when min value equals max value', () => {
  expect(() => new ColorScale(0, 0, '#000000', '#ffffff')).toThrow(
    'The minimum value cannot be equal to the maximum value.',
  );
});

test('Error thrown when min value is greater than max value', () => {
  expect(() => new ColorScale(100, 0, '#000000', '#ffffff')).toThrow(
    'The minimum value must be less than the maximum value.',
  );
});

test('Error thrown when min color is equal to max color', () => {
  expect(() => new ColorScale(0, 100, '#E4E4E4', '#e4e4e4')).toThrow('The minimum and maximum colors cannot be equal.');
});
