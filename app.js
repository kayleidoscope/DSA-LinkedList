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

    SLL.insertFirst("7")
    SLL.insertLast("1")
    SLL.insertLast("3")
    SLL.insertLast("5")
    SLL.insertLast("2")


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
        return false
    } else if (repeat === true) {
        return true
    }
}

// console.log(isThisACycle(cycleListMaker()))

function isThisSorted(list) {
    if (isThisACycle(list)) {
        return "A list that contains a cycle cannot be sorted."
    }
    let length = size(list)
    let currNode = list.head
    for (let i = 0; i < length; i++) {
        if (currNode === null || currNode.next === null) {
            break
        }
        if (currNode.value > currNode.next.value) {
            return false
        }
        currNode = currNode.next
    }
    return true
}

function sortList (list) {
    if (isThisACycle(list)) {
        return "A list that contains a cycle cannot be sorted."
    }
    let length = size(list)
    let head = list.head

    while (!isThisSorted(list)) {
        //dealing with the head
        if (head.value > head.next.value) {
            newHead = head.next
            newHeadNext = head
            oldHeadNext = newHead.next
            list.head = newHead
            list.head.next = newHeadNext
            list.head.next.next = oldHeadNext
        }
        let currNode = list.head.next
        for (let i = 0; i < length; i++) {
            if (i === 1) {
                console.log(display(size(list), list))
                break
            }
            if (currNode.value > currNode.next.value) {
                let previousNode = findPrevious(currNode, list)
                let nextNode = currNode.next
                previousNode.next = nextNode
                currNode.next = nextNode.next
                nextNode.next = currNode
            }
            currNode = currNode.next
        }
        // console.log(display(size(list), list))
    }

}

console.log(sortList(listMaker()))