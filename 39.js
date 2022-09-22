/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []

    recurse(candidates, target, res, [], 0, 0)


    return res


};

var recurse = function(candidates, target, res, combination, sum, i) {


    if (sum >= target || i === candidates.length) {
        if (sum === target) {
            res.push(combination)
        }
        return;
    }

    const num = candidates[i]



    recurse(candidates, target, res, [...combination, num], sum + num, i)

    recurse(candidates, target, res, [...combination], sum, i + 1)
}