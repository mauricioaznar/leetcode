/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let fakeHead = new ListNode()
    
    let curr = fakeHead
    
    
    let lead1 = list1
    let lead2 = list2
    
    while (lead1 && lead2) {
        
        if (lead1.val <= lead2.val) {
            const temp = lead1
            lead1 = lead1.next 
            temp.next = null
            curr.next = temp
            curr = curr.next
            
        } else {
            const temp = lead2
            lead2 = lead2.next
            temp.next = null
            curr.next = temp
            curr = curr.next
        }
    }
    
    while (lead1) {
        const temp = lead1
        lead1 = lead1.next
        temp.next = null
        curr.next = temp
        curr = curr.next
    }
    
    while (lead2) {
        const temp = lead2
        lead2 = lead2.next
        temp.next = null
        curr.next = temp
        curr = curr.next
    }
    
    
    return fakeHead.next
};
