export function createFrame(names) {
    const maxSize = Math.max(...names.map(name => name.length));
    const buildChars = (simb, size) => {
        return Array.from({ length: size }).map(() => simb).join("")
    }
    const line = buildChars("*", maxSize + 4);
    const nameWithRightSpaces = (name, limit) => {
        return `${name}${buildChars(' ', limit - name.length)}`;
    }
    return `${line}\n${names.map(name => `* ${nameWithRightSpaces(name, maxSize)} *\n`).join("")}${line}`;
}