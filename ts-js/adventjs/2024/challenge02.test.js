import { test, expect } from 'vitest';
import { createFrame } from './challenge02';

test('example test case 01', () => {
    const expectedStr = `***************
* midu        *
* madeval     *
* educalvolpz *
***************`;
  expect(createFrame(['midu', 'madeval', 'educalvolpz'])).toEqual(expectedStr);
});

test('example test case 02', () => {
    const expectedStr = `********
* midu *
********`;
  expect(createFrame(['midu'])).toEqual(expectedStr);
});

test('example test case 03', () => {
    const expectedStr = `*******
* a   *
* bb  *
* ccc *
*******`;
  expect(createFrame(['a', 'bb', 'ccc'])).toEqual(expectedStr);
});