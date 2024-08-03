// Shallow Copy
// A shallow copy creates a new object or array but only copies the references to the original elements, not the elements themselves. This means that nested objects or arrays within the copied object are still linked to the original ones.


// Characteristics:
// Only one level of copying is done.
// Changes to nested objects in the copied structure will affect the original structure.

let originalArray = [1, 2, [3, 4]];
let shallowCopy = [...originalArray]; // Using the spread operator for shallow copy

shallowCopy[0] = 10; // Modifies only the top-level element
shallowCopy[2][0] = 30; // Modifies nested array in both original and copied arrays

console.log(originalArray); // Output: [1, 2, [30, 4]]
console.log(shallowCopy); // Output: [10, 2, [30, 4]]





// Deep Copy
// A deep copy creates a new object or array and also recursively copies all nested objects or arrays. Changes to the nested structures in the copied object will not affect the original object.

// Characteristics:
// Recursively copies all levels of nested structures.
// Changes to any level of the copied structure do not affect the original.

let originalArray2 = [1, 2, [3, 4]];
let deepCopy = JSON.parse(JSON.stringify(originalArray2)); // Using JSON methods for deep copy

deepCopy[0] = 10; // Modifies only the top-level element
deepCopy[2][0] = 30; // Modifies nested array only in the copied array

console.log(originalArray2); // Output: [1, 2, [3, 4]]
console.log(deepCopy); // Output: [10, 2, [30, 4]]





// Methods for Deep Copy:
// Using JSON methods: JSON.parse(JSON.stringify(object)) (works well for simple objects but not for functions or objects with circular references)
// Libraries: Libraries like Lodash provide utilities like _.cloneDeep() for deep copying complex structures.


// Summary
// Shallow Copy: Copies only the top level, keeping nested objects linked.
// Deep Copy: Recursively copies all levels, creating a fully independent copy.








// _.cloneDeep() is a utility function from the Lodash library that creates a deep copy of a value. This means it copies not just the object itself, but also all nested objects and arrays, ensuring that the copied object is completely independent of the original.
// Key Features of _.cloneDeep()
// Recursive Copy: It traverses and copies all nested structures.
// Handles Complex Structures: It works with complex data structures, including objects with circular references.









// npm install lodash
// Importing lodash
const _ = require('lodash');

// Original object with nested structures
let originalObject = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  },
  hobbies: ['reading', 'traveling']
};

// Creating a deep copy of the original object
let deepCopy = _.cloneDeep(originalObject);

// Modifying the deep copy
deepCopy.address.city = 'Los Angeles';
deepCopy.hobbies.push('cooking');

console.log('Original Object:', originalObject);
// Output: Original Object: { name: 'John', age: 30, address: { city: 'New York', zip: '10001' }, hobbies: [ 'reading', 'traveling' ] }

console.log('Deep Copy:', deepCopy);
// Output: Deep Copy: { name: 'John', age: 30, address: { city: 'Los Angeles', zip: '10001' }, hobbies: [ 'reading', 'traveling', 'cooking' ] }
