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
    ]);
})
test('Unit test 02', () => {
    expect(generateGiftSets(['car'])).toEqual([
        ['car']
    ]);
})
test('Unit test 03', () => {
    expect(generateGiftSets(['apple', 'banana', 'cherry', 'date'])).toEqual([
        [
            "apple"
        ],
        [
            "banana"
        ],
        [
            "cherry"
        ],
        [
            "date"
        ],
        [
            "apple",
            "banana"
        ],
        [
            "apple",
            "cherry"
        ],
        [
            "apple",
            "date"
        ],
        [
            "banana",
            "cherry"
        ],
        [
            "banana",
            "date"
        ],
        [
            "cherry",
            "date"
        ],
        [
            "apple",
            "banana",
            "cherry"
        ],
        [
            "apple",
            "banana",
            "date"
        ],
        [
            "apple",
            "cherry",
            "date"
        ],
        [
            "banana",
            "cherry",
            "date"
        ],
        [
            "apple",
            "banana",
            "cherry",
            "date"
        ]
    ]);
})

test('Unit test 04', () => {
    expect(generateGiftSets([])).toEqual([]);
})