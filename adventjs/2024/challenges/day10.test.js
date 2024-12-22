import { test, expect } from 'vitest';
import { compile } from './day10';


test('unit test 01', () => {
    const instructions = [
        'MOV -1 C',
        'INC C',
        'JMP C 1',
        'MOV C A',
        'INC A'
    ];
    expect(compile(instructions)).toEqual(2)
})
test('unit test 02', () => {
    const instructions = [
        "MOV 5 B",
        "DEC B",
        "MOV B A",
        "INC A"
    ];
    expect(compile(instructions)).toEqual(5)
})
test('unit test 03', () => {
    const instructions = [
        "INC A",
        "INC A",
        "DEC A",
        "MOV A B"
    ];
    expect(compile(instructions)).toEqual(1)
})
test('unit test 04', () => {
    const instructions = [
        "INC C",
        "DEC B",
        "MOV C Y",
        "INC Y"
    ];
    expect(compile(instructions)).toEqual(undefined)
})
test('unit test 05', () => {
    const instructions = [
        "INC A",
        "DEC B",
        "MOV A C",
    ];
    expect(compile(instructions)).toEqual(1)
})
test('unit test 06', () => {
    const instructions = [
        "INC A",
        "DEC B",
        "MOV A C",
    ];
    expect(compile(instructions)).toEqual(1)
})
test('unit test 07', () => {
    const instructions = [
        "MOV 5 A",
        "DEC A",
        "DEC A",
        "MOV A B",
        "DEC B",
    ];
    expect(compile(instructions)).toEqual(3)
})
