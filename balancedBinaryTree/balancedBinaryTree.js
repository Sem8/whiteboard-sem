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

/*Pseudocode:
Takes in startNode as an argument.
1. Make an if conditional to see if startNode.left and startNode.right does not exist then return true. This can be a base case
2. Make another if condition to see if startNode.left exists but not startNode.right and vice versa (or startNode.left doesn't exist but
startNode.right does exist) then return false
3. Make a 3rd if statement of if startNode.left and startNode.right exists then recursively call the checkBalanced function on the left side 
of startNode (startNode.left) and then also recursively call the checkBalanced function on the right side of startNode (startNode.right)
 */

const checkBalanced = (startNode) => {
    // 1st base case to return true
    if ((startNode.left == null && startNode.right == null) || (startNode.left && startNode.right)) {
        return true;
    };
    // 2nd base case that returns false
    if ((startNode.left && startNode.right == null) || (startNode.left == null && startNode.right)) {
        return false;
    }
    // recursive function call       
        checkBalanced(startNode.left);
        checkBalanced(startNode.right);        

}

// console log tests

// const root = new BinaryTreeNode(5);
// console.log(checkBalanced(root)); // should print true

// root.insertLeft(10);
// console.log(checkBalanced(root)); // should print false

// root.insertRight(11);
// console.log(checkBalanced(root)); // should print true;

const root = new BinaryTreeNode(6);
console.log(checkBalanced(root)); // should print true

root.insertLeft(10);
console.log(checkBalanced(root)); // should print false

root.insertRight(18);
console.log(checkBalanced(root)); // should print true

root.left.insertLeft(9);
console.log(checkBalanced(root)); // should print false

root.right.insertRight(89);
console.log(checkBalanced(root)); // should print false

root.left.insertRight(15);
root.right.insertLeft(0);
console.log(checkBalanced(root)); // should print true

