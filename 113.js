0/5
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const res = []
    helper(root, res, targetSum, 0, [])
    return res
};

var helper = function (node, res, target, sum, path) {
    if (!node) {
        return
    }

    const currSum = node.val + sum
    const currPath = [...path, node.val]

    if (!node.right && !node.left) {
        if (currSum !== target) {
            return            
        }

        res.push(currPath)
        return 
    }

    node.left && helper(node.left, res, target, currSum, currPath)
    node.right && helper(node.right, res, target, currSum, currPath)
}
