/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = new Array(n).fill(null).map(el => new Array(n).fill(null))    
    const len = n * n
    
    
    let colStart = 0
    let colEnd = n - 1
    
    let rowStart = 0
    let rowEnd = n - 1
    
    let i = 1
    
    while (i <= len) {    
        
        let j = colStart
        while (j <= colEnd && i <= len) {
            res[rowStart][j] = i
            j++
            i++
        }
        rowStart++

        j = rowStart    
        while (j <= rowEnd && i <= len) {
            res[j][colEnd] = i
            j++
            i++
        }        
        colEnd--
        
        j = colEnd
        while (j >= colStart && i <= len) {
            res[rowEnd][j] = i
            j--
            i++
        }
        rowEnd--
        
        j = rowEnd
        while(j >= rowStart && i <= len) {
            res[j][colStart] = i
            j--
            i++
        }
        colStart++
    }
    
    
    
    return res
};
