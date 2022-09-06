function fractionToDecimal(numerator, denominator) {
    if (numerator === 0) {
        return '0'
    }

    let str = ''

    // add minus sign if denominator and numerator are different
    if (Math.sign(numerator) !== Math.sign(denominator)) {
        str += '-'
    }

    const num = Math.abs(numerator)
    const den = Math.abs(denominator)

    const integer = Math.floor(num / den)
    let rem = num % den


    str += integer


    // if the remainder is different than 0, add the point sign
    if (rem !== 0) {
        str += '.'
    }


    const map = new Map()

    while (rem !== 0) {
        map.set(rem, str.length)

        rem = rem * 10
        str += Math.floor(rem / den)
        rem = rem % den


        if (map.has(rem)) {
            const index = map.get(rem)
            return `${str.slice(0, index)}(${str.slice(index)})`
        }


    }


    return str
}