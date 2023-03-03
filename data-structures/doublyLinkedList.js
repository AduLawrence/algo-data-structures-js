class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(node) {
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = this.tail.next;
        }

        return ++this.length;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        let popped;
        if (this.length === 1) {
            popped = this.head;

            this.head = null;
            this.tail = null;
        } else {
            popped = this.tail;

            this.tail = this.tail.previous;
            this.tail.next = null;
        }

        this.length--;

        return popped;
    }

    shift() {
        if ($this.length === 0) {
            return undefined;
        }

        let shifted = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
        }

        this.length--;
        return shifted;
    }

    unshift(node) {
        if (this.length === 0) {
            return this.insert(node)
        }

        this.head.previous = node;
        node.next = this.head;
        this.head = node;

        return ++this.length;
    }

    indexOf(val) {
        let currentNode = this.head;
        let index = -1;

        while (currentNode !== null) {
            index++;

            if (currentNode.val === val) {
                break;
            }
            currentNode = currentNode.next
        }

        return index;
    }

    insertAt(node, pos) {
        if(pos < 0 || pos > this.length){
            return undefined;
        }

        if (pos === 0) {
            return this.unshift(node);
        }

        if (pos === this.length) {
            return this.insert(node);
        }

        if (pos <= Math.floor(this.length / 2)) {
            let currentNode = this.head;
            let count = -1;

            while (currentNode !== null) {
                count ++;

                if (count === pos) {
                    currentNode.previous.next = node;
                    node.next = currentNode;
                    node.previous = currentNode.previous;
                    currentNode.previous= node;
                    
                    break;
                }

                currentNode = currentNode.next
            }
        } else {
            let currentNode = this.tail;
            let count = this.length;

            while (currentNode !== null) {
                count --;

                if (count === pos) {
                    currentNode.previous.next = node;
                    node.next = currentNode;
                    node.previous = currentNode.previous;
                    currentNode.previous= node;
                    
                    break;
                }

                currentNode = currentNode.previous
            }
        }

        return ++this.length;
    }
}