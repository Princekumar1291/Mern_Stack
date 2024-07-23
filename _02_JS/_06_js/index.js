let num=5;
// let result;
// if(num%2==0){
//   result="even";
// }
// else {
//   result="odd"
// }

let result=num%2==0?'even':'odd'

console.log(`the number is ${result}`)



//gard operator
let username;
let fallbackValue="Guest";
let greeting=username || fallbackValue;
console.log(greeting)

