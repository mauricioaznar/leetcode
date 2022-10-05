/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let res = generate(1, n)

    return res
};

var generate = function(start, end) {
    if (start === end) {
        return [new TreeNode(start)]
    }

    if (end < start) {
        return [null]
    }

    const res = []

    for (let i = start; i <= end; i++) {
        const left = generate(start, i - 1)
        const right = generate(i + 1, end)

        for (let l = 0; l < left.length; l++) {
                for (let r = 0; r < right.length; r++) {
                    const root = new TreeNode(i)
                    root.left = left[l]
                    root.right = right[r]
                    res.push(root)
                }
        }
    }

    return res
}
