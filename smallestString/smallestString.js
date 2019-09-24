/*Pseudocode: 
1. Declare an empty array call it results.
2. push the input parameters into the array.
3. Sort the array with sort method.
4. Return the first item from the sorted array.
 */

const smallestString = (str1,str2) => {
    let results = [];
    results.push(str1);
    results.push(str2);
    results.sort();
    return results[0];

}

console.log(smallestString("a", "b")); // a
console.log(smallestString("a1", "a2")); // a1
console.log(smallestString("a10", "a2")); // a2
console.log(smallestString("abcd123", "abc123"));   // should print "abc123"
console.log(smallestString("abc", "abcd"));         // should print "abc"
console.log(smallestString("abc123a", "abc123b"));  // should print "abc123a"
console.log(smallestString("9876", "987"));         // should print "987"
console.log(smallestString("6a", "6b"));            // should print "6a"