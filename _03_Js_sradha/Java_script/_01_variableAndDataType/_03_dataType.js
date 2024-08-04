//number,string,boolean,undefined,null,bigint,symbol
// let age=23;
// console.log(typeof(age)); 

// let str="Prince kumar";
// console.log(typeof(str)); 

// let isFollow=true;
// console.log(typeof(isFollow)); 

// let x;
// console.log(typeof(x)); 

// let y=null;
// console.log(typeof(y)); 

// let z=Symbol("Hello!");
// console.log(typeof(z)); 




//object  is has key-vales pairs
const student={
    fullName:"Prince kumar",
    age:21,
    cgpa:8.5,
    isPass:true,
}
console.log(student);
console.log(typeof(student));

console.log(student.age);  //Or
console.log(student["age"]);

student.age=23; //Or
student["age"]=25;
console.log(student["age"]);


const Profile={
    fullName:"Prince kumar",
    post:195,
    isFollow:false,
    followers:5000000,
    following:13,
}