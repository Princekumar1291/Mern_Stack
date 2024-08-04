//When we are passing a function as parameter in another function then we called higher order function

// function operation(operatorFun,a,b){
//   return operatorFun(a,b)
// }

// function add(a,b){
//   return a+b;
// }

// let result=operation(add,20,10);
// console.log(result)



//  
function getGreetMethod(){
  return function (){
    console.log("This is also higher order function")
  }
}

let greetFn=getGreetMethod()

console.log(typeof greetFn)
greetFn()