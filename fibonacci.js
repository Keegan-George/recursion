function fibs(n) {
  const sequence = [];

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
