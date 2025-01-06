export function removeSnow(s) {
    for (let index = 0; index < s.length - 1; index++) {
        if (s.charAt(index) === s.charAt(index + 1)) {
            return removeSnow(s.slice(0, index) + s.slice(index + 2));
        }
    }
    return s;
}
