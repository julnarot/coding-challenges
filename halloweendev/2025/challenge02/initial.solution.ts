export function countSheep(letters: string): number {
  if (letters.length <= 4) {
    return 0;
  }
  const shepObj: any = {};
  "sheep".split("").forEach((ss) => {
    const sheepCount = letters.match(new RegExp(ss, "g"));
    shepObj[ss] = sheepCount ? sheepCount.length:0;
  });
   shepObj["e"] = Math.floor(shepObj["e"] / 2)
  const valuesSheep: number[] = Object.values(shepObj);

  const values = Object.values(shepObj);
  if (values.some((v) => v === 0)) return 0;

  return Math.min.apply(null,valuesSheep)
}
