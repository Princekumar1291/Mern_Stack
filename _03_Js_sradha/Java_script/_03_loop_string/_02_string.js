let s="Prince";
let n=s.length;
console.log(n);
console.log(s[0]);


let str="  Ham apke hai kaun!  ";
console.log(`${str} its length is ${str.length}`)  //templet literals(string interpolation)

let temp=str.toUpperCase();
console.log(temp);

let temp1=str.toLowerCase();
console.log(temp1);

let temp2=str.trim();
console.log(temp2);

let temp3=str.slice(2,10);
console.log(temp3);

let ss2="Sahi me!";
let temp4=str.concat(ss2);
console.log(temp4);
console.log("hell0" + 123);

let temp5=str.replace('Ham','e');
console.log(temp5);

let temp6=str.replaceAll('a','e');
console.log(temp6);

let temp7=str.charAt(3);
console.log(temp7);