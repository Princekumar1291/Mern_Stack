const arr=[1,2,3,4];
let ans=0;
ans=arr.reduce(
    (total,val)=>{
        return total+val;
    }
)

console.log(ans);

let maxEle=0;
maxEle=arr.reduce(
    (prev,curr)=>{
        return Math.max(prev,curr);
    }
)
console.log(maxEle);




//Practics
let num=10;
let arr2=[];
for(let i=1;i<=num;i++){
    arr2.push(i);
}

let ans3=arr2.reduce(
    (ans,val)=>{
        return ans+val;
    }
)
console.log(ans3);