/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const fakeHead = new ListNode()
    fakeHead.next = head

    let n = right - left
    let i = 1
    let prev = fakeHead

    while (
        i < left
        ) {
        prev = prev.next
        i++
    }

    i = 1

    let cur = prev.next
    while (i <= n) {
        const next = cur.next
        const temp = next.next
        cur.next = temp
        next.next = prev.next
        prev.next = next
        i++
    }

    return fakeHead.next;



};