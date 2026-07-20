import { mergeSort } from "./merge-sort";
import { test, expect, describe } from "@jest/globals";

describe("Merge sort", () => {
  test.each([
    [[], []],
    [[73], [73]],
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ],
    [
      [3, 2, 1, 13, 8, 5, 0, 1],
      [0, 1, 1, 2, 3, 5, 8, 13],
    ],
    [
      [105, 79, 110, 100],
      [79, 100, 105, 110],
    ],
  ])("mergeSort(%p => %p", (input, output) => {
    expect(mergeSort(input)).toEqual(output);
  });
});
