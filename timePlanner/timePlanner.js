/*Pseudocode:
- Get the end time of person b from matrix, push into new array and sort ascending.
- Get the begin time of person a from matrix and sort ascending.
- Check if (end time for person b) - (begin time of person a) is more than or equal to duration. If so, then return in an array: 
[begin time of person b, (begin time of person b) + duration]

1. Initialize an empty array to contain begin times of person a, call it personStartA
2. Initialize an empty array to contain end times of person b, call it PersonEndB.
3. Initialize an empty object to contain begin times of person b as values with keys being the end times of that person b, call it 
beginObjB
4. Loop through first Matrix, and make an if statement check if (2nd number in array of current element) - (1st number in array of current
element) is more than or equal to duration, then push the first element from each matrix array into the personStartA array.
5. Outside previous for loop, make a another 2nd for loop (separate for loop not innner) and loop through matrix of personB and push the 
second array element from each array element in the matrix into the personEndB array and if it does not exist as key in beginObjB, then 
make this element as a key in beginObjB and set its value to its begin time from the person B matrix
6. Sort both personStartA and personEndB arrays using sort method with a-b to sort ascending. 
7. Make a third (separate not inner) for loop to loop throug the begin times array from personStartA array and make an inner for loop inside 
this for loop to loop through end times of array from personEndB. 
8. Make if statement if the current end time from inner loop minus current start time from outer loop and (&&) current end time from inner 
loop minus the start time value of this current element key from the beginObjB is more than or equal to duration then 
return in an array: the start time of person b from inner loop from the beginObjB value whose key is the current element, this current start
time value + duration.
 */

// My own solution but time complexity is O(2n + n^2 + 2nlogn) => ~O(n^2 + logn) which is highly inefficient.

const timePlanner = (matrixA, matrixB, duration) => {
    let personStartA = [];
    let personEndB = [];
    let beginObjB = {};

    for (let i = 0; i < matrixA.length; i++) {
        if (matrixA[i][1] - matrixA[i][0] >= duration) {
            personStartA.push(matrixA[i][0]);
        }
        
    }
    for (let i = 0; i < matrixB.length; i++) {
        if (matrixB[i][1] - matrixB[i][0] >= duration) {
            personEndB.push(matrixB[i][1]);
        }
        
        if (!beginObjB[matrixB[i][1]]) {
            beginObjB[matrixB[i][1]] = matrixB[i][0];
        }
    };
    personStartA.sort((a, b) => a - b);
    personEndB.sort((a, b) => a - b);

    for (let j = 0; j < personStartA.length; j++) {
        for (let k = 0; k < personEndB.length; k++) {
            if ((personEndB[k] - personStartA[j]) >= duration && (personEndB[k] - beginObjB[personEndB[k]]) >= duration) {
                return [beginObjB[personEndB[k]], beginObjB[personEndB[k]] + duration];
            }
        }
    }
    return [];
};


 // Tests
console.log(timePlanner(
    [[10, 50], [60, 120], [140, 210]],
    [[0, 15], [60, 70]],
    8
  ));   // should print [60, 68]
  
  console.log(timePlanner(
    [[10, 50], [60, 120], [140, 210]],
    [[0, 15], [60, 72]],
    12
  ));   // should print [60, 72]
  
  console.log(timePlanner(
    [[10, 50], [60, 120], [140, 210]],
    [[0, 15], [60, 70]],
    12
  ));   // should print []
  
  console.log(timePlanner(
    [[0, 5], [50, 70], [120, 125]],
    [[0, 50]],
    8
  ));   // should print []