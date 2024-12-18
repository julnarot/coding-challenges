export function staircase(n) {
  // Write your code here
  const letter = [...Array(n).keys()].map((_, i) =>
    [...Array(n).keys()]
      .map((_, j) => (j + 1 <= n - (i + 1) ? ' ' : '#'))
      .join('')
  );

  return letter.join('\n');
}
