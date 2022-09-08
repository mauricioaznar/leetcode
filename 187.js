/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const rep = []
    const seen = {}


    for (let i = 0; i <= s.length - 10; i++) {
        const str = s.substring(i, i + 10)

        if (!seen[str]) {
            seen[str] = true
        } else if (!rep.includes(str)) {
            rep.push(str)
        }
    }


    return rep
};