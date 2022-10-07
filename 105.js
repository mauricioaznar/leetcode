/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    if (inorder.length === 0) {
        return null
    }

    const val = preorder.shift()



    

    const index = inorder.findIndex((e) => e === val)


    const root = new TreeNode(val)
    root.left = buildTree(preorder, inorder.slice(0, index))
    root.right = buildTree(preorder, inorder.slice(index + 1, inorder.length))

    return root
};
