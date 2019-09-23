/*Pseudocode:
- We can loop through the array and get product of all the elements in the array and store it.
- We can then loop through the array again and divide the total product by the current element and store that difference at each index
in a new array.

1. Initialize a variable called totalProduct and set it to 1, initialize an empty array call it otherProductsArr, initialize an
empty variable to store the product difference, call it differenceProduct.
2. loop through the array and collect the total product by each element at each iteration, store it in totalProduct 
3. Loop through the input array again and divide the total product we stored in the totalProduct by the current element at current index
and set it to a variable called differenceProduct.
4. push the product of all numbers except current number that's stored in the differenceProduct variable into the otherProductsArr array.
5. Return otherProductsArr array
 */

// My first pass solution with time complexity of ~O(2n) => O(n);
// const productOfAllOtherNumbers = arr => {
//   let len = arr.length;
//   let totalProduct = 1;
//   let otherProductsArr = [];
//   let differenceProduct;

//   if (len < 2) {
//     return undefined;
//   }

//   for (let i = 0; i < len; i++) {
//     totalProduct = totalProduct *= arr[i];
//   }
//   for (let i = 0; i < len; i++) {
//     differenceProduct = totalProduct / arr[i];
//     otherProductsArr.push(differenceProduct);
//   }
//   return otherProductsArr;
// };

// Solution 2: Make use of array reduce method:
/*Pseudocode:
1. If array length is less than 2 then just return so the function ends and returns nothing or undefined
2. Otherwise, intialize an empty array call it results.
3. Use array reduce method, takes in accumulator and current element as first two parameters, respectively and return 
accumulator * current element, name them accumulator * currentElem. Set it to a variable called totalProduct
4. Loop through the array and get the the total product named totalProduc divided by current element at current index and push this
into the results array.
5. return results array.
 */

const productOfAllOtherNumbers = arr => {
    if (arr.length < 2) {
        return;
    }
    let results = [];
    let totalProduct = arr.reduce((accumulator, currentElem) => accumulator * currentElem);

    for (let i = 0; i < arr.length; i++) {
        results.push(totalProduct / arr[i]);
    }
    return results;
}

let arr1 = [1, 7, 3, 4];
console.log(productOfAllOtherNumbers(arr1)); // [84, 12, 28, 21]

console.log(productOfAllOtherNumbers([1, 2, 3, 4, 5])); // should print [120, 60, 40, 30, 24]

console.log(productOfAllOtherNumbers([9, 90])); // sould print [90, 9]

console.log(productOfAllOtherNumbers([50])); // should print undefined

console.log(productOfAllOtherNumbers([2, 4, 6, 8])); // [192, 96, 64, 48]
