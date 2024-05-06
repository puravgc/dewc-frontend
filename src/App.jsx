import React, { useState } from "react";
import "./App.css"
import Main from "./components/Main.jsx";
import Login from "./components/Login";
import Admin from "./components/Admin.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContext } from "./context/LoginContext.js";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const [userlogin, setuserlogin] = useState(false);
  return (
    <div className="main">
      <LoginContext.Provider value={{ setuserlogin, userlogin }}>
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
};

export default App;
