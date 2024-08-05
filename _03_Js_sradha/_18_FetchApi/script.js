const url="https://cat-fact.herokuapp.com/facts";

const getFacts=async ()=>{
  let response=await fetch(url);
  let data=await response.json();
  console.log(data)
}

getFacts()