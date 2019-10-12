const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if (!this.length) {
            const node = new Node(data);
            this._head = node;
            this._tail = node;
        } else {
            const node = new Node(data, this._tail);
            this._tail.next = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head && this._head.data;
    }

    tail() {
        return this._tail && this._tail.data;
    }

    at(index) {
        let node = this._head;

        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        return node.data;
    }

    insertAt(index, data) {
        if (this.length === 0) {
            this.append(data);
            return this;
        }
        let node = this._head;

        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        const newNode = new Node(data, node.prev, node);
        node.prev.next = newNode;
        node.prev = newNode;


        return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        let node = this._head;
        if (this.length === 1) {
            this.clear();
            return this;
        }
        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;

        return this;
    }

    reverse() {
        let current = this._head;
        this._head = this._tail;
        this._tail = current;

        while (current) {
            const next = current.next;
            current.next = current.prev;
            current.pref = next;
            current = next;
        }

        return this;
    }

    indexOf(data) {
        let node = this._head;
        for (let i = 0; i < this.length; i++) {

            if (node.data === data) {
                return i;
            }

            node = node.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
