// const simaranPromise=new Promise((resolve,reject)=>{
//   let parentDecision=true;
//   if(parentDecision){
//     resolve("Yayy,ab shaadi ki tayari karo")
//   }else{
//     reject("Papa ne IAS dhood lia hai , Sorry...")
//   }
// });

// simaranPromise.then((msg)=>{
//   console.log("Simaran message: "+msg)
//   console.log("lets book the wedding venue")
// }).catch((msg)=>{
//   console.log("Simaran message: "+msg)
//   console.log("Kaha ho Tinder")
// })









const simaranPromise=new Promise((resolve,reject)=>{
  let parentDecision=true;
  if(parentDecision){
    resolve("Yayy,ab shaadi ki tayari karo",parentDecision)
  }else{
    reject("Papa ne IAS dhood lia hai , Sorry...",parentDecision)
  }
});

simaranPromise.then((msg,disi)=>{
  console.log("Simaran message: "+msg)
  console.log("Papa decision: "+disi)
  console.log("lets book the wedding venue")
}).catch((msg)=>{
  console.log("Simaran message: "+msg)
  console.log("Papa decision: "+disi)
  console.log("Kaha ho Tinder")
}).finally(()=>{
  console.log("Chalo life me clearity mili.")
})