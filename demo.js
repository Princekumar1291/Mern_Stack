//higher order function
//funcation that return a function

function getGreetMethod(){
  return function (){
    console.log("This is also higher order function")
  }
}


let fun=getGreetMethod()

fun()