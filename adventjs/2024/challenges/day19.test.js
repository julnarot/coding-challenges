import { test, expect } from "vitest";
import { distributeWeight } from "./day19.js";

test('Unit test 01', ()=> {
    expect(distributeWeight(1)).toEqual(` _
|_|`);
});

test('Unit test 02', ()=> {
    expect(distributeWeight(2)).toEqual(` ___
|___|`);
});

