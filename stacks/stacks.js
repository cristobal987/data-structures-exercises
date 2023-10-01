console.log("Stacks")


class Node {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}

class Stack {
    constructor(){
        this.top = null
        this.length = 0
    }

    push = function(value){
        this.top = new Node(value, this.top)
        this.length++
    }

    pop = function(){
        let node = this.top
        this.top = this.top.next
        this.length--
        return node
    }

    peek = function(){
        return this.top
    }

    lookup = function (value) {
        let node = this.top
        while(node != null){
            if(node.value = value){
                return node
            }
            node = node.next
        }
    }

    getArray = function(){
        let node = this.top
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



let pila = new Stack()
pila.push(12)
pila.push(6)
pila.push(2)
pila.push(24)
pila.push(111)

print("let pila = new Stack()" + "\n" +
"pila.push(12)" + "\n" +
"pila.push(6)" + "\n" +
"pila.push(2)" + "\n" +
"pila.push(24)" + "\n" +
"pila.push(111)")
print("");
print(pila.getArray().toString())
print("")


print("pila.peek(): " + pila.peek().value)
print("");


print("pila.length: " + pila.length)
print("pila.pop(): " + pila.pop().value)

print(pila.getArray().toString())
print("");

print("pila.length: " + pila.length)
print("")

print("pila.lookup(6): " + JSON.stringify(pila.lookup(6)))
print("");


