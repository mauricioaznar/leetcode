// 1st try

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, n) {

    let direction = true

    const arr = Array(n).fill(null).map(e => new Array())


    for (let i = 0; i < s.length; i++) {

        const j = n > 1 ? i % (n - 1) : 0


        if (j === 0) {
            const pos = direction ? 0 : n - 1

            arr[pos].push(s[i])

            direction = !direction
        } else {
            const pos = direction ? n - j - 1 : j

            arr[pos].push(s[i])
        }



    }


    return arr.map(e => e.join('')).join('')

};