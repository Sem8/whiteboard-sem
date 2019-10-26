// My own solution: O(2n) --> ~ O(n) time complexity O(n) space complexity
/*Pseudocode: Takes in linked list head as an argument input.  
1. Declare a variable called current and set it equal to the input head which will serve as the pointer to each linked list node.
2. Initialize an empty array called nodeValStore
3. Make a while loop of while current exists and is not equal to null
4. Inside while loop, push the value of current (current.value) into the nodeValStore array.
5. Still inside while loop, set current to current.next to traverse through the linked list. While loop will continue until we've reached
the last node in the linked list.
6. Outside while loop make a for loop to loop through the nodeValStore array but starting at index 0 but ending at middle of nodeValStore
7. Inside for loop, make an if statement of if current array element at current array index is not equal to the array element at the index
of array length minus 1 minus current index then return false and break.
8. Outside for loop return true.
 */

const isLinkedListPalindrome = sllHead => {
    let current = sllHead;
    let nodeValStore = [];      

    while (current) {
        nodeValStore.push(current.value);
        current = current.next;
    }

    for (let i = 0; i < nodeValStore.length / 2; i++) {
        if (nodeValStore[i] !== nodeValStore[nodeValStore.length - 1 - i]) {
            return false;
        };
    };
    return true;
} 



class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let a1 = new ListNode(1);
let b1 = new ListNode(2);
let c1 = new ListNode(3);
let d1 = new ListNode(2);
let e1 = new ListNode(1);

a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;

const w = new ListNode(10);
const x = new ListNode(11);
const y = new ListNode(11);
const z = new ListNode(10);

w.next = x;
x.next = y;
y.next = z;

console.log(isLinkedListPalindrome(a1));   // should print true
console.log(isLinkedListPalindrome(b1));   // should print false since now the 'a' node is not included in the linked list

console.log(isLinkedListPalindrome(w));   // should print true


