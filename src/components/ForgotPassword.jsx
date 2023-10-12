import axios from "axios";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

function  ForgotPassword({url}) {
  const [email, setEmail] = useState()
  const navigate = useNavigate()

  const handleForgot =(e) => {
    e.preventDefault()
      axios.put(`${url}/forgotPassword`,{email})
      .then(result => {
        console.log(result)
        navigate('/mail')
      })
      .catch( err => console.log(err))

  }
  return (
    <div className="forgotpassword">
    <div className="card">
    <form
      onSubmit={handleForgot}
    >
      <h4>Forgot Password</h4>
        <input
          type="email"
          className="form-control"
          id="userName"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email here"
        />
        <small className="form-text text-muted"></small>
      <button type="submit">
        Send Mail
      </button>
      </form>
      </div>
      </div>
  );
};

export default ForgotPassword;