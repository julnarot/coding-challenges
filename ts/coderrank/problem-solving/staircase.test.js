import { test, expect } from 'vitest';
import { staircase } from './staircase';

test('Example test case 01', () => {
  expect(staircase(4)).toBe(
    `   #
  ##
 ###
####`
  );
});
test('Test case 01', () => {
  expect(staircase(6)).toBe(
    `     #
    ##
   ###
  ####
 #####
######`
  );
});
