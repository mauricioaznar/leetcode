/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const map = new Array(n).fill(0)

    map[0] = 1;
    map[1] = 2

    for (let i = 2; i < n; i++) {
        map[i] = map[i - 1] + map[i - 2]
    }

    return map[n - 1];
};

/*
Notes:
- result is equal to the sum of the previous two values

 */