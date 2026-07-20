/**
 * Generates the first `n` numbers of the Fibonacci sequence recursively.
 *
 * @param {number} n - The number of Fibonacci values to generate. Must be >= 0.
 * @returns {number[]} An array containing the first `n` Fibonacci numbers.
 *
 */
function fibsRec(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  //the current array is always just the previous array appended with the sum of the last two array elements
  const sequence = fibsRec(n - 1);
  const length = sequence.length;
  const sum = sequence[length - 1] + sequence[length - 2];
  sequence.push(sum);
  return sequence;
}

console.log(fibsRec(8));
