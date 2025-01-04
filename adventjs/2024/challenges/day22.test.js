import { test, expect } from 'vitest';
import { generateGiftSets } from './day22';

test('Unit test 01', () => {
    expect(generateGiftSets(['car', 'doll', 'puzzle'])).toEqual([
        ['car'],
        ['doll'],
        ['puzzle'],
        ['car', 'doll'],
        ['car', 'puzzle'],
        ['doll', 'puzzle'],
        ['car', 'doll', 'puzzle']
    ])
})