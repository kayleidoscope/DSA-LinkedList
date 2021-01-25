const {LinkedList, size, display, isEmpty, findPrevious, findLast} = require('./LinkedList')

function main() {
    let SLL = new LinkedList()

    SLL.insertFirst("Apollo")
    SLL.insertLast("Boomer")
    SLL.insertLast("Helo")
    SLL.insertLast("Husker")
    SLL.insertLast("Starbuck")

    SLL.insertLast("Tauhida")

    SLL.remove("Husker")

    // SLL.insertBefore("Athena","Boomer")

    SLL.insertAfter("Hotdog", "Helo")

    SLL.insertAt("Kat", 3)

    SLL.remove("Tauhida")

    let length = size(SLL)

    console.log(findLast(SLL))
    
}

main()