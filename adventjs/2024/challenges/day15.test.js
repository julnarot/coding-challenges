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







