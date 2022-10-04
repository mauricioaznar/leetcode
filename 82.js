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
    
    const fakeHead = new ListNode()
    fakeHead.next = head

    let prev = fakeHead

    while(prev.next) {
        console.log(prev.val)
        if (prev.next && prev.next.next && prev.next.val === prev.next.next.val) {
            console.log(prev.val, prev.next.val, prev.next.next.val)
            let replacement = prev.next
            while (replacement && prev.next.val === replacement.val) {
                replacement = replacement.next
            }

            prev.next = replacement
        } else {
            prev = prev.next
        }
    }



    return fakeHead.next
};
