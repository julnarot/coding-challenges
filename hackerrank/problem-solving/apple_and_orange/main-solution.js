export function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesOnLand = apples.map((apple) => a + apple);
  let orangesOnLand = oranges.map((orange) => b + orange);

  let appleFoundOnLand = applesOnLand.filter((r) => r >= s && r <= t).length;
  let orangeFoundOnLand = orangesOnLand.filter((r) => r >= s && r <= t).length;
  return [appleFoundOnLand, orangeFoundOnLand];
}
