import { countApplesAndOranges } from "./main-solution";

import { test, expect } from "vitest";

test("Sample 00", () => {
  expect(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])).toEqual([
    1, 2,
  ]);
});
