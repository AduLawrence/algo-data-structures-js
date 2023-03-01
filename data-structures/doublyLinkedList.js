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
}