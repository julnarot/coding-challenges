import { test, expect } from 'vitest';
import { prepareGifts } from './day01';

test('example test case 01', () => {
  expect(prepareGifts([3, 1, 2, 3, 4, 2, 5])).toEqual([1, 2, 3, 4, 5]);
});
test('example test case 02', () => {
  expect(prepareGifts([6, 5, 5, 5, 5])).toEqual([5, 6]);
});
test('example test case 03', () => {
  expect(prepareGifts([])).toEqual([]);
});
