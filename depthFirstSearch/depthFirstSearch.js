class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
};

/* recursiveDepthFirstForEach Pseudocode:
1. Will take in starting node as an input parameter, call it starting_node and callback as a 2nd parameter that'll be the callback function that
calls each node
2. Call the callback function and pass in the value of starting node (starting_node.value) as it's input parameter
3. Recursively call the function but pass in left side of the starting_node for the starting node (starting_node.left)
4. Recursively call the function but pass in right side of the starting_node for the starting node (starting_node.right)
 */

const recursiveDepthFirstForEach = (starting_node, callback) => {
    callback(starting_node.value)

    if (starting_node.left) {
        recursiveDepthFirstForEach(starting_node.left, callback);
    }
    if (starting_node.right) {
        recursiveDepthFirstForEach(starting_node.right, callback);
    };
}


/* Some console.log tests */
const root = new BinaryTreeNode(6);
root.insertLeft(10);
root.insertRight(18);
root.left.insertLeft(9);
root.right.insertRight(89);

const cb = (x) => console.log(x);

recursiveDepthFirstForEach(root, cb);  // should print 6 10 9 18 89
console.log();
// iterativeDepthFirstForEach(root, cb);  // should print 6 10 9 18 89
// console.log();

root.left.insertRight(15);
root.right.insertLeft(0);

recursiveDepthFirstForEach(root, cb);  // should print 6 10 9 15 18 0 89 
console.log();
// iterativeDepthFirstForEach(root, cb);  // should print 6 10 9 15 18 0 89  
// console.log();