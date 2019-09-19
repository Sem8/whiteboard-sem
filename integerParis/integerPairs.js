/* Pseudocode strategy 1:
To get a certain sum of two numbers in an array we can use hashtable to store each number as we iterate through array
We can then subtract that number from the given input integer and check if hashtable has that difference.
1. declare an empty object call it hashtable, declare empty array, call it twoSumArr
2. loop through the array, get the integer at current index, call it currentInt.
3. Subtract currentInt from input parameter integer and set it to a variable called difference 
4. Make if statement if currentInt not in hashtable, put the currentInt as key of the hashTable and difference as it's value. 
5. Make if statement to check whether the difference is present as a key in hashtable, if so, push the key value pair into twoSumArr array.
6. Return twoSumArr array. 
 */

// Using hashtable which is O(n) time complexity 
const integerPairs = (arr, sumInt) => {
  let hashTable = {};
  let twoSumArr = [];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let currentInt = arr[i];
    let difference = sumInt - currentInt;

    if (!hashTable[currentInt]) {
      hashTable[currentInt] = difference;
      // console.log(hashTable);
    }
    if (hashTable[difference]) {
      twoSumArr.push([currentInt, hashTable[currentInt]]);
    }
  }
  return twoSumArr;
};

// Using a for loop within a for loop with O(n^2) time complexity
const integerPairs = (arr, sumInt) => {
  let len = arr.length;
  let twoSumArr = [];

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] == sumInt) {
        twoSumArr.push([arr[i], arr[j]]);
      }
    }
  }
  return twoSumArr;
};

console.log(integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // '6 5', '7 4', '8 3', '9 2', '10 1'
