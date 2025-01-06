import { test, expect } from 'vitest';
import { treeHeight } from './day21';

test("Unit test 01", () => {
    const tree = {
        value: '🎁',
        left: {
            value: '🎄',
            left: {
                value: '⭐',
                left: null,
                right: null
            },
            right: {
                value: '🎅',
                left: null,
                right: null
            }
        },
        right: {
            value: '❄️',
            left: null,
            right: {
                value: '🦌',
                left: null,
                right: null
            }
        }
    };
    expect(treeHeight(tree)).toEqual(3)
})

test("Unit test 02", () => {
    const tree = {
        value: '🎁',
        left: null,
        right: null
      };
    expect(treeHeight(tree)).toEqual(1)
})

test("Unit test 03", () => {
    const tree = {
        value: '🎁',
        left: {
          value: '🎄',
          left: null,
          right: null
        },
        right: {
          value: '❄️',
          left: null,
          right: null
        }
      };
    expect(treeHeight(tree)).toEqual(2)
})

test("Unit test 04", () => {
    const tree = {
        value: '🎁',
        left: {
          value: '🎄',
          left: {
            value: '⭐',
            left: null,
            right: null
          },
          right: null
        },
        right: {
          value: '❄️',
          left: null,
          right: null
        }
      };
    expect(treeHeight(tree)).toEqual(3)
})

test("Unit test 05", () => {
    const tree = {
        value: '🎁',
        left: {
          value: '🎄',
          left: {
            value: '⭐',
            left: {
              value: '🎅',
              left: null,
              right: null
            },
            right: null
          },
          right: null
        },
        right: null
      };
    expect(treeHeight(tree)).toEqual(4)
})

test("Unit test 06", () => {
    expect(treeHeight(null)).toEqual(0)
})