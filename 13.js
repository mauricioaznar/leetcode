const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const roms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']



/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0
    let i = 0
    
    while (s.length > 0) {
        
        const rom = roms[i]
        
        if (rom === s.substring(0, rom.length)) {
            res = res + nums[i]
            s = s.substring(rom.length)
        } else {
            i++
        }
        
        
    }
    
    
    return res
    
    
};
