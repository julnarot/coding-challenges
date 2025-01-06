export function isTreesSynchronized(tree1, tree2) {
    const nodeSide = (node) => {
        if (node === null) {
            return null;
        }
        return {
            value: node.value,
            left: nodeSide(node.left ?? null),
            right: nodeSide(node.right ?? null),
        };
    };

    const compareNodes = (node1, node2) => {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1.value !== node2.value) return false;
        return (
            compareNodes(node1.left, node2.right) &&
            compareNodes(node1.right, node2.left)
        );
    };

    const tree1Root = nodeSide(tree1);
    const tree2Root = nodeSide(tree2);
    return [compareNodes(tree1Root, tree2Root), tree1Root?.value];
}