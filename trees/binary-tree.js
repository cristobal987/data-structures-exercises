class NodeTree {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class NodeQueue {
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
        let node  = new NodeQueue(value, null)
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
        if(this.length > 0){
            this.length--
        }
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

}

class BinaryTree {
    constructor(value){
        this.root = new NodeTree(value)
        this.height = 1
    }

    insert = function(value){
        let node = null
        let queue = new Queue()
        queue.enqueue(this.root)

        while(queue.length > 0){
            node = queue.dequeue().value
            if (node.left == null) {
                node.left = new NodeTree(value);
                break;
            }else {
                queue.enqueue(node.left)
            }

            if (node.right == null) {
                node.right = new NodeTree(value);
                break;
            }else {
                queue.enqueue(node.right)
            }

        }
    }

    printTree = function(){
        let node = this.root
        let queue = new Queue()
        queue.enqueue(node)
        let arr = []
        while(queue.length > 0){
            node = queue.dequeue().value
            if (node.left != null) {
                queue.enqueue(node.left)
            }

            if (node.right != null) {
                queue.enqueue(node.right)
            }
            
            arr.push(node.value)
        }

        console.log(arr)
    }

}

let bt = new BinaryTree(5)
bt.insert(6)
bt.insert(4)
bt.insert(8)
bt.insert(7)
bt.insert(10)
bt.insert(1)
bt.insert(40)

bt.printTree()