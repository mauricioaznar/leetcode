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
var sortList = function(head) {
    if (!head || !head.next) {
        return head
    }
    const left = head
    const middle = getMiddle(left)
    const right = middle ? middle.next : null
    if (middle.next) {
        middle.next = null;
    }

    return merge(sortList(left), sortList(right))
};


var getMiddle = function(node) {
    let slow = node;
    let fast = node;
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

var merge = function (left, right) {
    let dummy = new ListNode(0, null)
    let curr = dummy

    let leftCurr = left
    let rightCurr = right

    while (leftCurr || rightCurr) {

        if (leftCurr && rightCurr) {
            if (leftCurr.val < rightCurr.val) {
                curr.next = leftCurr
                leftCurr = leftCurr.next
            } else {
                curr.next = rightCurr
                rightCurr = rightCurr.next
            }
        } else if (leftCurr && !rightCurr) {
            curr.next = leftCurr
            leftCurr = leftCurr.next

        } else if (!leftCurr && rightCurr) {
            curr.next = rightCurr
            rightCurr = rightCurr.next
        }
        curr = curr.next
        curr.next = null

    }


    return dummy.next
}


