import { kangaroo } from "./main-solution";

import { test, expect } from "vitest";

test("Sample 00", () => {
  expect(kangaroo(2, 1, 1, 2)).toEqual("YES");
});
test("Test case 00", () => {
  expect(kangaroo(0, 3, 4, 2)).toEqual("YES");
});
test("Test case 01", () => {
  expect(kangaroo(0, 2, 5, 3)).toEqual("NO");
});
