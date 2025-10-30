import { pigIt } from "./initial.solution";

import { test, expect } from "vitest";

test("Sample 00", () => {
  expect(pigIt("Pig latin is cool")).toEqual("igPay atinlay siay oolcay");
});
test("Sample 02", () => {
  expect(pigIt("This is my string")).toEqual("hisTay siay ymay tringsay");
});
