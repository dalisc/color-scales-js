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
