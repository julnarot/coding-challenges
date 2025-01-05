export function generateGiftSets(gifts) {
    
    const existAllIn = (allCombinations) => {
        return allCombinations.length === gifts.length;
    }
    const addToCombinations = (allCombinations, posix) => {
        const combinations = [];
        Array.from({ length: 1 }).forEach(() => {
            combinations.push(gifts[posix]);
        });
        allCombinations.push(combinations);
        return allCombinations;
    }

    const getAllCombination = (gifts, allCombinations, posix) => {

        if (existAllIn(allCombinations)) {
            return allCombinations;
        }

        allCombinations = addToCombinations(allCombinations,posix);
        return getAllCombination(gifts, allCombinations, posix + 1);
    }

    return getAllCombination(gifts, [], 0);
}