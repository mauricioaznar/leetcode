function fractionToDecimal(numerator, denominator) {
    if (numerator === 0) {
        return '0'
    }

    let str = ''

    if (Math.sign(numerator) !== Math.sign(denominator)) {
        str += '-'
    }

    const num = Math.abs(numerator)
    const den = Math.abs(denominator)

    const integer = Math.floor(num / den)
    let rem = num % den


    str += integer

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