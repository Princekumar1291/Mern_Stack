let nums=[1,2,3,4,5,6,7];


let newNums=nums.filter(
    (val)=>{
        return val%2===0;
    }
)

newNums.map(
    (val)=>{
        console.log(val);
    }
)

console.log(newNums);