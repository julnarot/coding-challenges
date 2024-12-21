import { test, expect } from 'vitest';
import { moveTrain } from './challenge09';


test('test case 01', () => {
    const board = [
        '·····',
        '*····',
        '@····',
        'o····',
        'o····'
    ];
    expect(moveTrain(board, 'U')).toEqual('eat');
});

test('test case 02', () => {
    const board = [
        '·····',
        '*····',
        '@····',
        'o····',
        'o····'
    ];
    expect(moveTrain(board, 'D')).toEqual('crash');
});

test('test case 03', () => {
    const board = [
        '·····',
        '*····',
        '@····',
        'o····',
        'o····'
    ];
    expect(moveTrain(board, 'L')).toEqual('crash');
});

test('test case 04', () => {
    const board = [
        '·····',
        '*····',
        '@····',
        'o····',
        'o····'
    ];
    expect(moveTrain(board, 'R')).toEqual('none');
});

test('test case 05', () => {
    const board = [
        "·····",
        "··*··",
        "··@··",
        "··o··",
        "··o··"
    ];
    expect(moveTrain(board, 'U')).toEqual('eat');
});

test('test case 06', () => {
    const board = [
        "·····",
        "··*··",
        "··.··",
        "··o··",
        "··@··"
    ];
    expect(moveTrain(board, 'D')).toEqual('crash');
});

test('test case 07', () => {
    const board = [
        "·····",
        "··*··",
        "··@··",
        "··o··",
        "··o··"
    ];
    expect(moveTrain(board, 'D')).toEqual('crash');
});

test('test case 08', () => {
    const board = [
        "·····",
        "··*··",
        "··@··",
        "··o··",
        "··o··"
    ];
    expect(moveTrain(board, 'R')).toEqual('none');
});

test('test case 09', () => {
    const board = [
        "··@··",
        "··o··",
        "·*o··",
        "··o··",
        "··o··"
    ];
    expect(moveTrain(board, 'U')).toEqual('crash');
});

test('test case 10', () => {
    const board = [
        "··@··",
        "··o··",
        "·*o··",
        "··o··",
        "··o··"
    ];
    expect(moveTrain(board, 'L')).toEqual('none');
});

test('test case 11', () => {
    const board = [
        "·····",
        "··@··",
        "··*··",
        "·····",
        "·····"
    ];
    expect(moveTrain(board, 'D')).toEqual('eat');
});