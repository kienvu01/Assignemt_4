import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginContext from "../context/LoginContext";

export const Login = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");
  
    const handleValidation = (event) => {
      let formIsValid = true;
  
      if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        formIsValid = false;
        setemailError("Email Not Valid");
        return false;
      } else {
        setemailError("");
        formIsValid = true;
      }
  
      if (!password.match(/^[a-zA-Z]{8,22}$/)) {
        formIsValid = false;
        setpasswordError(
          "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
        );
        return false;
      } else {
        setpasswordError("");
        formIsValid = true;
      }
      
      return formIsValid;
    };


    const loginSubmit = (e) => {
      e.preventDefault();
      handleValidation();     
      localStorage.setItem("accessToken",true);
      
    };
    const logout = ()=>{
      
        localStorage.removeItem("accessToken");
    };

    console.log("token:",localStorage.getItem("accessToken"))
  
  return (

    <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-md-4">
        <form id="loginform" onSubmit={loginSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="EmailInput"
              name="EmailInput"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <small id="emailHelp" className="text-danger form-text">
              {emailError}
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <small id="passworderror" className="text-danger form-text">
              {passwordError}
            </small>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Remember</label>
          </div>
          <button type="submit" className="btn btn-primary" >         
            Submit
          </button>
          <>{localStorage.getItem("accessToken")?(
            <div>
              <p>{localStorage.getItem("accessToken")}</p>
              <h2>You are logged in</h2>
              <button onClick={logout} className="btn btn-danger" >         
            Logout
          </button>
            </div>         
          ):<></>}</>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login;