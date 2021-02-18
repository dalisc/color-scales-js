import ColorScale = require('../ColorScale');

/**
 * Valid min and max combination, no alpha
 */

test('Min value should return min color (hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(0).toHexString()).toBe('#000000');
});

test('Max value should return min color (hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(100).toHexString()).toBe('#ffffff');
});

test('Middle value should return the correct middle color (hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(50).toHexString()).toBe('#7f7f7f');
});

test('Value less than min value should return min color (hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(-1).toHexString()).toBe('#000000');
});

test('Value greater than max value should return max color (hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#ffffff').getColor(101).toHexString()).toBe('#ffffff');
});
