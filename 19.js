/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const fakeHead = new ListNode()
    fakeHead.next = head
    
        
    let slow = fakeHead
    let fast = fakeHead
    
    let i = 0
    
    while (i < n) {
        i = i + 1
        fast = fast.next
    }
    
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }

    
    slow.next = slow.next.next
    
    return fakeHead.next
};
