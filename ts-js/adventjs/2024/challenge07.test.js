import { expect, test } from 'vitest';
import { fixPackages } from './challenge07';


test("test case 01", () => {
    expect(fixPackages('a(cb)de')).toEqual('abcde');
})

test("test case 02", () => {
    expect(fixPackages('a(bc(def)g)h')).toEqual('agdefcbh');
})

test("test case 03", () => {
    expect(fixPackages('abc(def(gh)i)jk')).toEqual('abcighfedjk');
})

test("test case 03", () => {
    expect(fixPackages('a(b(c))e')).toEqual('acbe');
})