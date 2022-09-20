/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if (!head) return head

    let curr = head

    while (curr && curr.next) {
        const next = curr.next

        const temp = curr.val
        curr.val = next.val
        next.val = temp


        curr = curr.next.next
    }

    return head
};