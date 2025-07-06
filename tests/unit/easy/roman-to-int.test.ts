import { describe, expect, test } from 'vitest';
import { romanToInt } from '../../../src';

describe('romanToInt', () => {
    const cases: { input: string; expected: number }[] = [
        { input: "III", expected: 3 },
        { input: "LVIII", expected: 58 },
        { input: "MCMXCIV", expected: 1994 },
        { input: "IX", expected: 9 },
        { input: "XL", expected: 40 },
        { input: "CD", expected: 400 },
        { input: "MMMCMXCIX", expected: 3999 }, // maximum valid input
        { input: "CMXCIV", expected: 994 },
        { input: "D", expected: 500 }, // single symbol
        { input: "M", expected: 1000 }, // single symbol
    ];

    test.each(cases)('should convert "$input" to $expected', ({ input, expected }) => {
        expect(romanToInt(input)).toBe(expected);
    });
});