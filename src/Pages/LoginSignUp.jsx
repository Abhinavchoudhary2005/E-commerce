import React, { useState } from "react";
import "./CSS/LoginSignUp.css";

export const LoginSignUp = () => {
  const [loginsignup, setLoginsignup] = useState("login");

  const handleSwitchMode = () => {
    setLoginsignup(loginsignup === "login" ? "signup" : "login");
  };

  const Login = () => (
    <div className="login">
      <h1>Login</h1>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="login-sign-up-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-sign-up-input"
        />
      </div>
      <button className="login-sign-up-btn">Continue</button>
      <p>
        Create an account?{" "}
        <b className="login-sign-up-text" onClick={handleSwitchMode}>
          Create here
        </b>
      </p>
      <div>
        <input type="checkbox" id="login-checkbox" />
        <label htmlFor="login-checkbox" className="checkbox-label">
          By continuing, I agree to the terms of use & privacy policy
        </label>
      </div>
    </div>
  );

  const SignUp = () => (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="login-sign-up-input"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="login-sign-up-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-sign-up-input"
        />
      </div>
      <button className="login-sign-up-btn">Continue</button>
      <p>
        Already have an account?{" "}
        <b className="login-sign-up-text" onClick={handleSwitchMode}>
          Login here
        </b>
      </p>
      <div>
        <input type="checkbox" id="signup-checkbox" />
        <label htmlFor="signup-checkbox" className="checkbox-label">
          By continuing, I agree to the terms of use & privacy policy
        </label>
      </div>
    </div>
  );

  return (
    <div className="login-sign-up">
      <div className="login-sign-up-card">
        {loginsignup === "login" ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};
