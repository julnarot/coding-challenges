import { multiply } from "./initial.solution";

import { test, expect } from "vitest";

test("Sample 00", () => {
  expect(multiply(1, 1)).toEqual(1);
});
test("Sample 01", () => {
  expect(multiply(2, 1)).toEqual(2);
});
test("Sample 02", () => {
  expect(multiply(2, 2)).toEqual(4);
});
test("Sample 03", () => {
  expect(multiply(3, 5)).toEqual(15);
});
