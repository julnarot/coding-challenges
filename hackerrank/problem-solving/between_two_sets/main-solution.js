export function getTotalX(a, b) {
  let count = 0;

  for (let i = Math.max(...a); i <= Math.min(...b); i++) {
    const divisibleByAllB =
      b.filter((element) => element % i === 0).length === b.length;

    if (divisibleByAllB) {
      const factorsOfAllA =
        a.filter((elementInA) => i % elementInA === 0).length === a.length;

      if (factorsOfAllA) {
        count++;
      }
    }
  }

  return count;
}
