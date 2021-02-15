import ColorScale = require('../ColorScale');
import Color = require('../Color');

/**
 * Valid min and max combination, no alpha
 */
test('Min value should return min color (rgba string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(0).toRGBAString()).toBe('rgba(0,0,0,1)');
});

test('Max value should return min color (rgba string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(100).toRGBAString()).toBe('rgba(255,255,255,1)');
});

test('Middle value should return the correct middle color (rgba string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(50).toRGBAString()).toBe('rgba(127,127,127,1)');
});

test('Value less than min value should return min color (rgba string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(-1).toRGBAString()).toBe('rgba(0,0,0,1)');
});

test('Value greater than max value should return max color (rgba string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(101).toRGBAString()).toBe('rgba(255,255,255,1)');
});
