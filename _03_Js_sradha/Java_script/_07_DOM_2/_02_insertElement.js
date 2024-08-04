let newBtn=document.createElement("button");
newBtn.innerText="Click Me!";
console.log(newBtn)

let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

let heading=document.createElement("h1");
heading.innerText="This is me!"
document.querySelector("body").prepend(heading);
heading.remove();



let btn=document.createElement("button");
btn.innerText="Click Me!";
btn.style.backgroundColor="red";
btn.style.color="white";
btn.style.borderRadius="10px";
console.log(btn.innerText);

let div2=document.querySelector("body");
div2.prepend(btn);


let para=document.querySelector(".content");
// para.setAttribute("class","newClass");
para.classList.add("newClass");

