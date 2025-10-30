import { maskify } from "./initial.solution";

import { test, expect } from "vitest";

test("Sample 00", () => {
  expect(maskify('4556364607935616')).toEqual("############5616");
});

test("Sample 01", () => {
  expect(maskify('1')).toEqual("1");
});

test("Sample 02", () => {
  expect(maskify('11111')).toEqual("#1111");
});
