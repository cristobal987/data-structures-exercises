console.log("Doubly linked list")


class Node {
    constructor(value, next, before){
        this.value = value
        this.next = next
        this.before = before
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append = function (value) {
        this.length++

        if(this.head == null) {
            this.head = new Node(value, null, null)
            this.tail = this.head
            return;
        }

        let newNode = new Node(value, null, this.tail)
        this.tail.next = newNode
        this.tail = newNode
        
    }

    prepend = function (value) {
        const newNode = new Node(value, this.head, null)
        this.head.before = newNode
        this.head = newNode
        this.length++
    }

    lookup = function (value) {
        let node = this.head
        while(node != null){
            if(node.value == value){
                return node
            }
            node = node.next
        }
        return null
    }

    insert = function (value, position){
        if(position > this.length){
            return null
        }

        let node = this.head
        let index = 1
        while(node != null){
            
            if(index == (position - 1)){
                let newNode = new Node(value, node.next, node)
                node.next.before = newNode
                node.next = newNode
                this.length++

                return node
            }
            node = node.next
            index++
        }
    }

    delete = function (position) {
        let node = this.head
        let nodeToDelete
        let index = 1
        while(node != null){
            if(index == position - 1){
                nodeToDelete = node.next
                node.next = nodeToDelete.next
                nodeToDelete.next.before = node
                this.length--

                return nodeToDelete
            }
            node = node.next
            index++
        }
    }

    getArray = function () {
        let list = []
        let node = this.head
        while(node != null){
            list.push(node.value)
            node = node.next
        }
        return list
    }

    getArrayReverse = function () {
        let list = []
        let node = this.tail
        while(node != null){
            list.push(node.value)
            node = node.before
        }
        return list
    }
    
}

function print(str){
    let content = document.getElementById('content')
    content.innerText += str + '\n'
}

let lista = new LinkedList()
lista.append(10)
lista.append(112)
lista.append(1)
lista.append(8)
lista.append(5)
lista.append(210)

print("let lista = new LinkedList()" + "\n" +
"lista.append(10)" + "\n" +
"lista.append(112)" + "\n" +
"lista.append(1)" + "\n" +
"lista.append(8)" + "\n" +
"lista.append(5)" + "\n" +
"lista.append(210)")
print("");
print(lista.getArray().toString())
print(lista.getArrayReverse().toString())
print("")

lista.prepend(7)
print("lista.prepend(7)")
print(lista.getArray().toString())
print(lista.getArrayReverse().toString())
print("");

lista.insert(4, 4)
print("lista.insert(4, 4)")
print(lista.getArray().toString())
print(lista.getArrayReverse().toString())
print("");

print("lista.length: " + lista.length + "\n")

lista.delete(4)
print("lista.delete(4)")
print(lista.getArray().toString())
print(lista.getArrayReverse().toString())
print("");

print("lista.length: " + lista.length + "\n")

let node = lista.lookup(7)
print("lista.lookup(7): " + node.value + "\n")
console.log(node)

