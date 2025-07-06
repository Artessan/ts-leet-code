import { describe, expect, test } from 'vitest';
import { isPalindrome } from '../../../src';

describe('isPalindrome', () => {
    const cases: { input: number; expected: boolean }[] = [
        { input: 5, expected: true },
        { input: 121, expected: true },
        { input: 123454321, expected: true },
        { input: 0, expected: true },
        { input: 123, expected: false },
        { input: -121, expected: false },
        { input: 123456789, expected: false },
    ];

    test.each(cases)('should return $expected for input $input', ({ input, expected }) => {
        expect(isPalindrome(input)).toBe(expected);
    });
});