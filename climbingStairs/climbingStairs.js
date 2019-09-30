// Solution 1: Non-recursive solution but no memoization, time complexity O(n)?
/*Pseudocode: 
1. Declare an array, call it arr and give it the elements 1, 1, 2 in that order. (For 0 stairs there's only 1 way to go through, for 1 stair
there's also 1 way to go through, for 2 stairs there are 2 ways to go through - 2, 1+1);
2. Make an if statement, check if input parameter of the number of stairs is more than 1. If so,
3. Make a for loop, starting index at 3 ending i at less than or equal to input number of stairs and iterate forward.
4. Set the arr array at current index equal to the value from arr array at 1 index before current index, plus element value from arr array 
from 2 indexes before current index, plus element value from arr array from 3 indexes before current index.
5. Outside for loop but still inside the if statment, return the last value element from the arr array by either using pop method or returning
the last array element with length -1 method. 
6. Outiside if statement (if input number of stairs is 1 or less then just return 1).
 */

// const climbingStairs = num => {
//     let arr = [1, 1, 2];

//     if (num > 1) {
//         for (let i = 3; i <= num; i++) {
//             arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
//         };
//         return arr[arr.length - 1];
//     };
//     return 1;
// };

// Solution 2: Solving recursively but time complexity of O(n^3);
/* Pseudocode: 
1. Have a first base case of if input number of stairs num is less than 0 then return 0.
2. Have a second base case of if input number of stairs is 0 then return 1.
3. Else, (if input number of stairs num is more than 0), recursively call the function 3 times, first time call the function with number of
stairs num minus 1, plus the recursive function with argument of input num minus 2 plus recursive function with argument of input num minus 3
and return this result.
 */

const climbingStairs = num => {
    // Base case 1:
    if (num < 0) return 0;
    
    // Base case 2:
    if (num == 0) return 1;

    else {
        return climbingStairs(num - 1) + climbingStairs(num - 2) + climbingStairs(num - 3);
    };
};


console.log(climbingStairs(1)); // 1
console.log(climbingStairs(2)); // 2
console.log(climbingStairs(3)); // 4
console.log(climbingStairs(4)); // 7
console.log(climbingStairs(5)); // 13
console.log(climbingStairs(6)); // 24
console.log(climbingStairs(7)); // 44
console.log(climbingStairs(10)); // 274
console.log(climbingStairs(50)); // 10562230626642