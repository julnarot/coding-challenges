import { translatePossessed } from "./initial.solution";

import { test, expect } from "vitest";

test("Sample 00", () => {
  expect(translatePossessed("i yojne gnihctaw uoy")).toEqual(
    "i enjoy watching you"
  );
});
test("Sample 01", () => {
  expect(translatePossessed("siht si gnorw")).toEqual(
    "this is wrong"
  );
});
test("Sample 02", () => {
  expect(translatePossessed("      ")).toEqual(
    ""
  );
});
test("Sample 03", () => {
  expect(translatePossessed("dooG secitcarP")).toEqual(
    "Good Practices"
  );
});


test("Sample 06", () => {
  expect(translatePossessed("dlrow   olleh")).toEqual(
    "world   hello"
  );
});
test("Sample 10", () => {
  expect(translatePossessed("olleH 👋")).toEqual(
    "Hello 👋"
  );
});
