/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {

    let res = []

    for (let i = 0; i < 3 && i < s.length; i++) {
        const first = s.slice(0, i + 1)
        for (let j = i + 1; j < i + 4 && j < s.length; j++) {
            const second = s.slice(i + 1,  j + 1)
            for (let k = j + 1; k < j + 4 && k < s.length; k++) {
                const third = s.slice(j + 1, k + 1)
                for (let m = k + 1; m < k + 4 && m < s.length; m++) {
                    const fourth = s.slice(k + 1, m + 1)
                    const len = first.length + second.length + third.length + fourth.length

                    if (len === s.length) {

                        if (
                            isPrefixValid(first)
                            && isPrefixValid(second)
                            && isPrefixValid(third)
                            && isPrefixValid(fourth)
                        ) {
                            res.push(`${first}.${second}.${third}.${fourth}`)
                        }

                    }

                }
            }

        }
    }

    return res
};

var isPrefixValid = function (prefix) {
    if (prefix.length > 1 && prefix[0] === '0') {
        return false;
    }

    const num = Number(prefix)

    return num >= 0 && num <= 255
}