// My solution:
/*Pseudocode:
RingBuffer class will take in an argument called capacity which will be the size of the ring buffer array.
1. Make the ring buffer class with properties of this.capacity which is also an input parameter, this.storage which will be an empty array and 
this.count which will keep track of how many items are in the this.storage array.

append method:
1. Outside the constructor, make a method called append which takes in an input parameter called val which is the value to push into the 
this.storage array.
2. Make an if statement of if this.count is less than or equal to this.capacity minus 1, then put the input value, val into the storage array in
the position that the count is currently at.
3. Increment this.count by 1.
3. Else (if this.count is more than this.capacity minus 1), then reset this.count to 0, insert the input value, val into the storage array in the
position of the newly reset count, then increment this.count by 1 again  
 */

class RingBuffer {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.count = 0;
    }
    append(val) {
        if (this.count <= this.capacity - 1) {
            this.storage[this.count] = val;
            this.count += 1
        } else {
            this.count = 0;
            this.storage[this.count] = val;
            this.count += 1;
        };        
    };

    allValues() {
        return this.storage;
    }
}


/* Some console.log tests */
// const buffer = new RingBuffer(5);

// buffer.append('a');
// buffer.append('b');
// buffer.append('c');
// buffer.append('d');
// console.log(buffer.allValues());  // should print ['a', 'b', 'c', 'd']

// buffer.append('e');
// console.log(buffer.allValues());  // should print ['a', 'b', 'c', 'd', 'e']

// buffer.append('f');
// console.log(buffer.allValues());  // should print ['f', 'b', 'c', 'd', 'e']

// buffer.append('g');
// buffer.append('h');
// buffer.append('i');
// console.log(buffer.allValues());  // should print ['f', 'g', 'h', 'i', 'e']


const buffer2 = new RingBuffer(3);

buffer2.append('a');
buffer2.append('b');
buffer2.append('c');

console.log(buffer2.allValues());   // should return ['a', 'b', 'c']

buffer2.append('d');

console.log(buffer2.allValues());   // should return ['d', 'b', 'c']

buffer2.append('e');
buffer2.append('f');

console.log(buffer2.allValues());   // should return ['d', 'e', 'f']