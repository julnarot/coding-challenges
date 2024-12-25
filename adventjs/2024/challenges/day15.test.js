import { test, expect } from 'vitest';
import { drawTable } from './day15';

test('unit test 01', () => {
    const data = [
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' },
        { name: 'Charlie', city: 'New York' }
    ];
    const expectVal = `+---------+-----------+
| Name    | City      |
+---------+-----------+
| Alice   | London    |
| Bob     | Paris     |
| Charlie | New York  |
+---------+-----------+`;
    expect(drawTable(data)).toEqual(expectVal);
})

test('unit test 02', () => {
    const data = [
        { gift: 'Doll', quantity: 10 },
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 }
      ];
    const expectVal = `+----------+----------+
| Gift     | Quantity |
+----------+----------+
| Doll     | 10       |
| Book     | 5        |
| Music CD | 1        |
+----------+----------+`;
    expect(drawTable(data)).toEqual(expectVal);
})














