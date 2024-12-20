import { expect, test } from 'vitest';
import { inBox } from './challenge06';

test('unit case 01', () => {
    expect(inBox([
        "###",
        "#*#",
        "###"
      ])).toBeTruthy();
})
test('unit case 02', () => {
    expect(inBox([
        "####",
        "#* #",
        "#  #",
        "####"
      ])).toBeTruthy();
})
test('unit case 03', () => {
    expect(inBox([
        "#####",
        "#   #",
        "#  #*",
        "#####"
      ])).toBeFalsy();
})
test('unit case 04', () => {
    expect(inBox([
        "#####",
        "#   #",
        "#   #",
        "#   #",
        "#####"
      ])).toBeFalsy();
})
test('unit case 05', () => {
    expect(inBox([
        '###',
        '###',
        '#*#'
        ])).toBeFalsy();
})
test('unit case 06', () => {
    expect(inBox([
        "#*#",
        "###",
        "###"
      ])).toBeFalsy();
})


