/**
 * Performs a merge sort on an array and returns a new sorted array.
 *
 * The function recursively splits the array into halves until arrays
 * of length 1 are reached, then merges those sorted halves back together.
 *
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} A new array containing the sorted values.
 *
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges two sorted arrays into a single sorted array.
 *
 * This is the core operation used by merge sort. It compares the
 * smallest remaining elements of each array and builds a new array
 * in ascending order.
 *
 * Assumes both input arrays are already sorted.
 *
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 * @returns {number[]} A new sorted array containing all elements from arr1 and arr2.
 *
 */
function merge(arr1, arr2) {
  const arr3 = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }

  if (i >= arr1.length) {
    arr3.push(...arr2.slice(j));
  }

  if (j >= arr2.length) {
    arr3.push(...arr1.slice(i));
  }

  return arr3;
}
