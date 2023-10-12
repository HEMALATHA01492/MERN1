import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function  PasswordReset({url}) {
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const { id }=useParams()


  const handleReset =(e) => {
    e.preventDefault()
      axios.patch(`${url}/PasswordReset/${id}`,{password})
      .then(result => {
        console.log(result)
        navigate('/password')
      })
      .catch( err => console.log(err))

  }
  return (
    <div className="resetpassword">
      <div className="card">
    <form onSubmit={handleReset}>
      <h2>Reset Password</h2>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your New Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
     
      <button type="submit">
        Update Password
      </button>
    </form>
    </div>
    </div>
  );
};

export default PasswordReset;