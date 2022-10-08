/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    return helper(head, 0)
};


var helper = function (node, level) {
    if (!node) {
        return null
    }

    if (!node.next) {
        return new TreeNode(node.val)
    }

    let slow = node
    let prev = null
    let fast = node 

    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next
        prev = slow
        slow = slow.next
    }

    const root = new TreeNode(slow.val)

    if (prev) {
        prev.next = null;
    }

    const temp = slow.next
    slow.next = null
    root.left = slow !== node ? helper(node) : null
    root.right = helper(temp)
    console.log(root)

    return root
}
