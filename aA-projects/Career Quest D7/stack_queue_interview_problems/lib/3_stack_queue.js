// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(newNode) {
        if (!this.length) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let tmp = this.top;
            this.top = newNode;
            this.top.next = tmp;
        }
        ++this.length;
        return this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.length === 1) { // or if (this.top === this.bottom)
            this.bottom = null;
        }

        let tmp = this.top;
        this.top = tmp.next;
        --this.length;
        return tmp;
    }

    size() {
        return this.length;
    }
}

class StackQueue { // this is a queue behavior
    constructor() {
        this.front = null;
        this.back = null;
        this.inStack = new Stack();
        this.outStack = new Stack();
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }

        this.inStack.push(new Node(val));
        return this.size();
    }

    dequeue() {
        if (!this.front) return null;
        // let tmp;
        if (this.size() === 1) {
            this.front = null;
            this.back = null;
        } else {
            // tmp = this.front;
            this.front = this.front.next;
        }

        if (!this.outStack.size()) {
            while (this.inStack.size() > 0) {
                let ele = this.inStack.pop();
                this.outStack.push(ele);
            }
        }

        const removed = this.outStack.pop();
        return removed; // or return tmp, lolz
    }

    size() {
        return this.inStack.length + this.outStack.length;
    }

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
