/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let start = 0
    let end = (matrix[0].length * matrix.length) - 1
    
    const rows = matrix.length
    const columns = matrix[0].length
    
    
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2)
        
        // instead of rows use columns. Why?
        const row = Math.floor(mid / columns)
        const col = mid % columns
        
        console.log('start', start, 'end', end, 'row', row, 'col', col)
        
        const el = matrix[row][col]
        
        console.log(el)
        
        if (target === el) {
            return true
        } else if (target < el) {
            end = mid - 1
        } else {
            start = mid + 1
        }        
        
    }
    
    return false
    
};
