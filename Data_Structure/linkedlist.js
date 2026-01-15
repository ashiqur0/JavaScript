class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error('Index out of bound');
        }

        if (index === 0) {
            return this.prepend(value);
        }

        if (index === this.length) {
            return this.append(value);
        }

        const leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;

        const newNode = new Node(value);
        leadingNode.next = newNode;
        newNode.next = holdingNode;

        this.length++;
    }

    remove(index) {
        if (index === 0) {
            const removedItem = this.head.value;
            this.head = this.head.next;
            if (this.length === 0) {
                this.tail = null;
            }

            this.length--;
            return removedItem;
        }


        const leadingNode = this._traverseToIndex(index - 1);
        const nodeToRemove = leadingNode.next;
        leadingNode.next = nodeToRemove.next;

        if (leadingNode.next === null) {
            this.tail = leadingNode;
        }

        this.length--;
        return nodeToRemove.value;
    }

    // private helper method
    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    print() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(30);
list.insert(2, 200);
list.remove(3);
list.print();