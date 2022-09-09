/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const curr = grid[i][j]
            if (curr === '1') {
                count++

                clean(grid, i, j)
            }


        }
    }

    return count;
};


var clean = function(grid, i, j) {

    if (i < 0 || i >= grid.length) {
        return;
    }

    if (j < 0  || j >= grid[i].length) {
        return;
    }


    if (grid[i][j] === '1') {
        grid[i][j] = '0'

        clean(grid, i - 1, j)
        clean(grid, i + 1, j)
        clean(grid, i, j - 1)
        clean(grid, i, j + 1)
    }




}

