let button=document.querySelector("button");

// button.onclick=()=>{
//     button.style.color="red";
//     alert("Form Summited");
// }


// button.addEventListener("click",()=>{
//     button.style.color="red";
// })


button.addEventListener("click",()=>{
    // button.classList.add("btn");
    // button.classList.remove("btn");
    button.classList.toggle("btn");
})