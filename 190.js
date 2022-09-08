/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const bits = to32bits(n)
    const reversedBits = reverse(str) 
    const num = toDecimal(reversedBits) 
    return num
};


var to32bits = function(n) {
    
    let i = 0;
    
    str = ''
    
    while (n >= 1) {
        const rem = n % 2
        
        str = rem + str
        
        n  = n - rem
        n = n / 2
        i++
    }
    
    while (str.length !== 32) {
        str = '0' + str
    }
    
    return str
}

var toDecimal = function(bits) {
    
    let i = bits.length - 1
    
    let res = 0
    
    
    while (i >= 0) {
        const bit = bits[i]
        
        if (bit !== '0') {
            const power = bits.length - 1 - i
            const val = Math.pow(2, power)        
            res += val
        }
        
        i--
    }
    
    return res
    
}

var reverse = function(str) {
    let i = 0;
    let s = ''
    
    while (i < str.length) {
        s = `${str[i]}${s}`
        i++
    }
    
    return s
}
