import ColorScale = require('../ColorScale');
import Color = require('../Color');

test('Minimum value should return minimum color (Color object)', () => {
  const minColor = new ColorScale(0, 100, '#000000', '#ffffff').getColor(0);
  const expectedColor = new Color(0, 0, 0);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Maximum value should return maximum color (Color object)', () => {
  const minColor = new ColorScale(0, 100, '#000000', '#ffffff').getColor(100);
  const expectedColor = new Color(255, 255, 255);
  expect(minColor).toStrictEqual(expectedColor);
});

test('Minimum value should return minimum color (hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(0).toHexString()).toBe('#000000');
});

test('Maximum value should return minimum color (hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(100).toHexString()).toBe('#ffffff');
});

test('Minimum value should return minimum color (rgb string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(0).toRGBString()).toBe('rgb(0,0,0)');
});

test('Maximum value should return minimum color (rgb string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(100).toRGBString()).toBe('rgb(255,255,255)');
});
