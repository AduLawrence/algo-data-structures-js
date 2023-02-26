class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * 
     * @param {Node} node 
     * @returns {Number}
     */
    insert(node) {
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;

            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        this.tail = node;
        return ++this.length;
    }

    /**
     * 
     * @param {Node} node 
     * @param {Number} pos 
     * @returns {Number|underfine}
     */
    insertAt(node, pos)
    {
        if(pos > this.length || pos < 0){
            return undefined;
        }

        if(pos === this.length)
        {
            return this.insert(node);
        }

        if(pos === 0){
            return this.unshift(node);
        }

        let currentNode = this.head;
        let previousNode = null;
        let count = -1;

        while(currentNode != null){
            count ++;

            if(count === pos){
                node.next = currentNode;
                previousNode.next = node;
                break;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return ++ this.length;
    }

    /**
     * 
     * @param {*} val 
     * @returns {Number}
     */
    indexOf(val)
    {
        let currentNode = this.head;
        let index = -1;
        while(currentNode != null){
            index ++;

            if(currentNode.val === val)
            {
                return index;
            }

            currentNode = currentNode.next;
        }
        
        return -1;
    }
    
    /**
     * 
     * @returns {Number|udefined}
     */
    shift()
    {
        if(!this.head){
            return undefined;
        }

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
        }

        return --this.length;
    }

    /**
     * 
     * @param {Node} node 
     * @returns {Number} length
     */
    unshift(node)
    {
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }

        return ++ this.length;
    }

    remove(pos)
    {
        if(pos < 0 || pos > this.length-1)
        {
            return undefined;
        }

        if(pos === 0){
            return this.shift();
        }

        if(pos === this.length - 1)
        {
            return this.pop();
        }

        let currentNode = this.head;
        let previousNode = null;
        let count = -1;

        while(currentNode.next != null)
        {
            count ++;
            if(count === pos){
                previousNode.next = currentNode.next;
                break;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return -- this.length;
    }

    /**
     * 
     * @returns {Number|undefined} length
     */
    pop() {
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            let currentNode = this.head;
            let previousNode = null;
            while (currentNode.next !== null) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = null;
            this.tail = previousNode;
        }

        return --this.length;
    }

    /**
     * 
     * @returns {array}
     */
    toList() {
        let currentNode = this.head;
        if (currentNode === null) {
            return [];
        }

        let arr = [];
        while (currentNode.next !== null) {
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        arr.push(currentNode.val);

        return arr;
    }
}

let node = new Node(1);
let list = new SinglyLinkedList();
list.insert(node);
