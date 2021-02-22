import ColorScale = require('../ColorScale');

/**
 * Invalid min and max combinations
 */
test('Error thrown when min value equals max value', () => {
  expect(() => new ColorScale(0, 0, ['#000000', '#ffffff'])).toThrow(
    'The minimum value cannot be equal to the maximum value.',
  );
});

test('Error thrown when min value is greater than max value', () => {
  expect(() => new ColorScale(100, 0, ['#000000', '#ffffff'])).toThrow(
    'The minimum value must be less than the maximum value.',
  );
});

test('Error thrown when only no colors are passed in', () => {
  expect(() => new ColorScale(0, 100, [])).toThrow('At least two colors must be provided.');
});

test('Error thrown when only one color is passed in', () => {
  expect(() => new ColorScale(0, 100, ['#E4E4E4'])).toThrow('At least two colors must be provided.');
});

/**
 * Alpha input
 */
test('Error thrown when alpha value is less than 0', () => {
  expect(() => new ColorScale(0, 100, ['#E4E4E4', '#000000', '#ffffff'], -0.6)).toThrow(
    'The alpha value must be between 0 and 1.',
  );
});

test('Error thrown when alpha value is more than 1', () => {
  expect(() => new ColorScale(0, 100, ['#E4E4E4', '#000000'], 2)).toThrow('The alpha value must be between 0 and 1.');
});

test('No error thrown when alpha value is between 0 and 1', () => {
  expect(() => new ColorScale(0, 100, ['#E4E4E4', '#000000'], 0.7)).not.toThrow();
});

/**
 * Hex color input
 */
test('Error thrown when one of the hex colors is invalid with extra character', () => {
  expect(() => new ColorScale(0, 100, ['#E4E4E4', '#E4E4E44'])).toThrow('#E4E4E44 is not a valid hex value.');
});

test('Error thrown when one of the hex colors is invalid with fewer than six characters', () => {
  expect(() => new ColorScale(0, 100, ['#E4E4E4', '#E44'])).toThrow('#E44 is not a valid hex value.');
});

test('Error thrown when one of the hex colors is invalid with empty string as color input', () => {
  expect(() => new ColorScale(0, 100, ['#E4E4E4', ''])).toThrow(' is not a valid hex value.');
});

test('Error thrown when one of the hex colors is invalid with characters that are not hexadecimal', () => {
  expect(() => new ColorScale(0, 100, ['#E4E4E4', '#E4E4EK'])).toThrow('#E4E4EK is not a valid hex value.');
});
