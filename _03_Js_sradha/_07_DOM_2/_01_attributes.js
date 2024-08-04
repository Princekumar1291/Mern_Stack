let div=document.querySelector("div");
let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);


let div2=document.querySelector("p");
let cls=div2.getAttribute("class");
console.log(cls);


let div3=document.querySelector("p");
let newClass=div3.setAttribute("class","newClass");

// let div4=document.getElementById("box");
let div4=document.querySelector("#box");
console.log(div4);
div4.style.backgroundColor="green";
div4.style.fontSize="2rem"
