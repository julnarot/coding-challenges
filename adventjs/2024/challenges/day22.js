export function generateGiftSets(gifts) {
    // Code here
    const getAllCombination = (gifts, res, posix) => {

        if (posix === gifts.length) {
            return res;
        }
        res.push([gifts[posix]]);
        return getAllCombination(gifts, res, posix + 1);

    }


    return getAllCombination(gifts,[],0)
}