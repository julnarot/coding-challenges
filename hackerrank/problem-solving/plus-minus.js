export function plusMinus(arr) {
  // Write your code here
  const [positives, negatives, zeros] = [
    arr.filter((e) => e > 0),
    arr.filter((e) => e < 0),
    arr.filter((e) => e === 0),
  ];

  return [
    positives.length / arr.length,
    negatives.length / arr.length,
    zeros.length / arr.length,
  ];
}
