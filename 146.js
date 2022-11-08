"use strict";
0 / 5;
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    remove(node) {
        if (!node.prev && !node.next) {
            this.head = null;
            this.tail = null;
        }
        else if (!node.prev) {
            const next = node.next;
            next.prev = null;
            this.head = next;
        }
        else if (!node.next) {
            const prev = node.prev;
            prev.next = null;
            this.tail = prev;
        }
        else {
            const prev = node.prev;
            const next = node.next;
            prev.next = next;
            next.prev = prev;
        }
        this.length = this.length - 1;
    }
    insert(key, value) {
        const node = new Node(key, value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length = this.length + 1;
        return node;
    }
}
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = {};
        this.dll = new DoubleLinkedList();
    }
    get(key) {
        if (!this.map[key]) {
            return -1;
        }
        this.dll.remove(this.map[key]);
        const node = this.map[key];
        this.map[key] = this.dll.insert(key, node.val);
        return node.val;
    }
    put(key, value) {
        if (this.map[key]) {
            this.dll.remove(this.map[key]);
        }
        this.map[key] = this.dll.insert(key, value);
        if (this.dll.length > this.capacity) {
            const head = this.dll.head;
            this.dll.remove(head);
            delete this.map[head.key];
        }
    }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */