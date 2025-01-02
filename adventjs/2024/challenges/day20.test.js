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
test('Unit test 02', () => {
    expect(fixGiftList(
        ['puzzle', 'car'],
        ['puzzle', 'car', 'ball']
    )).toEqual({
        missing: { ball: 1 },
        extra: {}
    })
})
test('Unit test 03', () => {
    expect(fixGiftList(
        ['car', 'puzzle', 'car'],
        ['puzzle', 'car', 'doll']
    )).toEqual({
        missing: { doll: 1 },
        extra: { car: 1 }
    })
})

test('Unit test 04', () => {
    expect(fixGiftList(
        ['train', 'book', 'kite'],
        ['train', 'kite', 'book', 'kite']
    )).toEqual({
        missing: {
            kite: 1
        },
        extra: {}
    })
})
test('Unit test 05', () => {
    expect(fixGiftList(
        ['bear', 'car'],
        ['bear', 'car', 'car']
    )).toEqual({
        missing: {
            car: 1
        },
        extra: {}
    })
})

test('Unit test 06', () => {
    expect(fixGiftList(
        [],
        ['bear', 'car', 'car']
    )).toEqual({
        missing: {
            car: 2,
            bear: 1
        },
        extra: {}
    })
})
test('Unit test 07', () => {
    expect(fixGiftList(
        ['puzzle', 'puzzle', 'car'],
        ['puzzle', 'car']
    )).toEqual({
        missing: {},
        extra: {
            puzzle: 1
        }
    })
})
test('Unit test 08', () => {
    expect(fixGiftList(
        ['car'],
        ['car', 'puzzle', 'ball']
    )).toEqual({
        missing: {
            puzzle: 1,
            ball: 1
        },
        extra: {}
    })
})
test('Unit test 09', () => {
    expect(fixGiftList(
        ['bear', 'bear', 'car'],
        ['bear', 'bear', 'car'],
    )).toEqual({
        missing: {},
        extra: {}
    })
})

