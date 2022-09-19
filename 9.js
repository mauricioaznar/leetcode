/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = x
    let digit = 0
    let reverse = 0
    
    
    while (temp > 0) {
        digit = temp % 10
        reverse = (reverse * 10) + digit
        temp = Math.floor(temp /10)
    }
    
    
    return reverse === x
};
