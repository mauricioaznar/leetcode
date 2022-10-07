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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) { 
    const res = []   

    helper(res, root, 0)

    res.reverse()
    
    return res
};

var helper = function (res, node, level) {
    if (!node) {
        return
    }

    if (!res[level]) {
        res.push([node.val])
    } else {
        res[level].push(node.val)
    }

    helper(res, node.left, level + 1)
    helper(res, node.right, level + 1)
}
