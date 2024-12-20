export function fixPackages(packages) {
    const hasPattern = /\([^\(\)]*\)/;

    const findPattern = (text) => {
        const match = text.match(/\([^\(\)]*\)/);
        return match ? match[0] : null;
    };

    const reverseText = (text) => {
        return text.slice(1, -1).split("").reverse().join("");
    };

    while (hasPattern.test(packages)) {
        const patternFound = findPattern(packages);
        if (patternFound) {
            const patternReversed = reverseText(patternFound);
            packages = packages.replace(patternFound, patternReversed);
        }
    }
    return packages;
}