import ColorScale = require('../ColorScale');

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

/**
 * Alpha input
 */
test('Error thrown when alpha value is less than 0', () => {
  expect(() => new ColorScale(0, 100, '#E4E4E4', '#000000', -0.6)).toThrow('The alpha value must be between 0 and 1.');
});

test('Error thrown when alpha value is more than 1', () => {
  expect(() => new ColorScale(0, 100, '#E4E4E4', '#000000', 2)).toThrow('The alpha value must be between 0 and 1.');
});

test('No error thrown when alpha value is between 0 and 1', () => {
  expect(() => new ColorScale(0, 100, '#E4E4E4', '#000000', 0.7)).not.toThrow();
});
