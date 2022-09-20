const map = {
    '}': '{',
    ')': '(',
    ']': '['
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    // insert parenthesis that dont belong to a property on the map (left ones)
    const stack = []
    
    for (let i = 0; i < s.length; i++) {
        const symb = s[i]

        // if doesnt exist, insert it on the stack
        if (!map.hasOwnProperty(symb)) {
            stack.push(symb)
        } else {
            // if it exists, retrieve last parenthesis and see if it matches with right one
            // if it doesnt match, return false
            if (map[symb] !== stack.pop()) {
                return false
            }

        }
    }
        
    return stack.length === 0;
};
