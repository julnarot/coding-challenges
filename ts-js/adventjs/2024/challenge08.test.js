import { test, expect } from 'vitest';
import { drawRace } from './challenge08';

test('test case 01', () => {
    const expectedVal = `  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3`;
expect(drawRace([0, 5, -3], 10)).toEqual(expectedVal);
});