import { countSheep } from "./initial.solution";

import { test, expect } from "vitest";

test("Sample 00", () => {
  expect(countSheep("sheepxsheepy")).toEqual(2);
});
test("Sample 01", () => {
  expect(countSheep("sshhheeeepppp")).toEqual(2);
});
test("Sample 02", () => {
  expect(countSheep("hola")).toEqual(0);
});
test("Sample 03", () => {
  expect(countSheep("peesh")).toEqual(1);
});

test("Test 07", () => {
  expect(countSheep("shep")).toEqual(0);
});
