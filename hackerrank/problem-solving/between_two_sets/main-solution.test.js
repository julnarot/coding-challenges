import { getTotalX } from "./main-solution";

import { test, expect } from "vitest";

test("Sample 00", () => {
  expect(getTotalX([2, 6], [24, 36])).toEqual(2);
});
