import { fibs } from "./fibs";
import { test, expect, describe } from "@jest/globals";

describe("Iterative fibonacci", () => {
  test.each([
    [0, []],
    [1, [0]],
    [2, [0, 1]],
    [3, [0, 1, 1]],
    [8, [0, 1, 1, 2, 3, 5, 8, 13]],
  ])("fibs(%p => %p", (input, output) => {
    expect(fibs(input)).toEqual(output);
  });
});
