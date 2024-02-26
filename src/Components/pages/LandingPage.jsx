import React, { useEffect, useState } from "react";



import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";




const LandingPage = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    // try {
    //   const response = await fetch("http://localhost:3000/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });
  
    //   if (!response.ok) {
    //     throw new Error(`Login failed: ${await response.text()}`);
    //   }
  
      // After successful login with your backend, redirect using Auth0
    //   await loginWithRedirect({
    //     redirectUri: `${window.location.origin}/dashboard`
    //   });
    navigate("/user", { state: { userEmail: email, password: password } });

    // } catch (error) {
    //   // Handle login failure, display an error message, etc.
    //   console.error("Login error:", error);
    // }
  };



  return (
    <div className="login-main">
      <div className="login-left">
        {/* <img src={Image} alt="" /> */}
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            {/* <img src={Logo} alt="" /> */}
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
              <div className="pass-input-div">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
              <button type="button" onClick={handleLogin}>
                  Log In
                  </button>
                {/* <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button> */}
              </div>
            </form>
          </div>
{/* 
          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
