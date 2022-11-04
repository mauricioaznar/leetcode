/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let gasTotal = 0
    let costTotal = 0
    let total = 0

    let start = 0
    let i = 0
    while (i < gas.length) {
        gasTotal += gas[i]
        costTotal += cost[i]

        total += (gas[i] - cost[i])

        if (total < 0) {
            start = i + 1
            total = 0
        }

        i++
    }


    return gasTotal >= costTotal ? start : -1
};
