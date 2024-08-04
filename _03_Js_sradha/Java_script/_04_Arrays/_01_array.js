// let marks=[85,95,75,68,89,78,73];
// let name=['Prince','sachin','bipin','prakhar'];
// let info=['Prince','sachin',68,89,78,73];
// for(ele of marks){
//     console.log(ele);
// }
// console.log(name.length);
// console.log(marks);

// marks.push(12);
// console.log(marks);


// // marks.pop();   //Or
// let delItem=marks.pop();   //delete and store into delItem 
// console.log(marks);

// console.log(name);  //output in array
// console.log(name.toString());  //output in string

// let con=marks.concat(name,info);
// console.log(con);

// marks.unshift(20);
// console.log(marks);

// marks.shift();
// console.log(marks);

// let newWord=marks.slice(0,5);
// console.log(newWord);

// newWord.splice(2,2,["prince","sachin"]);
// // newWord.splice(2,2,"prince","sachin");
// console.log(newWord);




// let company=["Bloomberg","Microsoft","Uber","IBM","Netflix"];

// company.shift();
// console.log(company);

// company.splice(1,1,"Ola");  // change original arr
// console.log(company);

// company.push("Amazon");
// console.log(company);



// let arr=['p','r','i','n','c','e']
// console.log(arr.join())
// console.log(arr.join(""))


//to find element is exit or not  return -1 if not element exit
// let arr=[1,2,3,4,5,6,6,7,8,9];
// console.log(arr.indexOf(10));


//to short an array
// let arr=[1,5,6,7,8,9,2,3,4,0];
// let newArr=arr.sort();
// console.log(newArr)



let arr=[1,5,6,7,8,9,2,3,4,0];
arr.sort((a,b)=>a-b);
console.log(arr)
arr.sort((a,b)=>b-a);
console.log(arr)