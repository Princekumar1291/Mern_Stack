function greet(name,callbackFun){
  const greeting="Hello " + name;
  callbackFun(greeting)
}

function displayGreeting(message){
  console.log(message)
}

greet("Prince",displayGreeting)




//callback hell or prymid of doom