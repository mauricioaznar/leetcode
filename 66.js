/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let carry = 1
    let i = digits.length - 1

    while (carry === 1 && i >= 0) {
        const val = digits[i]
        if (val === 9) {
            digits[i] = 0
        } else {
            digits[i] = digits[i] + 1
            carry = 0
        }
        i--
    }

    if (carry === 1) {
        digits.unshift(1)
    }

    return digits
};