const user={
  name:"Prince",
  age:20,
  city:"Siwan",
  PhoneNo:{
    Home:132545245674,
    Shop:354654545556,
  }
}

console.log(user.name)
console.log(user["name"])

user.country="India";
user["continent"]="Asia";

delete user.age;

for (ele in user){
  console.log(ele,user[ele]) //we can not use dot here
}


let arrOfKeys=Object.keys(user)
console.log(arrOfKeys)

let arrOfValues=Object.values(user)
console.log(arrOfValues)

//To get both key and values
let arrOfKeyValues=Object.entries(user)
console.log(arrOfKeyValues)


// let newObj=user; //it point to same obj
// user.name="Sachin";
// console.log(user)


// Cloning an object using assign 
// const newObj=Object.assign({},user);
// user.name="Sachin"
// console.log(newObj)
// console.log(user)

// Cloning an object using assign and adding new key_value
const newObj=Object.assign({},user,{role:"Developer"});
console.log(newObj)