/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortest = strs[0]
    
    for (let i = 1; i < strs.length; i++) {
        const str = strs[i]
        if (str.length < shortest) {
            shortest = str
        }
    }
    
    let prefix = ''
    
    let letters = shortest.split('')
    
    
    for (let i = 0; i < letters.length; i++) {
    
        const letter = letters[i]
        
        for (let j = 0; j < strs.length; j++) {
            const str = strs[j]
            
            if (str[i] !== letter) {
                return prefix
            }
            
        }
        
        prefix = prefix + letter
    }
    
    
    
    
    return prefix
};
