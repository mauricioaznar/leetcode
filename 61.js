/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0 && j === 0) {
                continue;
            }

            const up = i - 1 >= 0 ? grid[i - 1][j] : Infinity;
            const left = j - 1 >= 0 ? grid[i][j - 1] : Infinity;

            const min = Math.min(up, left)

            grid[i][j] = grid[i][j] + min


        }
    }

    return grid[grid.length - 1][grid[0].length - 1]
};