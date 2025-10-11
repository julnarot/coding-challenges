export function getTotalX(a, b) {
  console.log(
    [...Array(100).keys()]
      .map((n) => n + 1)
      .filter((n) => {
        return (n + 1) % 2;
      })
  );
  console.log(
    [...Array(100).keys()]
      .map((n) => n + 1)
      .filter((n) => {
        return (n + 1) % 6;
      })
  );
  return 2;
}
