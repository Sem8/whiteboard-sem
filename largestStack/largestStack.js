class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.items.length) {
        return this.items.pop();
      }
      return null;
    }
  
    peek() {
      if (this.items.length) {
        return this.items[this.items.length-1];
      }
      return null;
    }
  };

// My own solution: Not sure if getMax method is in O(1) time, since array sort is O(n log n) time complexity
/*Pseudocode:
1. Use the extends method from Stack to make the MaxStack child class whose parent is Stack.
2. In the getMax method, make an if statement check if there are any elements in the this.items array by checking for length more than 0.
If so, then sort the this.items array descending using the array sort method and return the last elmeent of the this.items array.
3. Outside if statement, return null for if there are no items in the this.items array. 
 */

class MaxStack extends Stack {
    constructor() {
        super();
        // this.items = [];
    }
    getMax() {
        if (this.items.length) {
            this.items.sort((a, b) => a - b);
            return this.items[this.items.length - 1];
        };
        return null;
    }
};

const maxStack = new MaxStack();
console.log(maxStack.getMax());   // should print `null`

maxStack.push(1);
console.log(maxStack.getMax());   // should print 1

maxStack.push(100);
console.log(maxStack.getMax());   // should print 100

maxStack.pop();
console.log(maxStack.getMax());   // should print 1