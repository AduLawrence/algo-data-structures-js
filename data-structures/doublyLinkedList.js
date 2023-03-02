class Node
{
    constructor(val){
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(node)
    {
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = this.tail.next;
        }

        return ++this.length;
    }

    pop()
    {
        if(this.length === 0){
            return undefined;
        }

        let popped;
        if(this.length === 1){
            popped = this.head;

            this.head = null;
            this.tail = null;
        }else{
            popped = this.tail;

            this.tail = this.tail.previous;
            this.tail.next = null;
        }

        this.length --;

        return popped;
    }
}