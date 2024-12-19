import { test, expect } from 'vitest';
import { organizeShoes } from './challenge05'

test('Test case 01', () => {
    const shoes = [
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 42 }
    ];
    expect(organizeShoes(shoes)).toEqual([38, 42])
});