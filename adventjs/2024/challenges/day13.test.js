import { test, expect } from 'vitest';
import { isRobotBack } from './day13';

test('Unit test 01', () => {
    expect(isRobotBack('R')).toEqual([1, 0]);
})

test('Unit test 02', () => {
    expect(isRobotBack('RL')).toEqual(true);
})

test('Unit test 03', () => {
    expect(isRobotBack('RLUD')).toEqual(true);
})

test('Unit test 04', () => {
    expect(isRobotBack('*RU')).toEqual([2, 1]);
})

test('Unit test 05', () => {
    expect(isRobotBack('R*U')).toEqual([1, 2]);
})

test('Unit test 06', () => {
    expect(isRobotBack('LLL!R')).toEqual([-4, 0]);
})

test('Unit test 07', () => {
    expect(isRobotBack('R?R')).toEqual([1, 0]);
})
test('Unit test 08', () => {
    expect(isRobotBack('U?D')).toEqual(true);
})

test('Unit test 09', () => {
    expect(isRobotBack('R!L')).toEqual([2, 0]);
})

test('Unit test 10', () => {
    expect(isRobotBack('U!D')).toEqual([0, 2]);
})

test('Unit test 100', () => {
    expect(isRobotBack('!U?U')).toEqual(true);
})