

import { test, expect } from 'vitest';
import { findMissingNumbers } from './day23';

test('Unit test 01', () => {
    expect(findMissingNumbers([1, 2, 4, 6])).toEqual([3, 5]);
})

test('Unit test 02', () => {
    expect(findMissingNumbers([4,8,7,2])).toEqual([1,3, 5,6]);
})

test('Unit test 03', () => {
    expect(findMissingNumbers([3,2,1,1])).toEqual([]);
})

test('Unit test 04', () => {
    expect(findMissingNumbers([5,5,5,3,3,2,1])).toEqual([4]);
})

test('Unit test 05', () => {
    expect(findMissingNumbers([1,2,3,4,5])).toEqual([]);
})