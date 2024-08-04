//Map method  it is similar to forEach but it is used to create new array by modifying the old array.
let nums=[1,2,3,4,5,6,7];

nums.map(
    (val)=>{
        console.log(val);
    }
)



let newNums=nums.map(
    (val)=>{
        return val*val;
    }
)

newNums.map(
    (val)=>{
        console.log(val);
    }
)