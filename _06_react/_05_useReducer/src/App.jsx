import React, { useReducer, useRef } from 'react'

const counterReducer=(state,action)=>{
  let newState=state;
  if(action.type==="INCREMENT"){
    newState+=1;
  }
  else if(action.type==="DECREMENT"){
    newState-=1;
  }
  else if(action.type==="RESET"){
    newState=0;
  }
  else if(action.type==="DOUBLE"){
    newState*=2;
  }
  else if(action.type==="CHANGEBY"){
    newState+=action.payload.num;
  }
  return newState;
}

const App = () => {

  const num=useRef(0);
  
  const [counterVal,CounterDispatch]=useReducer(counterReducer,0);

  const handleIncrement=()=>{
    CounterDispatch({type:"INCREMENT"});
  }
  
  const handleDecrement=()=>{
    CounterDispatch({type:"DECREMENT"});
  }
  const handleReset=()=>{
    CounterDispatch({type:"RESET"});
  }
  const handleDouble=()=>{
    CounterDispatch({type:"DOUBLE"});
  }
  const handleChangeBy=()=>{
    CounterDispatch({
      type:"CHANGEBY",
      payload:{
        num:Number(num.current.value)
      }
    });
  }

  return (
    <>
    <h1>Count: {counterVal}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleDouble}>Double</button>
    <button onClick={handleChangeBy}>Change By</button>
    <input type="number" name="num" id="num" ref={num} />
    </>
  )
}

export default App
