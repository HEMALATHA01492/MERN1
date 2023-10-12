import axios from "axios";
import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

//get email,password from USER -->LOGIN SUCCESS-->HOME PAGE
function SignIn ({url}) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSignIn =(e) => {
    e.preventDefault()
      axios.post(`${url}/signin`,{email,password})
      .then(res =>{
        window.localStorage.setItem("loggedInUser", JSON.stringify(res.data.token))
        navigate('/Home')

      })
      .catch( err => console.log(err))

  }
  return (
    <div className="login">
    <div className="card">
      <div className="left">
        <h2>Hello World.</h2>
        <p>
        The future belongs to those who 
        believe in the beauty of their dreams!
        </p>
        <span>Don't You have an account?</span>
        <Link to="/">
          <button className="registerButton">Register</button></Link>
      </div>
      
      <div className="right">
      <h1>Login </h1>

    <form onSubmit={handleSignIn}>
        <input
          type="email"
          id="userName"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
      <button type="submit">
        Login
      </button>
        
        <Link id="forgot" to="/forgotPassword">
          Forgot Password?
        </Link>
      
    </form>
    </div>
    </div>
    </div>
  );
};

export default SignIn;