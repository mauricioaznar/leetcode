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
var deleteDuplicates = function(head) {
    

    let curr = head

    while(curr) {

        if (curr.next && curr.next.val === curr.val) {
            let next = curr.next
            while (next && next.next && next.next.val === curr.val) {
                next = next.next
            }
            next = next.next
            curr.next = next
            curr = curr.next
        } else {
            curr = curr.next
        }
    }
    return head
};
