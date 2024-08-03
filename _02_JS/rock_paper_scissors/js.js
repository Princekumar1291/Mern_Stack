let btnSelect = document.querySelector("#btnSelect");

const btn1ClickHandler = () => {
  let btn1 = document.querySelector(".btn1");
  btnSelect.innerHTML = `<h3>You Have Clicked On ${btn1.innerHTML}</h3>`
  computerSelectHandler(1);
}
const btn2ClickHandler = () => {
  let btn2 = document.querySelector(".btn2");
  btnSelect.innerHTML = `<h3>You Have Clicked On ${btn2.innerHTML}</h3>`
  computerSelectHandler(2);
}
const btn3ClickHandler = () => {
  let btn3 = document.querySelector(".btn3");
  btnSelect.innerHTML = `<h3>You Have Clicked On ${btn3.innerHTML}</h3>`
  computerSelectHandler(3);
}

let computerSelect = document.querySelector("#computerSelect");
const computerSelectHandler = (t) => {
  let randomSelect = Math.floor(Math.random() * 3 + 1);
  console.log(randomSelect)
  if (randomSelect == 1) {
    computerSelect.innerHTML = `<h3>The Computer Has Selected ✊Rock</h3>`
  }
  else if (randomSelect == 2) {
    computerSelect.innerHTML = `<h3>The Computer Has Selected ✋Paper</h3>`
  }
  else if (randomSelect == 3) {
    computerSelect.innerHTML = `<h3>The Computer Has Selected ✌️Scissors</h3>`
  }

  let result = document.querySelector("#result");
  if (t == randomSelect) {
    result.innerHTML = `<h3>Draw</h3>`
  }
  else if ((t == 1 && randomSelect == 2) || (t == 2 && randomSelect == 3) || (t == 3 && randomSelect == 1)) {
    result.innerHTML = `<h3>You Win</h3>`
  }
  else {
    result.innerHTML = `<h3>You Lose</h3>`
  }

  document.querySelector(".score").innerHTML='<h3>Score : '+score.player+'-'+score.computer+'</h3>'
}


let score={
  player:0,
  computer:0
} 
 