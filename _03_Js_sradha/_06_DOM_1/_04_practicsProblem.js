let headChange=document.body.querySelector("h1");
headChange.innerText+="In Javascript";
console.log(headChange);


let divs=document.querySelectorAll(".box");
// console.log(access);
let t=divs[0].innerText="This is div1"
divs[1].innerText="Hello I am div 2"
divs[2].innerText="Hello I am div 3"


for(div of divs){
    div.innerText="he! hhaaaa";
    console.log(div);
}
// console.log(t);