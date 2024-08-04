try{
  let obj=undefined
  console.log(obj.name)
}catch(err){
  console.log("Exception handled")
  // console.log(err)
}finally{
  console.log("It will always excute")
}