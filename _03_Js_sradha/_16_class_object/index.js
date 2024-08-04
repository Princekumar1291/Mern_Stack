// let employee={
//   calcTax(){
//     console.log(`text is 10%`)
//   }
// }

//or

let employee={
  calcTax:()=>{
    console.log(`text is 10%`)
  }
}

const karan={
  name:"karan",
  salary:50000,
}

karan.__proto__=employee

const karan2={
  name:"karan2",
  salary:50000,
}

karan2.__proto__=employee

const karan3={
  name:"karan",
  salary:50000,
}

karan3.__proto__=employee

