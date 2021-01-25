class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    // findByNext(next) {
    //     //Start at the head
    //     let currNode = this.head;
    //     //If the list is empty
    //     if (!this.head) {
    //         return null;
    //     }
    //     //Check for the item
    //     while(currNode.next !== next) {
    //         /* Return null if it's the end of the list
    //         and the item is not on the list */
    //         console.log({currNode: currNode, next: currNode.next.value})
    //         if (currNode.next === null) {
    //             return null;
    //         } else {
    //             //Otherwise, keep looking
    //             currNode = currNode.next
    //         }
    //     }
    //     //Found it
    //     return currNode;
    // }
    
    insertBefore(item, before) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let beforeNode = this.find(before)

            nextNode.next = new _Node(item, beforeNode)
        }
    }

    insertAfter(item, after) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let afterNode = this.find(after)
            let nextNode = afterNode.next

            afterNode.next = new _Node(item, nextNode)
        }
    }

    insertAt(item, position) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let currNode = this.head;
            let currentPosition = 0
            while(currentPosition !== position) {
                currentPosition++;
                if (!currNode) {
                    return null
                }
                currNode = currNode.next;
            }
            this.insertAfter(item, currNode.value)
        }
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

module.exports = LinkedList