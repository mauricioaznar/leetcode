/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return null
    }
    const map = new Map()
    const root = new Node(node.val)
    map.set(node.val, root)
    const queue = [node]
    while (queue.length > 0) {
        const curr = queue.shift()
        for (const neighbor of curr.neighbors) {
            if (!map.get(neighbor.val)) {
                map.set(neighbor.val, new Node(neighbor.val))
                queue.push(neighbor)
            }
            map.get(curr.val).neighbors.push(map.get(neighbor.val))
        }
    }
    return root;
};