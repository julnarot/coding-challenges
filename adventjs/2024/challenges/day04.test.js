import { test, expect } from 'vitest';
import { createXmasTree } from './day04';

test('Test case 01', () => {
    const expectTree = `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`;
    expect(createXmasTree(5, "*")).toEqual(expectTree);
});
test('Test case 02', () => {
    const expectTree = `__+__
_+++_
+++++
__#__
__#__`;
    expect(createXmasTree(3, "+")).toEqual(expectTree);
});
test('Test case 03', () => {
    const expectTree = `_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____`;
    expect(createXmasTree(6, "@")).toEqual(expectTree);
});

