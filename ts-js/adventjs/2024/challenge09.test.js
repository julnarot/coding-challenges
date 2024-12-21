import { test, expect } from 'vitest';
import { moveTrain } from './challenge09';
const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
];

test('test case 01', () => {
    expect(moveTrain(board, 'U')).toEqual('eat');
});

test('test case 02', () => {
    expect(moveTrain(board, 'D')).toEqual('crash');
});
test('test case 03', () => {
    expect(moveTrain(board, 'L')).toEqual('crash');
});
test('test case 04', () => {
    expect(moveTrain(board, 'R')).toEqual('none');
});