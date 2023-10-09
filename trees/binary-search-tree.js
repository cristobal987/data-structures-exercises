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

class BinarySearchTree {
    constructor(value){
        this.root = new NodeTree(value)
        this.height = 1
    }

    insert = function(value){
        let node = null
        let count = 0
        let queue = new Queue()
        queue.enqueue(this.root)
        while(queue.length > 0){
            node = queue.dequeue().value
            if(node.value > value){
                if (node.left == null) {
                    node.left = new NodeTree(value);
                    node.left.level = count + 1
                    break;
                }else {
                    queue.enqueue(node.left)
                }
            }else{
                if (node.right == null) {
                    node.right = new NodeTree(value);
                    node.right.level = count + 1
                    break;
                }else {
                    queue.enqueue(node.right)
                }
            }
            count++
        }
        this.height = count + 1
    }
    
    printTree = function(){
        let node = this.root
        let queue = new Queue()
        queue.enqueue(node)
        
        let str = ""
        let level = 0
        let tabsCount = this.height
        let spaceCount = this.height * 2

        while(queue.length > 0){
            node = queue.dequeue().value
            
            if (node.left != null) {
                queue.enqueue(node.left)
            }

            if (node.right != null) {
                queue.enqueue(node.right)
            }

            if(node.level > level){
                level++
                tabsCount--
                if(tabsCount < 0){
                    tabsCount = 0
                }
                spaceCount--
                if(spaceCount < 1){
                    spaceCount = 1
                }

                str += "\n"
            }

            str += (" ".repeat(spaceCount).repeat(tabsCount)) + node.value + "   "
        }
        console.log("Tree height: " + (this.height))
        console.log(str)
    }

    BreathFirstSearch = function() {
        let currentNode = this.root
        let list = []
        let queue = new Queue()
        queue.enqueue(currentNode)

        while(queue.length > 0){
            currentNode = queue.dequeue().value
            list.push(currentNode.value)
            if(currentNode.left){
                queue.enqueue(currentNode.left)
            }
            if(currentNode.right){
                queue.enqueue(currentNode.right)
            }
        }
        return list
    }

    DFSInorder = function(){
        return traverseInOrder(this.root, [])
    }

    DFSPreorder = function(){
        return traversePreOrder(this.root, [])
    }

    DFSPostorder = function(){
        return traversePostOrder(this.root, [])
    }

}

function traverseInOrder(node, list){
    if(node.left){
        traverseInOrder(node.left, list)
    }
    list.push(node.value)
    if(node.right){
        traverseInOrder(node.right, list)
    }
    return list
}

function traversePreOrder(node, list){
    list.push(node.value)
    if(node.left){
        traversePreOrder(node.left, list)
    }
    if(node.right){
        traversePreOrder(node.right, list)
    }
    return list
}

function traversePostOrder(node, list){
    if(node.left){
        traversePostOrder(node.left, list)
    }
    if(node.right){
        traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list
}

/*const bst = new BinarySearchTree(15)
bst.insert(21)
bst.insert(10)
bst.insert(5)
bst.insert(12)
bst.insert(30)
bst.insert(35)
bst.insert(28)
bst.insert(11)
bst.insert(13)
bst.insert(4)
bst.insert(6)
bst.insert(17)
bst.insert(18)
bst.insert(16)

bst.printTree()*/
const bst = new BinarySearchTree(9)
bst.insert(4)
bst.insert(20)
bst.insert(1)
bst.insert(6)
bst.insert(15)
bst.insert(170)

console.log(bst.BreathFirstSearch().toString())
console.log(bst.DFSInorder().toString())
console.log(bst.DFSPreorder().toString())
console.log(bst.DFSPostorder().toString())