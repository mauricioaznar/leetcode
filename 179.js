/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {


    nums.sort((a, b) => {
        const ab = Number(`${a}${b}`)
        const ba = Number(`${b}${a}`)

        return ab > ba ? -1 : ab === ba ? 0 : 1
    })


    let num = nums.join('')

    while (num[0] === '0' && num.length > 1) {
        num = num.substring(1)
    }

    return num
};