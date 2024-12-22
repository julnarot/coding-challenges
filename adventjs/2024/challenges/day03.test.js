import { test, expect } from 'vitest';
import { organizeInventory } from './day03'
test('Test case 01', () => {
    const inventory = [
        { name: 'doll', quantity: 5, category: 'toys' },
        { name: 'car', quantity: 3, category: 'toys' },
        { name: 'ball', quantity: 2, category: 'sports' },
        { name: 'car', quantity: 2, category: 'toys' },
        { name: 'racket', quantity: 4, category: 'sports' }
    ];
    const expectResult = {
        toys: {
            doll: 5,
            car: 5
        },
        sports: {
            ball: 2,
            racket: 4
        }
    }
    expect(organizeInventory(inventory)).toEqual(expectResult);
});
test('Test case 02', () => {
    const inventory = [
        { name: 'book', quantity: 10, category: 'education' },
        { name: 'book', quantity: 5, category: 'education' },
        { name: 'paint', quantity: 3, category: 'art' }
    ];
    const expectResult = {
        education: {
            book: 15
        },
        art: {
            paint: 3
        }
    }
    expect(organizeInventory(inventory)).toEqual(expectResult);
});
