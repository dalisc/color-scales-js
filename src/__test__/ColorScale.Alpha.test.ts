import ColorScale = require('../ColorScale');
import Color = require('../Color');

/**
 * Valid min and max combination, varying alpha
 */

 /// min value
test('Zero alpha should return white color with min value(hex string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#ffffff', 0).getColor(0).toHexString()).toBe('#000000');
});

test('Middle alpha should return correct color with min value(hex string)', () => {
  expect(new ColorScale(0, 100, '#ff0000', '#7f7f7f', 0.5).getColor(0).toHexString()).toBe('#7f0000');
});

test('Max alpha should return min color with min value(hex string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#000000', 1).getColor(0).toHexString()).toBe('#7f7f7f');
});

test('Zero alpha should return white color with min value(rgba string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#ffffff', 0).getColor(0).toRGBAString()).toBe('rgba(127,127,127,0)');
});

test('Middle alpha should return correct color with min value(rgba string)', () => {
  expect(new ColorScale(0, 100, '#ff0000', '#7f7f7f', 0.5).getColor(0).toRGBAString()).toBe('rgba(255,0,0,0.5)');
});

test('Max alpha should return min color with min value(rgba string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#000000', 1).getColor(0).toRGBAString()).toBe('rgba(127,127,127,1)');
});

/// max value
test('Zero alpha should return white color with max value(hex string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#ffffff', 0).getColor(0).toHexString()).toBe('#000000');
});

test('Middle alpha should return correct color with max value(hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#7f7f7f', 0.5).getColor(100).toHexString()).toBe('#3f3f3f');
});

test('Max alpha should return max color with max value(hex string)', () => {
  expect(new ColorScale(0, 100, '#ffffff', '#000000', 1).getColor(100).toHexString()).toBe('#000000');
});

test('Zero alpha should return white color with max value(rgba string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#ffffff', 0).getColor(100).toRGBAString()).toBe('rgba(255,255,255,0)');
});

test('Middle alpha should return correct color with max value(rgba string)', () => {
  expect(new ColorScale(0, 100, '#ff0000', '#7f7f7f', 0.5).getColor(100).toRGBAString()).toBe('rgba(127,127,127,0.5)');
});

test('Max alpha should return max color with max value(rgba string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#5f5f5f', 1).getColor(100).toRGBAString()).toBe('rgba(95,95,95,1)');
});


/// middle value
test('Zero alpha should return white color with middle value(hex string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#ffffff', 0).getColor(50).toHexString()).toBe('#000000');
});

test('Middle alpha should return correct color with middle value(hex string)', () => {
  expect(new ColorScale(0, 100, '#000000', '#0000ff', 0.5).getColor(50).toHexString()).toBe('#00003f');
});

test('Max alpha should return correct color with middle value(hex string)', () => {
  expect(new ColorScale(0, 100, '#ffffff', '#000000', 1).getColor(50).toHexString()).toBe('#7f7f7f');
});

test('Zero alpha should return white color with middle value(rgba string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#ffffff', 0).getColor(50).toRGBAString()).toBe('rgba(191,191,191,0)');
});

test('Middle alpha should return correct color with middle value(rgba string)', () => {
  expect(new ColorScale(0, 100, '#ff0000', '#7f7f7f', 0.5).getColor(50).toRGBAString()).toBe('rgba(191,63,63,0.5)');
});

test('Max alpha should return max color with middle value(rgba string)', () => {
  expect(new ColorScale(0, 100, '#7f7f7f', '#5f5f5f', 1).getColor(50).toRGBAString()).toBe('rgba(111,111,111,1)');
});

