import { expect, test } from 'vitest';
import { findInAgenda } from './day18';

test('Unit test 01', () => {
    expect(findInAgenda(
        `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York` ,
        '34-600-123-456'
    )).toEqual({ name: "Juan Perez", address: "Calle Gran Via 12" })
})