/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = ''

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const str = s.substring(i, j - 1)
            const curr = s[j - 1]

            if (str.includes(curr)) {
                break;
            }

            const concat = `${str}${curr}`
            if (concat.length > longest.length) {
                longest = concat
            }

        }
    }

    return longest.length
};