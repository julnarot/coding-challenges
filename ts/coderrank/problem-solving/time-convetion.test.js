import { expect, test } from 'vitest';
import { timeConversion } from './time-convertion';
test('Test Case 1 Example ', () => {
  expect(timeConversion('12:01:00PM')).toBe('12:01:00');
});
test('Test Case 2 Example', () => {
  expect(timeConversion('12:01:00AM')).toBe('00:01:00');
});
test('Test Case 0', () => {
  expect(timeConversion('07:05:45PM')).toBe('19:05:45');
});
test('Case 1', () => {
  expect(timeConversion('11:01:00AM')).toBe('11:01:00');
});
test('Case 2', () => {
  expect(timeConversion('01:01:00AM')).toBe('01:01:00');
});
