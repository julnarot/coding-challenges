export function inBox(box) {
    return [...box.map(b => b.replace(/\s/g, ""))].some((s, i) => s === '#*#' && i !== 0 && i !== box.length - 1);
}