import { test, expect } from 'vitest';
import { calculatePrice } from './day12';

test('Unit test 01', () => {
    expect(calculatePrice('***')).toEqual(3);
})
test('Unit test 02', () => {
    expect(calculatePrice('o*')).toEqual(6);
})
test('Unit test 03', () => {
    expect(calculatePrice('*o*')).toEqual(5);
})
test('Unit test 04', () => {
    expect(calculatePrice('**o*')).toEqual(6);
})
test('Unit test 05', () => {
    expect(calculatePrice('o***')).toEqual(8);
})
test('Unit test 06', () => {
    expect(calculatePrice('*o@')).toEqual(94);
})
test('Unit test 07', () => {
    expect(calculatePrice('*#')).toEqual(49);
})
test('Unit test 08', () => {
    expect(calculatePrice('@@@')).toEqual(300);
})
test('Unit test 09', () => {
    expect(calculatePrice('#@')).toEqual(50);
})
test('Unit test 10', () => {
    expect(calculatePrice('#@Z')).toEqual(undefined);
})