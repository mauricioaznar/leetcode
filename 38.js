/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return "1"
    }

    const s = countAndSay(n - 1)

    let newS = ''

    let i = 0
    while (i < s.length) {
        let count = 0;
        let j = i;

        while (j < s.length && s[i] === s[j]) {
            j++
            count++
        }

        newS = `${newS}${count}${s[i]}`

        i = j
    }

    return newS
};