// async function getMessage(){
//   return "Hello Teacher"
// }

// getMessage().then((msg)=>{
//   console.log(msg)
// })






// function printHe() {
//   console.log("First line")
//   setTimeout(() => {
//     console.log("Hello Teacher")
//   }, 2000);
//   console.log("Last line")
// }
// printHe();



console.log("Hello from begining")
async function printHello() {
  console.log("First line")
  let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Hello Students")
    },3000)
  })
  let result=await data;
  console.log(result)
  console.log("Last line")
}
printHello();
console.log("Hello from end")