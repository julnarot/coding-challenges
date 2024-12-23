import { test, expect } from 'vitest';
import { decodeFilename } from './day11';

test('unit test 01', () => {
    expect(decodeFilename('2023122512345678_sleighDesign.png.grinchwa')).toEqual('sleighDesign.png');
})