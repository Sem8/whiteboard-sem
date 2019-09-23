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

const productOfAllOtherNumbers = arr => {
    let len = arr.length;
    let totalProduct = 1;
    let otherProductsArr = [];
    let differenceProduct;

    for (let i = 0; i < len; i++) {
        totalProduct = totalProduct *= arr[i];
    }
    for (let i = 0; i < len; i++) {
        differenceProduct = totalProduct / arr[i];
        otherProductsArr.push(differenceProduct);                
    }
    return otherProductsArr;
}


let arr1 = [1, 7, 3, 4];
console.log(productOfAllOtherNumbers(arr1)); // [84, 12, 28, 21]