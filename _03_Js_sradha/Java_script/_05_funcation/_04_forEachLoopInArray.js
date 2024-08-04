// function abc(){
//     console.log("Hello!");
// }

// function myFun(abc){
//     return abc;
// }


//tese all are only use for arrays.
// let arr=[1,2,3,4,5];
// arr.forEach(
//     function printVal(val){
//         console.log(val);
//     }
// )


// let cities=["Siwan","Chapra","Patna","Delhi","Mumbai"];
// cities.forEach(
//     (val,indx,cities)=>{
//         console.log(val,indx,cities);
//     }
// )

// forEach is also called higher order function or higher order method.




//For a given array of numbers,print the square of esch values using the forEach loop.

arr=[1,2,3,4,5,6,7];

arr.forEach(
    (val)=>{
        console.log(val*val);
    }
)




// let calcSquare=(val)=>{
//     console.log(val*val);
// }
// arr.forEach(calcSquare);