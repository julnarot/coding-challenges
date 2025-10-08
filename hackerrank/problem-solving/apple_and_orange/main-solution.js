export function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesOnLand = apples.map((apple) => a + apple);
  let orangesOnLand = oranges.map((apple) => b + apple);
  const houseDistances = [
    ...Array.from({ length: t + 1 - s }, (v, i) => 7 + i),
  ];

  let appleFoundOnLand = houseDistances.filter((r) =>
    applesOnLand.includes(r)
  ).length; 
  let orangeFoundOnLand = houseDistances.filter((r) =>
    orangesOnLand.includes(r)
  ).length; 

  return [appleFoundOnLand, orangeFoundOnLand];
}
