import ColorScale = require('../ColorScale');
import Color = require('../Color');

/**
 * Valid min and max combination, varying alpha
 */

test('Zero alpha should return white color with min value(hex string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#ffffff', 0).getColor(0).toHexString()).toBe('#000000');
});

test('Middle alpha should return correct color with min value(hex string)', () => {
  expect(new ColorScale(0, 100, '#ff0000', '#7f7f7f', 0.5).getColor(0).toHexString()).toBe('#7f0000');
});

test('Max alpha should return min color with min value(hex string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#000000', 1).getColor(0).toHexString()).toBe('#7f7f7f');
});

test('Zero alpha should return white color with max value(hex string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#ffffff', 0).getColor(0).toHexString()).toBe('#000000');
});

test('Middle alpha should return correct color with max value(hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#7f7f7f', 0.5).getColor(100).toHexString()).toBe('#3f3f3f');
});

test('Max alpha should return max color with max value(hex string)', () => {
  expect(new ColorScale(0, 100, '#ffffff', '#000000', 1).getColor(100).toHexString()).toBe('#000000');
});
