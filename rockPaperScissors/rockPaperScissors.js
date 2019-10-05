/*Pseudocode:
1. Initialize an array, call it contents and give it the string elements: ['rock', 'paper', 'scissors']. 
2. Initialize an empty array call it finalMatrix.
3. Make a for loop of starting at index called i at 0 and ending i at less than or equal to input parameter n.
4. Make another inner for loop inside the previous outer for loop this time call index j and start j at 0 and end j at less than or equal to 
input parameter n.
5. push elements from contents array at index i and at index j set inside an array into the finalMatrix array.
6. Outside all the for loops, return the finalMatrix array.  
 */

const rockPaperScissors = n => {
    let contents = ['rock', 'paper', 'scissors'];
    let finalMatrix = [];

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <=n; j++) {
            finalMatrix.push([contents[i], contents[j]]);
        };
    };
    return finalMatrix;
};



// console.log(rockPaperScissors(2));
// [[rock, rock], [rock, paper], [rock, scissors],
//  [paper, rock], [paper, paper], [paper, scissors], [scissors, rock],
//  [scissors, paper], [scissors, scissors]]

// const rps2 = rockPaperScissors(2);
// console.log(rps2.length);

// const rps3 = rockPaperScissors(3);
// console.log(rps3.length); // 27
console.log(rockPaperScissors(3));

// const rps4 = rockPaperScissors(4);
// console.log(rps4.length); // 81

// const rps5 = rockPaperScissors(5);
// console.log(rps5.length); // 243
