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
 * @return {number}
 */
var sumNumbers = function(root) {
    const paths = []
    helper(root, paths, '')


    return paths.map(p => Number(p)).reduce((acc, curr) => acc + curr, 0)

};

var helper = function (node, paths, path) {
    if (!node) {
        return;
    }

    const val = node.val
    const currPath = `${path}${val}`

    if (!node.left && !node.right) {
        paths.push(currPath)
        return
    }

    if (node.left) {
        helper(node.left, paths, currPath)
    }

    if (node.right) {
        helper(node.right, paths, currPath)
    }

    return;
}
