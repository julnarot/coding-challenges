import { test, expect } from 'vitest';
import { drawRace } from './day08';

test('test case 01', () => {
    const expectedVal = `  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3`;
    expect(drawRace([0, 5, -3], 10)).toEqual(expectedVal);
});
test('test case 02', () => {
    const expectedVal = `   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4`;
    expect(drawRace([2, -1, 0, 5], 8)).toEqual(expectedVal);
});
test('test case 03', () => {
    const expectedVal = `  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3`;
    expect(drawRace([3, 7, -2], 12)).toEqual(expectedVal);
});