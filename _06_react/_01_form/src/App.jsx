import React from 'react'

const App = () => {
  const submitHandlar = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
  }
  return (
    <div>
      <form onSubmit={submitHandlar}>
        <div>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
