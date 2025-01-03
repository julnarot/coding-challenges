export function treeHeight(tree) {
    const nodeSide = (node) => {
        if (node === null) {
            return null;
        }
        const rightQty = nodeSide(node.right);
        const leftQty = nodeSide(node.left);
        let maxQty = rightQty > leftQty ? rightQty : leftQty;
        return maxQty + 1;
    }
    return nodeSide(tree);
}