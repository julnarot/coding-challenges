import { test, expect } from 'vitest';
import { compile } from './challenge10';


test('unit test 01', () => {
    const instructions = [
        'MOV -1 C',
        'INC C',
        'JMP C 1',
        'MOV C A',
        'INC A'
    ]
    expect(compile(instructions)).toEqual(2)
})