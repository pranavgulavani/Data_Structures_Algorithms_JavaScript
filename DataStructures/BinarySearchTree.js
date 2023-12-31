class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }
}

module.exports = {
    Node : Node,
    BinarySearchTree:BinarySearchTree

}