import React, { useState, useContext } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setshowpass] = useState(false);
  const { userlogin, setuserlogin } = useContext(LoginContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dewc-vercel.vercel.app/signin", {
        username: username,
        password: password,
      });

      const data = response.data;

      if (data.message) {
        alert(data.message);
        localStorage.setItem("jwt", data.token);
        setuserlogin(true);
        navigate("/");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="passinp">
            <input
              type={showpass ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <div
              className="password"
              onClick={() => {
                setshowpass(!showpass);
              }}
            >
              {showpass ? (
                <>
                  <span class="material-symbols-outlined">visibility_off</span>
                </>
              ) : (
                <>
                  <span class="material-symbols-outlined">visibility</span>
                </>
              )}
            </div>
          </div>
        </div>
        <button type="submit" className="buttonlogin" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
