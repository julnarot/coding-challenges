import { expect, test } from 'vitest';
import { timeConversion } from './time-convertion';
test('Case 0', () => {
  expect(timeConversion('07:05:45PM')).toBe('19:05:45');
});
