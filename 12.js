const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const roms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let str = ''
    let i = 0
    
    while (num > 0) {
        const curr = nums[i]
        if (num >= curr) {
            num = num - curr
            let rom = roms[i]
            str = str + rom
        } else {
            i++
        }
    }
    
    return str
    
};
