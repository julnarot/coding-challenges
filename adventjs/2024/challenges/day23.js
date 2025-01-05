export function findMissingNumbers(nums) {
    const uniqNums = Object.keys(nums.reduce((a, v) => ({ ...a, [v]: '' }), {})).map(Number);
    return Array.from({ length: [...uniqNums].pop() }).map((_, i) => {
        return !uniqNums.includes(i + 1) ? i + 1 : undefined
    }).filter(f => !!f);
}
