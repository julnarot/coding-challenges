export function detectBombs(grid) {
    const sumNextYX = (y, x) => {
        let nextUp = (y - 1 >= 0) ? grid[y - 1][x] : false;
        let nextUpRight = (y - 1 >= 0) && x + 1 <= grid[y].length ? grid[y - 1][x + 1] : false;
        let nextRight = x + 1 <= grid[y].length ? grid[y][x + 1] : false;
        let nextRightDown = x + 1 <= grid[y].length && y + 1 < grid.length ? grid[y + 1][x + 1] : false;
        let nextDown = y + 1 < grid.length ? grid[y + 1][x] : false;
        let nextDownLeft = y + 1 < grid.length && x - 1 >= 0 ? grid[y + 1][x - 1] : false;
        let nextLeft = x - 1 >= 0 ? grid[y][x - 1] : false;
        let nextLeftUp = x - 1 >= 0 && (y - 1 >= 0) ? grid[y - 1][x - 1] : false;
        const corners = [nextUp, nextUpRight, nextRight, nextRightDown, nextDown, nextDownLeft, nextLeft, nextLeftUp];
        return corners.reduce((a, current) => a + (current ? 1 : 0), 0);
    }
    return grid.map((gy, y) => {
        return gy.map((gx, x) => sumNextYX(y, x));
    });
}
