import { test, expect } from 'vitest';
import { fixGiftList } from './day20'

test('Unit test 01', () => {
    expect(fixGiftList(
        ['puzzle', 'car', 'doll', 'car'],
        ['car', 'puzzle', 'doll', 'ball']
    )).toEqual({
        missing: { ball: 1 },
        extra: { car: 1 }
    })
})