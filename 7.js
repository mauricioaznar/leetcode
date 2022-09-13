/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1
    x = Math.abs(x)
    x = String(x).split('').reverse().join('')
    x = x * sign


    const negativeLimit = Math.pow(2, 31) * -1
    const positiveLimit = Math.pow(2, 31)

    if (x <= negativeLimit) {
        return 0
    }

    if (x >= positiveLimit) {
        return 0
    }


    return x

};