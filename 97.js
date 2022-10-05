/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const m = s1.length
    const n = s2.length


    const matrix = new Array(m + 1).fill(null).map(e => {
        return new Array(n + 1).fill(false)
    })

    matrix[m][n] = true

    for (let i = m; i >= 0; i--) {
        for (let j = n; j >= 0; j--) {

            if (i < m && s1[i] === s3[i + j] && matrix[i + 1][j] === true) {
                matrix[i][j] = true;
            }

            if (j < n && s2[j] === s3[i + j] && matrix[i][j + 1] === true) {
                matrix[i][j] = true;
            }

        }
    }

    return matrix[0][0]
};