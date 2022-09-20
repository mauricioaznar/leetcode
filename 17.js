const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    digits = digits.split('').map(d => Number(d))
    
    let res = []
    
    for (let i = 0; i < digits.length; i++) {
        const num = digits[i]
        const letters = map[num]
        
        if (res.length === 0) {
            res = res.concat(letters)
            continue
        } else {
            const temp = []
            
            for (let j = 0; j < res.length; j++) {
                const acc = res[j]
                
                for (let k = 0; k < letters.length; k++) {
                    const letter = letters[k]
                    temp.push(`${acc}${letter}`)
                }
            
            }
                                                  
            res = temp        
        }    
    }
    
    return res
};
