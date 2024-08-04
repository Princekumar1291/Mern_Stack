const user={
  name:"Prince",
  age:20,
  city:"Siwan",
  PhoneNo:{
    Home:132545245674,
    Shop:354654545556,
  }
}


let YourName=user.name;
console.log(YourName)

//Destructring
let {name}=user
console.log(name)


let {PhoneNo:{Home}}=user
console.log(Home)







