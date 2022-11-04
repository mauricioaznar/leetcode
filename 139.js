/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dps = new Array(s.length + 1).fill(false)
    dps[s.length] = true
    for (let i = s.length; i >= 0; i--) {
        for (const word of wordDict) {
            if (dps[i]) {
                break
            }
            if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
                dps[i] = dps[i + word.length]
            }
        }


    }



    return dps[0]
};