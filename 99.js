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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let pre = null
    let first = null
    let second = null
    let node = root

    while (node) {
        if (!node.left) {
            if (pre !== null && pre.val > node.val) {
                if (first === null) {
                    first = pre
                    second = node
                } else {
                    second = node
                }
            }

            pre = node
            node = node.right
        } else {
            let pred = node.left
            while (pred.right && pred.right !== node) {
                pred = pred.right
            }

            if (pred.right === node) {
                pred.right = null

                if (pre !== null && pre.val > node.val) {
                    if (first === null) {
                        first = pre
                        second = node
                    } else {
                        second = node
                    }
                }

                pre = node
                node = node.right
            } else {
                pred.right = node
                node = node.left
            }
        }
    }
    if (first && second) {
        let t = first.val
        first.val = second.val
        second.val = t
    }
};
