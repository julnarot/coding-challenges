export function isTreesSynchronized(tree1, tree2) {

    const nodeSide = (node) => {
        if (node === null) {
            return 0;
        }
        const right = nodeSide(node.right ?? null);
        const left = nodeSide(node.left ?? null);
        // let maxQty = rightQty > leftQty ? rightQty : leftQty;
        return [node.value, left, right];
    }
    const [tree1First,...tree1Rest] = nodeSide(tree1)
    const [tree2First,...tree2Rest] = nodeSide(tree2)
    // const s2 = nodeSide(tree2)
    
    return [JSON.stringify(tree1Rest) === JSON.stringify([...tree2Rest].reverse()), ...new Set([tree1First, tree2First])]
}