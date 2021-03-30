import Color from '../Color';
import { hexToColor } from '../helpers';

test('Error thrown when min value equals max value', () => {
    expect(() => hexToColor("#RTT", 0)).toThrow(
        '#RTT is not a valid hex color.',
    );
});

test('Correct color object converted from 6 digit hex value', () => {
    expect(hexToColor("#ffe3e8", 0.5).toRGBAString()).toBe('rgba(255,227,232,0.5)');
});

test('Correct color object converted from 3 digit hex value', () => {
    expect(hexToColor("#2e4", 0.5).toRGBAString()).toBe('rgba(34,238,68,0.5)');
});