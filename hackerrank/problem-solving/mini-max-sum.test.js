import { test, expect } from 'vitest';
import { miniMaxSum } from './mini-max-sum';

test('Example test case 01', () => {
  expect(miniMaxSum([1, 3, 5, 7, 9])).toBe('16 24');
});
test('Test case 01', () => {
  expect(miniMaxSum([1, 2, 3, 4, 5])).toBe('10 14');
});
