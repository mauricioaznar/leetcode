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
    const stack = []
    
    for (let i = 0; i < s.length; i++) {
        const symb = s[i]
        
        if (!map.hasOwnProperty(symb)) {
            stack.push(symb)
        } else {
            
            if (map[symb] !== stack.pop()) {
                return false
            }

        }
    }
        
    return stack.length === 0;
};
