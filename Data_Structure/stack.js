class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.slice().reverse().join(' -> '));
    }
}

const stack = new Stack();
console.log('peek: ', stack.peek());
console.log('pop: ', stack.pop());
console.log('isEmpty: ', stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

console.log('peek: ', stack.peek());
console.log('isEmpty: ', stack.isEmpty());
console.log('pop: ', stack.pop());

stack.print();