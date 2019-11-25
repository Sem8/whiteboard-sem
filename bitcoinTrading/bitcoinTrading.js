// My own solution: time complexity of O(n^2)
/*Pseudocode:
1. Get the first element from the input array and set it to a variable called buyPrice
2. Get the second element from the input array and set it to a variable called sellPrice.
3. Get the difference between first and second element by subtracting buyPrice from sellPrice and set it to a variable called maxProfit
4. Make a for loop, loop through the array starting at index i of 1 and ending at array length minus 1 (ending at 2nd to last element) 
5. Make an inner for loop inside previous loop, starting at index j of i+1 and ending at the last element (j < arr.length)
6. Inside inner j for loop, make an if statement, check if element at array index j minus element at array index i is more than maxProfit then 
re-set maxProfit to that new difference.
7. Outside both for loops, return the newly updated maxProfit.
 */

const findMaxProfit = arr => {
    let buyPrice = arr[0];
    let sellPrice = arr[1];
    let maxProfit = sellPrice - buyPrice;

    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            // console.log('i: ', arr[i]);
            // console.log('j: ', arr[j]);
            // console.log('maxProfit: ', maxProfit);
            if (arr[j] - arr[i] > maxProfit) {
                maxProfit = arr[j] - arr[i];
            }
        }
    };
    return maxProfit;
}

/* Some console.log tests */
console.log(findMaxProfit([10, 7, 5, 8, 11, 9]));       // should print 6
console.log(findMaxProfit([1050, 270, 1540, 3800, 2]))  // should print 3530
console.log(findMaxProfit([100, 90, 80, 50, 20, 10]));  // should print -10
console.log(findMaxProfit([100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79]));   // should print 94