function addTwoNumber(num1, num2) {
  console.log(num1+num2);
  console.log(this)
  return num1 + num2
}

addTwoNumber(1, 2)


//create a object with some data
let obj = {
  name: "hitesh",
  age: 18,
  addTwoNumber:()=>{
    console.log(this)
  }
}

obj.addTwoNumber()