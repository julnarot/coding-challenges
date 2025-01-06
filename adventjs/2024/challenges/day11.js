export function decodeFilename(filename) {
    const endMatch = filename.match(/\.[^.]*$/);
    const startMatch = filename.match(/\_/);
    return filename.slice(startMatch.index + 1, endMatch.index);
}