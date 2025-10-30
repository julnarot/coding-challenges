export function breakingRecords(scores) {
  let highestScores = [];
  let countHighestScores = 0;
  let lowertScores = [];
  let countlowerScores = 0;
  scores.forEach((element, index) => {
    if (index == 0) {
      highestScores.push(element);
      lowertScores.push(element);
    } else {
      if (highestScores[index - 1] > element) {
        highestScores.push(highestScores[index - 1]);
      } else {
        highestScores.push(element);
        if (element > highestScores[index - 1]) {
          countHighestScores++;
        }
      }

      if (lowertScores[index - 1] > element) {
        lowertScores.push(element);
        if (element < lowertScores[index - 1]) {
          countlowerScores++;
        }
      } else {
        lowertScores.push(lowertScores[index - 1]);
      }
    }
  });
  return [countHighestScores, countlowerScores];
}
