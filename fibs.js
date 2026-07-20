/**
 * Generates the first `n` numbers of the Fibonacci sequence iteratively.
 *
 * @param {number} n - The number of Fibonacci values to generate. Must be >= 0.
 * @returns {number[]} An array containing the first `n` Fibonacci numbers.
 *
 */
function fibs(n) {
  const sequence = [];

  if (n <= 0) {
    return sequence;
  }

  if (n >= 1) {
    sequence.push(0);
  }

  if (n >= 2) {
    sequence.push(1);
  }

  for (let i = 2; i < n; i++) {
    let a = sequence[i - 1];
    let b = sequence[i - 2];
    sequence.push(a + b);
  }

  return sequence;
}

console.log(fibs(8));
