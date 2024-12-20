export function fixPackages(packages) {
    const hasPattern = (text) => {
        return /\([^\(\)]*\)/.test(text);
    }
    const findPattern = (text) => {
        const firstMatches = [...text.matchAll(/\(/g)];
        const lastMatches = [...text.matchAll(/\)/g)];
        const { index: limInf } = firstMatches[firstMatches.length - 1]
        const { index: limSup } = lastMatches[0]
        return text.substring(limInf, limSup + 1);
    }
    const reverseText = (text) => {
        return [...text.slice(1, -1).split("")].reverse().join("");
    }
    do {
        const patterFound = findPattern(packages);
        const patternFoundRevers = reverseText(patterFound);
        packages = packages.replace(patterFound, patternFoundRevers);

    } while (hasPattern(packages))
    return packages
}
