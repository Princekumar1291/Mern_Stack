const f1Promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(Math.random()>.5){
      resolve("Friend1: Hey I am in for Goa.");
    }else{
      reject("Friend1: Sorry mere pet mei dard ho raha hai.")
    }
    
  },1000)
})

const f2Promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(Math.random()>.5){
      resolve("Friend2: Hey I am in for Goa.");
    }else{
      reject("Friend2: Sorry meri bili bimar hai.")
    }
    
  },2000)
})

const f3Promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(Math.random()>.5){
      resolve("Friend3: Hey I am in for Goa.");
    }else{
      reject("Friend3: Sorry mujhe PW ke live skill karne hai.")
    }  
  },3000)
})

Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
  console.log(msg)
  console.log("Hey we are going goa")
}).catch((msg)=>{
  console.log(msg)
  console.log("Band kro ye Goa ka plain banana")
})