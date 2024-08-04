// function getData(data){
//   setTimeout(()=>{
//     console.log("Data is received",data);
//   },3000)
// }

// getData(1)
// getData(2)




// function getData(data,nextData){
//   setTimeout(()=>{
//     console.log("Data is received",data);
//     nextData()
//   },2000) 
// }

// getData(1,()=>{
//   getData(2,()=>{})
// })


//callback hell
function getAllData(data,getNextData){
  setTimeout(() => {
    console.log(data)
    if(getAllData) {
      getNextData()
    }
  }, 2000);
}
getAllData(1,()=>{
  getAllData(2,()=>{
    getAllData(3,()=>{})
  })
})