import { test, expect } from 'vitest';
import { removeSnow } from './day16'

test('Unit test 01', () => {
    expect(removeSnow('zxxzoz')).toEqual('oz');
})
test('Unit test 02', () => {
    expect(removeSnow('abcdd')).toEqual('abc');
})
test('Unit test 03', () => {
    expect(removeSnow('zzz')).toEqual('z');
})
test('Unit test 04', () => {
    expect(removeSnow('a')).toEqual('a');
})