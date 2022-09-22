/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    // always ahead so it doesnt repeat
    for (let i = 0; i < matrix.length; i++) {        
        for (let j = i + 1; j < matrix[i].length; j++) {
            const one = matrix[i][j]
            const two = matrix[j][i]
            
            matrix[i][j] = two
            matrix[j][i] = one
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length / 2; j++) {
            const start = matrix[i][j]
            const end = matrix[i][matrix[i].length - j - 1]
            
            matrix[i][matrix[i].length - j - 1] = start
            matrix[i][j] = end
        
        }
    }
    
    
    
};
