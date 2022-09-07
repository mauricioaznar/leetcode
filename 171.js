/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let total = 0
    
    let i = columnTitle.length - 1;
    
    const codeOffset = 'A'.charCodeAt(0)

    
    while (i >= 0) {
        const letter = columnTitle[i]
        const letterCode = letter.charCodeAt(0)
        
        const base26Value = letterCode - codeOffset
        
        const excelValue = (base26Value + 1) * Math.pow(26, (columnTitle.length - i - 1))
        
        total += excelValue
        
        i--
    }
    
    return total
    
    
};
