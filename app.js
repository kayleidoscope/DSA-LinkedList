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

function fromEnd(list, n) {
    let currNode = findLast(list)
    let fromEnd = n;
    for (let i = 0; i < fromEnd; i++) {
        currNode = findPrevious(currNode, list)
    }
    return currNode
}

// console.log(fromEnd(listMaker(), 3))

function findMiddleElement(list) {
    let length = size(list)
    if (length % 2 === 0) {
        return "There are an even number of items in this list, and therefore no middle item."
    }
    let half = (length / 2) - 0.5
    return fromEnd(list, half)
}

// console.log(findMiddleElement(listMaker()))

function cycleListMaker() {
    let cycledList = new LinkedList()

    cycledList.insertFirst("A")
    cycledList.insertLast("B")
    cycledList.insertLast("C")
    cycledList.insertLast("D")
    let aNode = cycledList.find("A")
    cycledList.insertCycle("E", aNode)

    return cycledList
}

function isThisACycle(list) {
    let repeat = false;
    let currNode = list.head
    let values = []
    let detecting = true;

    while (detecting) {
        if (currNode.next === null) {
            detecting = false;
        }
        for (let i = 0; i < values.length; i++) {
            if (values[i] === currNode.value) {
                repeat = true
                detecting = false
            }
        }
        let value = currNode.value
        values.push(value)
        currNode = currNode.next
    }
    if (repeat === false) {
        return "This list does not contain a cycle."
    } else if (repeat === true) {
        return "This list does contain a cycle."
    }
}

console.log(isThisACycle(cycleListMaker()))