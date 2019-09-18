/* Pseudocode
- The columns, starting from last column has to become rows in the matrix.
1) Declare a variable let's call it rotatedMatrixArr and intialize it to empty array.
2) Get the number of columns by getting length of first array in matrix, call it numCols
3) Get the last column, call it rightCol and set it to numCols - 1.
4) Have a while loop where rightCol is more than or equal to 0.
5) get values from last column, make a for loop where i = 0, i < matrix.length; i++ and push into rotatedMatrixArr, 
inputMatrix[i][rightCol].
6) Decrease rightCol by 1 with rightCol-- outside for loop.
7) Return rotatedMatrixArr as an array
 */

const rotateImage = inputMatrix => {
    let rotatedMatrixArr = [];
    let numCols = inputMatrix[0].length;
    let rightCol = numCols - 1;
    let len = inputMatrix.length;

    while (rightCol >= 0) {
        for (let i = 0; i < len; i++) {
            rotatedMatrixArr.push(inputMatrix[i][rightCol])
        }
        rightCol--;
    }
    return [rotatedMatrixArr];
}

matrix1 = [
    [1, 2],
    [3, 4]
  ];

matrix2 = [
    [1, 1, 5, 9, 9],
    [2, 2, 6, 0, 0],
    [3, 3, 7, 1, 1],
    [4, 4, 8, 2, 2],
    [5, 5, 9, 3, 3]
  ]

console.log(rotateImage(matrix1)); // should return 
/* [ 
  [2, 4],
  [1, 3]
] */
console.log(rotateImage(matrix2)); // should return
/*[ 
    [ 9, 0, 1, 2, 3 ],
    [ 9, 0, 1, 2, 3 ],
    [ 5, 6, 7, 8, 9 ],
    [ 1, 2, 3, 4, 5 ],
    [ 1, 2, 3, 4, 5 ]
  ]
*/