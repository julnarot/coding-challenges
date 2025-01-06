import { test, expect } from 'vitest';
import { execute } from './day25';

test('unit test 01', () => {
    expect(execute('+++')).toEqual(3);
})

test('unit test 02', () => {
    expect(execute('+--')).toEqual(-1);
})

test('unit test 03', () => {
    expect(execute('>+++[-]')).toEqual(0);
})

test('unit test 04', () => {
    expect(execute('>>>+{++}')).toEqual(3);
})

test('unit test 05', () => {
    expect(execute('+{[-]+}+')).toEqual(2);
})

test('unit test 06', () => {
    expect(execute('{+}{+}{+}')).toEqual(0);
})

test('unit test 07', () => {
    expect(execute('------[+]++')).toEqual(2);
})

test('unit test 08', () => {
    expect(execute('-[++{-}]+{++++}')).toEqual(5);
})

test('unit test pointers', () => {
    expect(execute('>>+{<+>}')).toEqual(2);
})
test('unit test limis', () => {
    expect(execute('')).toEqual(0);
    expect(execute('{}')).toEqual(0);
    expect(execute('[]')).toEqual(0);
    expect(execute('+{-}+')).toEqual(1);
})

test('unit test anidated', () => {
    expect(execute('[+{}]+')).toEqual(1);
})