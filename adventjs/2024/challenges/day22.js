export function generateGiftSets(gifts) {
    // Code here
    const getAllCombination = (gifts, allCombinations, posix) => {
        const exist = posix === gifts.length
        if (exist) {
            return allCombinations;
        }
        const combinations = [];
        Array.from({ length: 1 }).forEach(() => {
            combinations.push(gifts[posix]);
        })
        allCombinations.push(combinations);
        return getAllCombination(gifts, allCombinations, posix + 1);

    }


    return getAllCombination(gifts, [], 0)
}