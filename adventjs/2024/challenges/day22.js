export function generateGiftSets(gifts) {
    const combinations = [];
    const generateCombinations = (index, combination) => {
        if (combination.length > 0) {
            combinations.push([...combination]);
        }
        while (index < gifts.length) {
            combination.push(gifts[index]);
            generateCombinations(index + 1, combination);
            combination.pop();
            index++;
        }
    }
    generateCombinations(0, []);
    return combinations.sort((a, b) => a.length - b.length);
}