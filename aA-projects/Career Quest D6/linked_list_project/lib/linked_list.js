// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode
            this.tail = newNode;
        }
        ++this.length;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        let prevTail = this.tail;
        
        if (this.length === 0){
            return undefined;
        }

        if (this.length === 1){
            this.head = null
            this.tail = null
            this.length = 0
            return
        }
        let currentNode = this.head;
        // console.log(currentNode)

        if (this.length === 2){
            this.head.next = null;
            this.tail = this.head;
            --this.length;
            return prevTail;
        }
        
        
        for(let i = 0; i < this.length - 2; i++){
            currentNode = currentNode.next;
        }
        // console.log(currentNode)
        // console.log(this)
        this.tail = currentNode;
        this.tail.next = null;
        --this.length;
        return prevTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        ++this.length;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let prevHead = this.head;

        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        let currentNode = this.head;
        // console.log(currentNode)

        if (this.length === 2) {
            this.head = this.tail;
            --this.length;
            return prevHead;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        for( let i = 0; i < this.length; i++ ){
            if (currentNode.value === target) {
                return true;
            }
            currentNode = currentNode.next
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length) return null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }

        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index > this.length) return false;
        let ele = this.get(index);
        if (ele){
            ele.value = val;
            return true;
        } else return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length) return false;
        let before = this.get(index - 1);
        let at = this.get(index);
        let newNode = new Node(val);
        if (at){
            before.next = newNode;
            newNode.next = at;
            ++this.length;
            return true;
        } else return false
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length) return undefined;
        let before = this.get(index - 1);
        let at = this.get(index);
        if (at) {
            before.next = at.next;
            --this.length;
            return at;
        } else return undefined;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
