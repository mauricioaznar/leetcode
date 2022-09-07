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
 */
var BSTIterator = function(root) {
    this.stack = []
    this.root = root
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let root = this.root
    while (root) {
        this.stack.push(root)
        root = root.left
    }
    root = this.stack.pop()
    const res = root.val
    this.root = root.right
    return res

};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.root || this.stack.length > 0
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */