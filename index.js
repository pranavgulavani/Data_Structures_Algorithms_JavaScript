const fib = require("./Algorithms/fibonacci")
const facto = require("./Algorithms/factorial")
const BinaryTree = require("./DataStructures/BinarySearchTree")

// console.log(fib(7))
// console.log(facto(5))

let bts = new BinaryTree.BinarySearchTree()

console.log("is the tree empty ?"+ bts.isEmpty())