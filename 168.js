/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(n) {
    
    let str = ''
    
    const codeOffset = 'A'.charCodeAt(0)
    

    
    
    while (n > 0) {
        n--
        
        
        const r = n % 26
        
        str = String.fromCharCode(codeOffset + r) + str
        
        
        n = Math.floor(n / 26)
    }
    
    
    
    return str
};
