/*Pseudocode:
1. Initialize an empty object call it hashTable.
2. loop through the array and find the difference between input target weight minus current array element at current index and 
call it difference.
3. Make if statement, check if target weight minus current array element at current index (difference) is present as a key in the
hashTable object. If not, then set the difference as a key and the current element as a value in the hashTable object.
4. Make another for in loop outside the first for loop to loop through the hashTable object keys and values.
5. Make an if statment inside the inner for-in loop, check if input array includes the value from each key in the hashTable using
array indexOf method and if input array also includes that key from the hashTable. If so, then make another inner if statement
to check if index of the value is greater than the index of the key - if so then return the index of that value, first
then return the index of the key as a second element in an array.
6. Else, from inner if statement that was inside the 1st if statement, if array index of current value in hashTable is not greater
than array index of current value from hashTable then return array index of current key first then array index of current value 
from hashTable.  
7. For edge case of if input array length is less than 2 then return [].
8. For edge case of if input array contains only 2 elements and both elements sum up to equal the target weight, make an if
statement, check if array length is equal to 2 and array element at 0th index plus at 1st index equals to targetWeigth then 
return [1, 0]  
 */

// My own solution: time complexity is ~ O(2n)
const getIndicesOfItemWeights = (arr, targetWeight) => {
  let hashTable = {};

  if (arr.length < 2) {
    return [];
  }

  if (arr.length == 2 && arr[0] + arr[1] === targetWeight) {
    return [1, 0];
  }

  for (let i = 0; i < arr.length; i++) {
    let difference = targetWeight - arr[i];

    if (!hashTable[difference]) {
      hashTable[difference] = arr[i];
    }
  }
  // console.log(hashTable);
  for (arrItem in hashTable) {
    if (
      arr.indexOf(hashTable[arrItem]) !== -1 &&
      arr.indexOf(parseInt(arrItem)) !== -1
    ) {
      // console.log(hashTable[arrItem], arrItem);
      if (arr.indexOf(hashTable[arrItem]) >= arr.indexOf(parseInt(arrItem))) {
        return [
          arr.indexOf(hashTable[arrItem]),
          arr.indexOf(parseInt(arrItem))
        ];
      } else {
        return [
          arr.indexOf(parseInt(arrItem)),
          arr.indexOf(hashTable[arrItem])
        ];
      }
    }
  }
};

console.log(getIndicesOfItemWeights([4, 6, 10, 15, 16], 21)); // [3 , 1]
console.log(getIndicesOfItemWeights([4, 4], 8)); // [1 , 0]
console.log(getIndicesOfItemWeights([12, 6, 7, 14, 19, 3, 0, 25, 40], 7)); // [6, 2]
console.log(getIndicesOfItemWeights([9], 9)); // []

// getIndicesOfItemWeights([4, 6, 10, 15, 16], 21)
// getIndicesOfItemWeights([4, 4], 8)
// getIndicesOfItemWeights([12, 6, 7, 14, 19, 3, 0, 25, 40], 7)
// getIndicesOfItemWeights([9], 9)
