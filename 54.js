/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const len = matrix.length * matrix[0].length
    const res = []
    
    
    let colStart = 0
    let colEnd = matrix[0].length - 1
    
    let rowStart = 0
    let rowEnd = matrix.length - 1
    
    let i = 0
    
    while (i < len) {    
        
        let j = colStart
        while (j <= colEnd && i < len) {
            const el = matrix[rowStart][j]
            res.push(el)
            j++
            i++
        }
        
        rowStart++
    
        j = rowStart    
        while (j <= rowEnd && i < len) {
            const el = matrix[j][colEnd]
            res.push(el)
            j++
            i++
        }
        
        colEnd--
        
        j = colEnd
        while (j >= colStart && i < len) {
            const el = matrix[rowEnd][j]
            res.push(el)
            j--
            i++
        }
        
        rowEnd--
        
        j = rowEnd
        while(j >= rowStart && i < len) {
            const el = matrix[j][colStart]
            res.push(el)
            j--
            i++
        }
        
        colStart++
        
    }
    
    
    
    return res
};
