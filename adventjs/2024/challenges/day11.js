export function decodeFilename(filename) {
    const matching = filename.match(/\.(png|pdf|csv)/)
    if (matching) {
        const extLength = matching[0].length;
        const numberFilenameExt = filename.slice(0,matching.index + extLength);
        const numbers = numberFilenameExt.match(/\_/);
        if(numbers) {
            const nameExtension = numberFilenameExt.slice(numbers.index+1)
            return nameExtension;
        }
    }
    return '';
}