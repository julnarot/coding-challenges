import { humanReadable } from "./initial.solution";

import { test, expect } from "vitest";

test("Sample 00", () => {
  expect(humanReadable(0)).toEqual("00:00:00");
});
test("Sample 01", () => {
  expect(humanReadable(59)).toEqual("00:00:59");
});
test("Sample 02", () => {
  expect(humanReadable(60)).toEqual("00:01:00");
});
test("Sample 03", () => {
  expect(humanReadable(90)).toEqual("00:01:30");
});
