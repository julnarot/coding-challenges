import { breakingRecords } from "./main-solution";

import { test, expect } from "vitest";

test("Sample 00", () => {
  expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2, 4]);
});
test("test case 01", () => {
  expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toEqual([
    4, 0,
  ]);
});
