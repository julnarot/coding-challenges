export function miniMaxSum(arr) {
  // Write your code here
  const { 0: min, [arr.length - 1]: max } = [...Array(arr.length).keys()]
    .map((k) => {
      let acum = 0;
      arr.forEach((e, i) => {
        if (k !== i) {
          acum = acum + e;
        }
      });
      return acum;
    })
    .sort((a, b) => a - b);

  return `${min} ${max}`;
}
