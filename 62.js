/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const matrix = new Array(m).fill(null).map(e => new Array(n).fill(0))
    
    matrix[0][0] = 1
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            
            const up = i - 1 >= 0 ? matrix[i - 1][j] : 0;
            const left = j - 1 >= 0 ? matrix[i][j - 1] : 0;
            
            matrix[i][j] = up + left;
            
        }
    }
    

    
    return matrix[m - 1][n - 1]
};
