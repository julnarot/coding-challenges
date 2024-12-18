import { test, expect } from 'vitest';
import { birthdayCakeCandles } from './birthday-cake-candles';

test('example test case 01', () => {
  expect(birthdayCakeCandles([4, 4, 1, 3])).toEqual(2);
});
test('test case 01', () => {
  expect(birthdayCakeCandles([3, 2, 1, 3])).toEqual(2);
});
