import { test, expect } from 'vitest';
import { plusMinus } from './plus-minus';

test('Example Test case 01', () => {
  expect(plusMinus([1, 1, 0, -1, -1])).toEqual([0.4, 0.4, 0.2]);
});
test('Test case 01', () => {
  expect(plusMinus([-4, 3, -9, 0, 4, 1])).toEqual([
    0.5, 0.3333333333333333, 0.16666666666666666,
  ]);
});
