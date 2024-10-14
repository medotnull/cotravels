import React, { useState } from 'react'

const SignIn = () => {
    const [username, setUsername] = useState('');
    
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome ${username}!`);
    }
  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label for="username" >Username/email :</label>
        <input type="text" value={username } onChange={(e) => setUsername(e.target.value)}/>
        <br></br>
        <label for="password">Password :</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br></br>
        <button type="submit">Login</button>
      </form>
      <p>Don't have Account? 
        <a href="signup">Sign Up</a>
      </p>
    </div>
  )
}

export default SignIn;
