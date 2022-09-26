/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const res = []
    
    intervals.sort((a, b) => {
        return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]  
    })
    
    intervals.forEach((curr) => {
        let newCurr = curr
        while (res.length > 0 && doesOverlap(res[res.length - 1], newCurr)) {
            const prev = res.pop()
            const left = Math.min(prev[0], newCurr[0])
            const right = Math.max(prev[1], curr[1])
            newCurr = [left, right]
        }
        res.push(newCurr)
    })
    
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
