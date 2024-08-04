//use for security
function customerCount(){
  let count=0;
  return function(){
    count++;
    console.log(count)
  }
}

let counter=customerCount();
counter()
counter()
counter()

//we can not excess count variable outside
 