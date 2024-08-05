function shallowEqual(obj1, obj2) {
  if (obj1 === obj2) {
      return true;
  }

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
      return false;
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
      return false;
  }

  for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
          return false;
      }
  }

  return true;
}

// Usage example
const objA = { a: 1, b: 2 };
const objB = { a: 1, b: 2 };
console.log(shallowEqual(objA, objB)); // true

const objC = { a: 1, b: 2, c: 3 };
console.log(shallowEqual(objA, objC)); // false







function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
      return true;
  }

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
      return false;
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
      return false;
  }

  for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
          return false;
      }
  }

  return true;
}

// Usage example
const objD = { a: 1, b: { c: 2 } };
const objE = { a: 1, b: { c: 2 } };
console.log(deepEqual(objD, objE)); // true

const objF = { a: 1, b: { c: 3 } };
console.log(deepEqual(objD, objF)); // false
