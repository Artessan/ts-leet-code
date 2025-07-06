import { describe, expect, test } from 'vitest';
import { twoSum } from '../../../src';

describe('twoSum', () => {
    const cases: { nums: number[]; target: number; expected: number[] }[] = [
        {
            nums: [2, 7, 11, 15],
            target: 9,
            expected: [0, 1],
        },
        {
            nums: [3, 2, 4],
            target: 6,
            expected: [1, 2],
        },
        {
            nums: [3, 3],
            target: 6,
            expected: [0, 1],
        },
    ];

    test.each(cases)('should return valid indices for %o', ({ nums, target, expected }) => {
        const result = twoSum(nums, target);
        expect(result).toEqual(expect.arrayContaining(expected));
        expect(result).toHaveLength(2); // Para asegurarse que devuelve dos índices
    });
});