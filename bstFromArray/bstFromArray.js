// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr = [1, 2, 3, 4, 5, 6];
// let halfArr = Math.floor(arr.length / 2);
// console.log(halfArr);


/*Pseudocode:
1. Make a helper function called getMiddleElement which will take an input array as an argument parameter. Inside the getMiddleElement helper
function, get the middle element from its input array by dividing the length of the input array by 2 then flooring the value and call it 
middleIndex,
2. Still inside getMiddleElement helper function, return the middle element from input arr at it's calculated middleIndex.
3. Outside, getMiddleElement helper function, declare a variable called leftArr and set it equal to sliced input arr starting from index 0 to
ending at function call of getMiddleElement helper function passing in input arr from main function into the helper function (this will get 
the middleIndex and it'll be middleIndex exlusive in the slice method).
4. Declare a variable called rightArr and set it equal to sliced input arr starting from function call of getMiddleElement passing in in the 
input arr from main function into the helper function as a parameter to get middle index + 1 to length of input arr
5. Declare variable called startNode and set it to a new BinaryTreeNode class passing in the value of BinaryTreeNode as the array element from
middle index by calling the getMiddleElement helper function, passing in the input array from main function.
6. set left side of startNode to function call of getMiddleElement passing in leftArr as the input array into this helper function as parameter
7. Set right side of startNode to function call of getMiddleElement passing in rightArr as input array into this helper function as parameter.
8. Make a base case of if leftArr and rightArr length is 0 then return.
9. Otherwise, if leftArr is not empty and length is more than 0) then recursively call the parent function, passing in leftArr as the input
parameter into the recursive parent function.
10. Otherwise, if rightArr is not empty w/ length more than 0, then recursively call the parent function, passing in rightArr as the input
parameter into the recursive parent function.
 */

class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

const createMinimalBST = arr => {
    // base case 1
    if (arr.length == 0) {
        return;
    }
    const getMiddleIndex = inpArr => {
       return Math.floor(inpArr.length / 2);        
    };

    let leftArr = arr.slice(0, getMiddleIndex(arr));
    let rightArr = arr.slice((getMiddleIndex(arr) + 1), arr.length);
    // console.log('rightArr: ', rightArr);
    let middleElement = arr[getMiddleIndex(arr)];

    let startNode = new BinaryTreeNode(middleElement);
    startNode.left = leftArr[getMiddleIndex(leftArr)];
    startNode.right = rightArr[getMiddleIndex(rightArr)];
    // console.log('startNode val: ', startNode.value);
    // console.log('startNode: ', startNode)

    // base case 2
    if (leftArr.length < 1 && rightArr.length < 1) {        
        return;
    } else {
        if (leftArr.length >= 1) {
            createMinimalBST(leftArr);            
        }
    else if (rightArr.length >= 1) {
            createMinimalBST(rightArr);            
        }
        console.log('startNode', startNode);
        return startNode; 
    }; 
 
        
};


/* Helper function to validate that the created tree is a valid BST */
// function isBinarySearchTree(root) {
//     const nodeAndBoundsStack = [];
//     nodeAndBoundsStack.push({node: root, lowerBound: -Infinity, upperBound: Infinity});
//     while (nodeAndBoundsStack.length) {
//       const nodeAndBounds = nodeAndBoundsStack.pop();
//       const node = nodeAndBounds.node;
//       const lowerBound = nodeAndBounds.lowerBound;
//       const upperBound = nodeAndBounds.upperBound;
//       if (node.value <= lowerBound || node.value >= upperBound) {
//           return false;
//       }
//       if (node.left) {
//         nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});
//       }
//       if (node.right) {
//         nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
//       }
//     }
//     return true;
//   }

/* Helper function to check the max height of a BST */
function maxDepth(node) {
    if (!node) return 0;
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
  }



/* Some console.log tests */
// let sortedArray1 = [1, 2, 3, 4, 5, 6, 7];
// let bst1 = createMinimalBST(sortedArray1);
// console.log(bst1);

// console.log(isBinarySearchTree(bst1));   // should print true
// console.log(maxDepth(bst1));             // should print 3

sortedArray2 = [4, 10, 11, 18, 42, 43, 47, 49, 55, 67, 79, 89, 90, 95, 98, 100];
bst2 = createMinimalBST(sortedArray2);
console.log(bst2);

// console.log(isBinarySearchTree(bst2));   // should print true
console.log(maxDepth(bst2));             // should print 5

// console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 4)); // true
// console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 0)); // false
// console.log(binarySearchRecursive([4, 10, 11, 18, 42, 43, 47, 49, 55, 67, 79, 89, 90, 95, 98, 100], 100)); // true
// console.log(binarySearchRecursive([4, 10, 11, 18, 42, 43, 47, 49, 55, 67, 79, 89, 90, 95, 98, 100], 48)); // false
