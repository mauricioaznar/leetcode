/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    const res = []
    
    intervals.sort((a, b) => {
        return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
    })

    let i = 0
    while (i < intervals.length) {
        const curr = intervals[i]
        if (res.length > 0 && doesOverlap(res[res.length - 1], curr)) {
            const prev = res.pop()
            let newCurr = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])]
            res.push(newCurr)
        } else {
            res.push(curr)
        }
        i++
    }
    
    return res
    
};

var doesOverlap = function (a, b) {
    const a1 = a[0]
    const a2 = a[1]
    const b1 = b[0]
    const b2 = b[1]
    return !(
        a1 < b1 && a2 < b1
        || a1 > b1 && a1 > b2
    )   
}
