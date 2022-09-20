/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []


    // use recursion
    var recurse = function(s, l, r) {

        // if we have the required number of pairs we return and we add the pair to the result
        if (s.length === n * 2) {
            res.push(s)
            return;
        }

        // we add left parenthesis if we haven't met the required pairs (n)
        if (l < n) {
            recurse(`${s}(`, l + 1, r)
        }

        // if we have more left parenthesis than right we add right parenthesis
        if (r < l) {
            recurse(`${s})`, l, r + 1)
        }



    }

    recurse('', 0, 0)

    return res
};