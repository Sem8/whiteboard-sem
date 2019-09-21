/* Pseudocode
1. Loop through the matrix to get each array with i being index.
2. Make a second inner for loop inside previous for loop to loop through each element in each array with j being the index this time
3. if input parameter is equal to current element at current index, return ([i , j]);
 */

const searchInSortedMatrix = (inputMatrix, num) => {
    let matrixLen = inputMatrix.length;
    
    for (let i = 0; i < matrixLen; i++) {
        for (j = 0; j < inputMatrix[i].length; j++) {
            if (inputMatrix[i][j] === num) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
matrix1 = [
    [1, 4, 7, 12, 15, 997, 999],
    [2, 5, 19, 32, 35, 1001, 1007],
    [4, 8, 24, 34, 36, 1008, 1015],
    [40, 41, 42, 44, 45, 1018, 1020],
    [98, 99, 101, 104, 190, 1021, 1025],
]
console.log(searchInSortedMatrix(matrix1, 45)); // [3, 4]