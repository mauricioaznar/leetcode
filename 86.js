/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const left = new ListNode()
    const right = new ListNode()

    let curr = head
    let currLeft = left
    let currRight = right

    while (curr) {
        if (curr.val < x) {
            currLeft.next = curr
            currLeft = currLeft.next
            curr = curr.next
            currLeft.next = null
        } else {
            currRight.next = curr
            currRight = currRight.next
            curr = curr.next
            currRight.next = null
        }
    }

    currLeft.next = right.next

    return left.next
};
