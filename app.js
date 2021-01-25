const {LinkedList, size, display, isEmpty, findPrevious, findLast} = require('./LinkedList')

function listMaker() {
    let SLL = new LinkedList()

    // SLL.insertFirst("Apollo")
    // SLL.insertLast("Boomer")
    // SLL.insertLast("Helo")
    // SLL.insertLast("Husker")
    // SLL.insertLast("Starbuck")

    // SLL.insertLast("Tauhida")

    // SLL.remove("Husker")

    // // SLL.insertBefore("Athena","Boomer")

    // SLL.insertAfter("Hotdog", "Helo")

    // SLL.insertAt("Kat", 3)

    // SLL.remove("Tauhida")

    // let length = size(SLL)

    SLL.insertFirst("A")
    SLL.insertLast("B")
    SLL.insertLast("C")
    SLL.insertLast("D")
    SLL.insertLast("E")


    return SLL
    
}

/*

Mystery program:
I don't know.

*/

// function reverseList(list) {
//     let head = list.head
//     //find the second node
//     let currNode = head.next
    
//     //change the first node then store it to reuse in the the iteration
//     head.next = null
//     let previousNode = head
    
//     while (currNode.next !== null) {
//         //set nextNode aside for later use
//         let nextNode = currNode.next
//         //set currNode's next to the node before it
//         currNode.next = previousNode
//         //move to the next node
//         previousNode = currNode
//         currNode = nextNode
//         if (currNode.next === null) {
//             list.head = currNode
//             let lastNode = currNode
//             lastNode.next = previousNode
//             console.log(display(list))
//             return list
//         }
//         break
//     }
// }

// reverseList(listMaker())

function thirdFromEnd(list) {
    let currNode = findLast(list)
    let fromEnd = 3;
    for (let i = 0; i < fromEnd; i++) {
        currNode = findPrevious(currNode, list)
    }
    return currNode
}

console.log(thirdFromEnd(listMaker()))