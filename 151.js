/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = []
    let i = 0;
    while (i < s.length) {
        if (s[i] !== ' ' && i < s.length) {
            let left = i

            while (s[i] !== ' ' && i < s.length) {
                i++
            }

            let right = i
            const word = s.slice(left, right)
            words.push(word)
        } else {
            i++
        }
    }
    let newString = `${words.pop()}`
    while(words.length > 0) {
        newString = `${newString} ${words.pop()}`
    }
    return newString
};