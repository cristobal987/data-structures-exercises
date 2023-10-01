console.log("Queues")


class Node {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue = function(value){
        let node  = new Node(value, null)
        this.length++

        if(this.first == null){
            this.first = node
            this.last = this.first
            return;
        }

        this.last.next = node
        this.last = node
                
    }

    dequeue = function (){
        let node = this.first
        this.first = node.next
        if(this.first == null){
            this.last = null
        }
        this.length--
        return node
    }

    peek = function(){
        return this.first
    }

    lookup = function(value){
        let node = this.first
        while(node != null){
            if(node.value == value){
                return node
            }
            node = node.next
        }
    }

    getArray = function(){
        let node = this.first
        let arr = []

        while(node != null){
            arr.push(node.value)
            node = node.next
        }
        return arr
    }
}

function print(str){
    let content = document.getElementById('content')
    content.innerText += str + '\n'
}

let cola = new Queue()
cola.enqueue(4)
cola.enqueue(10)
cola.enqueue(21)
cola.enqueue(130)
cola.enqueue(49)

print(`let cola = new Queue()
cola.enqueue(4)
cola.enqueue(10)
cola.enqueue(21)
cola.enqueue(130)
cola.enqueue(49)

//cola: ` + cola.getArray().toString() )

let dequeuenode = cola.dequeue()

let peeknode = cola.peek()

let lookupnode = cola.lookup(21)

print(`
let dequeuenode = cola.dequeue()
//dequeuenode: `+  dequeuenode.value + `
//cola: `+ cola.getArray().toString() + `

let peeknode = cola.peek()
//peeknode: `+  peeknode.value + `

let lookupnode = cola.lookup(21)
//lookupnode: `+  lookupnode.value + `
`)



