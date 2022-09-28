/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const el = matrix[i][j]
            if (el === 0) {
                matrix[i][j] = 'x'
                spread(matrix, i, j)
            }

        }
    }


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const el = matrix[i][j]
            if (el === 'x') {
                matrix[i][j] = 0
            }
        }
    }

};

var spread = function (matrix, i, j) {
    let rowStart = i
    while (rowStart >= 0) {
        const el = matrix[rowStart][j]
        if (el !== 0) {
            matrix[rowStart][j] = 'x'
        }
        rowStart--
    }

    let rowEnd = i
    while (rowEnd < matrix.length) {
        const el = matrix[rowEnd][j]
        if (el !== 0) {
            matrix[rowEnd][j] = 'x'
        }
        rowEnd++
    }


    let colStart = j
    while (colStart >= 0) {
        const el = matrix[i][colStart]
        if (el !== 0) {
            matrix[i][colStart] = 'x'
        }
        colStart--
    }

    let colEnd = j
    while (colEnd < matrix[i].length) {
        const el = matrix[i][colEnd]
        if (el !== 0) {
            matrix[i][colEnd] = 'x'
        }

        colEnd++
    }




}