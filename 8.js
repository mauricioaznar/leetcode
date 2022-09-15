
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]




/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    
    let start = 0
    
    const regex = /[a-zA-Z]/
    
    while (!nums.includes(s[start]) && start < s.length) {
        if (regex.test(s[start]) || s[start] === '.') {
            return 0
        }
        
    ac
        
        start++
    }
    
    let sign = start - 1 >= 0 && s[start - 1] === '-' ? -1 : 1;
    

    let end = start
    
    while (nums.includes(s[end]) && end < s.length) {
        end++
    }
    
    const str = s.substring(start, end)
    
    let num = 0
    
    let i = str.length - 1
    
    while ( i >= 0 ) {
        
        const multiplier = str.length - i - 1
        
        const base10 = Math.pow(10, multiplier)
        
        
        num += str[i] * base10
        
        console.log(num)
        
        
        i--
    }
    
    num =num * sign
    
    if (num < -1 * Math.pow(2, 31)) {
        return -1 * Math.pow(2, 31)
    }
    
    
    return num
    
    
};
