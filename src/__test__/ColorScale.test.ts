import ColorScale = require('../ColorScale');
import Color = require('../Color');

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
