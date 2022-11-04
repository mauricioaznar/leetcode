/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

    const map = new Map()



    let curr = head

    while (curr) {
        map.set(curr, new Node(curr.val))
        curr = curr.next
    }

    curr = head

    while (curr) {
        const copy = map.get(curr)

        copy.next = curr.next ? map.get(curr.next) : null
        copy.random = curr.random ? map.get(curr.random) : null

        curr = curr.next


    }

    return map.get(head)
};