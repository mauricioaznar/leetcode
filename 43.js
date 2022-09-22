/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const res = Array.from(Array(num1.length + num2.length)).map(e => 0)


    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            const mult = (num1[i] * 1) * (num2[j] * 1)
            const sum = mult + res[i + j + 1]

            res[i + j] += Math.floor(sum / 10)
            res[i + j + 1] = sum % 10
        }
    }

    while (res[0] === 0) {
        res.shift()
    }

    return res.map(e => String(e)).join('')
};