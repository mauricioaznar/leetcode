// 1st try

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert1 = function(s, n) {

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

// clean solution

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert2 = function(s, n) {
    if (s.length === 0 || n === 1) return s


    const arr = Array(n).fill(null).map(e => new Array())

    let goingUp = true

    let index = 1


    for (let i = 0; i < s.length; i++) {
        arr[index - 1].push(s[i])

        if (index === n) {
            goingUp = false
        } else if (index === 1) {
            goingUp = true
        }


        if (goingUp) {
            index = index + 1
        } else {
            index = index - 1
        }



    }


    return arr.map(e => e.join('')).join('')

};