// let product={
//   company:'Nike',
//   itemName:'Running shoes',
//   price:800,
//   avgRation:4.5,
//   nmberOfRatine:38,
// }

// console.log(product)


// let company='Nike';
// let itemName='Running shoes';
// let price=800;
// let avgRation=4.5;
// let nmberOfRatine=38;


let product2={
  a:10
}

let product3={
  a:20
}
function swap(product2,product3){
  var temp=product2.a;
  product2.a=product3.a;
  product3.a=temp;
  console.log(product2)
}
swap(product2,product3)
console.log(product2)


let name1='prince';
let tem=name1.toLowerCase() 
let tem2=name1.toLocaleLowerCase() 

console.log(tem)
console.log(tem2)