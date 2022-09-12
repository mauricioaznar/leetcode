/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let carry = 0

    let output = new ListNode()

    const head = output

    while (l1 || l2 || carry === 1) {
        const left = l1 ? l1.val : 0
        const right = l2 ? l2.val : 0

        const sum = left + right + carry

        output.val = sum % 10

        carry = sum >= 10 ? 1 : 0

        output.next = (l1 && l1.next) || (l2 && l2.next) || (carry === 1) ? new ListNode() : null

        l1 = l1 && l1.next ? l1.next : null
        l2 = l2 && l2.next ? l2.next : null


        output = output.next
    }


    return head

};