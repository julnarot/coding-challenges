import { test, expect } from "vitest";
import { distributeWeight } from "./day19.js";

test('Unit test 01', ()=> {
    expect(distributeWeight(1)).toEqual(` _
|_|`);
})