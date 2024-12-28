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

test('Unit test 02', () => {
    expect(findInAgenda(
        `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York` ,
        '600-987'
    )).toEqual({ name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" })
})
test('Unit test 03', () => {
    expect(findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York` ,
        '111'
    )).toEqual(null)
})

test('Unit test 04', () => {
    expect(findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York` ,
        '1'
    )).toEqual(null)
})


