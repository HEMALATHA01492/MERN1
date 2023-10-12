import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//get username,email,password from USER  Sign up SUCCESS-->LOGIN page
function SignUp ({url}){
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSignUp =(e) => {
    e.preventDefault()
      axios.post(`${url}/signup`,{username,email,password})
      .then(result => {
        console.log(result)
        navigate('/mail')
      })
      .catch( err => console.log(err))

  }
  return (
    <div className="register" id="register">
    <div className="card">
      <div className="left">
    <form onSubmit={handleSignUp}>
      <h2 className="text-center">Register</h2>
        
        <small className="form-text text-muted"></small>
        <input
          type="text"
          className="form-control m-1"
          id="username"
          placeholder="Name"
          autoComplete="off"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="form-control m-1"
          id="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control m-1"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button type="submit" className="register">
        Register
      </button>
      
    </form>
    </div>
    <div className="right">
        <h2>Hello World.</h2>
        <p>
        The future belongs to those who 
        believe in the beauty of their dreams!
        </p>
        <span>Already have an account!</span>
        <Link to="/signin">
          <button className="loginButton">Login</button></Link>
    </div>
 </div>
</div>

  );
};

export default SignUp;