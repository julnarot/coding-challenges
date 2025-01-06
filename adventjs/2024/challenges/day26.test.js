import { expect, test } from "vitest";
import { getCompleted } from "./day26";

test('Unit test 01', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toEqual('33%');
})

test('Unit test 02', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toEqual('33%');
})

test('Unit test 03', () => {
    expect(getCompleted('02:00:00', '04:00:00')).toEqual('50%');
})

test('Unit test 04', () => {
    expect(getCompleted('01:00:00', '01:00:00')).toEqual('100%');
})

test('Unit test 05', () => {
    expect(getCompleted('00:10:00', '01:00:00')).toEqual('17%');
})

test('Unit test 06', () => {
    expect(getCompleted('01:10:10', '03:30:30')).toEqual('33%');
})

test('Unit test 07', () => {
    expect(getCompleted('03:30:30', '05:50:50')).toEqual('60%');
})
