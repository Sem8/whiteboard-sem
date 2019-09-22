/*Pseudocode
1. Have a hashtable initialized to empty object let's call it hashTable. Initialize an variable called maxim, set it to -Infinity. 
And initialize an empty string, call it name.
2. Loop through the array.
3. Make if statement, check if name element in the array exists in hashTable object as a key. If so, increment value by 1 with the key
being the current name element in the array inside the hashTable object.
4. Otherwise, if current array element name doesn't exists as a key in hashTable object, initilize with a value of 1 setting current 
array element as a key in the hashTable. 
5. Sort the names (keys) in hashTable with Object.keys(hashTable).sort().reverse() to sort alphabetically descending 
(last alphabet to first). But this will only return an array of only the keys or names but not the values so set it to a variable called
sortedHashTable
6. Loop through sortedHashTable array with for loop and make if statement to check if value of current name at current sortedHashtable index
as a key in the hashTable object is more than max, if so, set max to current name key's value 
7. set name to the current element name in the current index in the sortedHashTable array, so that the name key matches max value.
8. outside for loop, return name.
 */

const countingVotes = arr => {
    let hashTable = {};
    let maxim = -Infinity;
    let name = '';

    for (let i = 0; i < arr.length; i++) {
        if (hashTable[arr[i]]) {
            hashTable[arr[i]]++
        } else {
            hashTable[arr[i]] = 1;
        }
    }
    // console.log(hashTable);
    let sortedHashTable = Object.keys(hashTable).sort().reverse();
    // console.log(sortedHashTable);
    for (let i = 0; i < sortedHashTable.length; i++) {
        if (hashTable[sortedHashTable[i]] > maxim) {
            maxim = hashTable[sortedHashTable[i]]; 
            name = sortedHashTable[i];           
        }            
    }    
    // return sortedHashTable[sortedHashTable.length - 1];
    return name;
};

let arr1 = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];
let arr2 = ['john', 'johnny', 'jackie', 'johnny', 'john', 'jackie', 'jamie', 'jamie', 'john', 'johnny', 'jamie', 'johnny', 'john']
console.log(countingVotes(arr1)) // 'michael';
console.log(countingVotes(arr2)) // 'johnny';
// countingVotes(arr1);
// countingVotes(arr2);