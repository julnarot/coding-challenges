import { test, expect } from 'vitest';
import { detectBombs } from './day17';

test('Unit test 01', () => {
    expect(detectBombs([
        [true, false, false],
        [false, true, false],
        [false, false, false]
    ])).toEqual([
        [1, 2, 1],
        [2, 1, 1],
        [1, 1, 1]
    ]);
})

test('Unit test 02', () => {
    expect(detectBombs([
        [true, false],
        [false, false]
    ])).toEqual([
        [0, 1],
        [1, 1]
    ]);
})

test('Unit test 03', () => {
    expect(detectBombs([
        [true, true],
        [false, false],
        [true, true]
    ])).toEqual([
        [1, 1],
        [4, 4],
        [1, 1]
    ]);
})