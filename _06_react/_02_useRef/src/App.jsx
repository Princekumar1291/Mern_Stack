import React, { useRef } from 'react';
import Useref from './Useref';
const App = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const submitHandler = () => {
    let nameValue = name.current.value;
    let emailValue = email.current.value;
    let passwordValue = password.current.value;
    console.log(nameValue, emailValue, passwordValue);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name </label>
        <input type="text" name="name" ref={name} id="name" />
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <input type="email" name="email" ref={email} id="email" />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input type="password" name="password" ref={password} id="password" />
      </div>
      <button type="submit" onClick={submitHandler}>Submit</button>
      <Useref/>
    </div>
  );
};

export default App;
