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
var insertionSortList = function(head) {
    if (!head || !head.next) {
        return head
    }

    let dummy = new ListNode(0, head)

    let prev = head
    let curr = head.next

    while (curr) {
        if (prev && curr && curr.val >= prev.val) {
            prev = curr
            curr = curr.next
            continue;
        }

        let temp = dummy

        while (temp && temp.next && curr && curr.val > temp.next.val) {
            temp = temp.next
        }

        prev.next = curr.next
        curr.next = temp.next
        temp.next = curr
        curr = prev.next




    }

    return dummy.next
};