/* Pseudocode
1. Initialize an empty array call it zeroArr, initialize a second empty array call it nonZeroArr
2. Loop through the array and make if statement to check if array element at current index is equal to 0. If so, push into zeroArr
3. If array element at current index is not equal to 0, push into nonZeroArr.
4. get the length of nonZeroArr and set it to a variable called nonZeroNums
5. Concat nonZeroArr to zeroArr array so that the nonZero numbers appear first.
6. Return nonZeroNums to get how many non-zero numbers there are.
 */

const zerosToTheRight = arr => {
    let zeroArr = [];
    let nonZeroArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
        } else {
            nonZeroArr.push(arr[i]);
        }
    }
    let nonZeroNums = nonZeroArr.length;
    nonZeroArr.concat(zeroArr);
    return nonZeroNums;
}

console.log(zerosToTheRight([0, 3, 1, 0, -2])); // 3
console.log(zerosToTheRight([4, 2, 1, 5])); // 4