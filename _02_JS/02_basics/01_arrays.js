// Manipulating Arrays

// push(...elements): Adds one or more elements to the end of an array.
let arr = [1, 2, 3];
arr.push(4, 5); // arr is now [1, 2, 3, 4, 5]


// pop(): Removes the last element from an array and returns it.
arr.pop(); // arr is now [1, 2]

// shift(): Removes the first element from an array and returns it.
arr.shift(); // arr is now [2, 3]


// unshift(...elements): Adds one or more elements to the beginning of an array.
arr.unshift(0); // arr is now [0, 1, 2, 3]

// splice(start, deleteCount, ...items): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
arr.splice(1, 2, 'a', 'b'); // arr is now [1, 'a', 'b', 4]


// slice(start, end): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let slicedArr = arr.slice(1, 3); // slicedArr is [2, 3]


// Searching and Filtering

// find(callback): Returns the first element in the array that satisfies the provided testing function.
arr = [1, 2, 3, 4];
let found = arr.find(num => num > 2); // found is 3
console.log(found)


// filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.
arr= [1, 2, 3, 4];
let filtered = arr.filter(num => num > 2); // filtered is [3, 4]


// indexOf(element): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
arr = [1, 2, 3];
let index_ = arr.indexOf(2); // index is 1


// includes(element): Determines whether an array contains a certain element.
let hasTwo = arr.includes(2); // hasTwo is true


// Transforming Arrays
// map(callback): Creates a new array with the results of calling a provided function on every element in the calling array.
arr = [1, 2, 3];
let mapped = arr.map(num => num * 2); // mapped is [2, 4, 6]


// forEach(callback): Executes a provided function once for each array element.
arr = [1, 2, 3];
arr.forEach(num => console.log(num)); // logs 1, 2, 3



// reduce(callback, [initialValue]): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
arr = [1, 2, 3];
let sum = arr.reduce((acc, num) => acc + num, 0); // sum is 6


// sort([compareFunction]):sort() method is used to sort the elements of an array in place. By default, sort() converts elements to strings and sorts them in ascending order based on their Unicode code points.y.
arr = [10, 2, 1];
arr.sort(); // arr is [1, 2, 3]
console.log(arr)


// compareFunction
arr = [10, 2, 1];
// Compare function for numbers
arr.sort((a, b) => a - b); // Sorts in ascending numerical order
console.log(arr); // Output: [1, 2, 3]

// Descending Order:
arr.sort((a, b) => b - a);


// Sorting Strings
let strings = ["banana", "apple", "cherry"];
strings.sort(); // Output: ["apple", "banana", "cherry"]



// join(separator): Joins all elements of an array into a string.
arr = [1, 2, 3];
let str = arr.join('-'); // str is '1-2-3'


// Other Useful Methods

// concat(...arrays): Merges two or more arrays into one array.
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2); // merged is [1, 2, 3, 4]



// flat(depth): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.for all depth we can pass infinity
arr = [1, [2, [3, 4]]];
let flatArr = arr.flat(2); // flatArr is [1, 2, 3, 4]



str = 'hello';
let arr4 = Array.from(str); // arr is ['h', 'e', 'l', 'l', 'o']




// Here are the array methods that modify the original array:

// push(...elements): Adds elements to the end of the array.
// pop(): Removes the last element from the array.
// shift(): Removes the first element from the array.
// unshift(...elements): Adds elements to the beginning of the array.
// splice(start, deleteCount, ...items): Changes the contents of the array by removing, replacing, or adding elements.
// reverse(): Reverses the order of the elements in the array.
// sort([compareFunction]): Sorts the elements of the array in place.










// 1. Converting Object Keys to an Array
let obj = { a: 1, b: 2, c: 3 };
const keysArray = Object.keys(obj); // ['a', 'b', 'c']



// 2. Converting Object Values to an Array
// If you want to convert the values of an object into an array, use Object.values():
obj = { a: 1, b: 2, c: 3 };
const valuesArray = Object.values(obj); // [1, 2, 3]



// 3. Converting Object Entries to an Array
// To get an array of [key, value] pairs, use Object.entries():
obj = { a: 1, b: 2, c: 3 };
const entriesArray = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]



// Converting Object to Array of Custom Structure
// If you need a custom structure, such as an array of objects, you can use Object.entries() with map():
obj = { a: 1, b: 2, c: 3 };
let customArray = Object.entries(obj).map(([key, value]) => ({ key: key, value: value }));
// [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]
console.log(customArray)



obj = { a: 1, b: 2, c: 3 };
customArray = Object.entries(obj).map(([key, value]) => ([key, value]));
// [['a', 1], ['b', 2], ['c', 3]]
console.log(customArray)



// The Array.of() method is used to create a new Array instance with a variable number of elements, regardless of the number of arguments passed. It differs from Array() in that it does not treat a single numeric argument as a length but rather as an element of the array.
Array.of(element1, element2, elementN)
let num1 = 10;
let num2 = 20;
let num3 = 30;

arr = Array.of(num1, num2, num3);
// arr is [10, 20, 30]






// Rest and Spread Properties

// Spread Properties
// The spread syntax (...) allows you to "spread out" the elements of an array or the properties of an object into a new array or object.
// You can use the spread operator to create a copy of an array or concatenate arrays.
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
// Creating a new array by spreading elements of both arrays
const combinedNumbers = [...numbers, ...moreNumbers];
console.log(combinedNumbers); // [1, 2, 3, 4, 5, 6]




// Rest Properties
// The rest syntax (...) allows you to "collect" the remaining elements of an array or the remaining properties of an object into a new array or object. It's often used in function parameters or destructuring assignments.
// You can use the rest operator to gather the remaining elements of an array into a new array.
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]
