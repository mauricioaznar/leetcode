/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = ''


    // example: 'aabc'
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {

            left = i

            // could be i or i + 1
            right = j + i


            // if they are not the same, continue to the next i position
            if (s[left] !== s[right]) {
                break;
            }

            // if next on both sides are the same, expand
            while (s[left - 1] !== undefined && s[left - 1] === s[right + 1]) {
                left--
                right++
            }


            // get latest expansion and compare with biggest
            const substring = s.substring(left, right + 1)

            if (substring.length > max.length) {
                max = substring
            }
        }
    }

    return max
};