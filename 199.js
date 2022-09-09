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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const res = []

    move(root, res, 0)



    return res

};


var move = function (node, res, level) {
    if (node === null) {
        return;
    }


    if (level === res.length) {
        res.push(node.val)
    }


    move(node.right, res, level + 1)
    move(node.left, res, level + 1)
}