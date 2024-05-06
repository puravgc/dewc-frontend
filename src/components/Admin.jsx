import React, { useEffect, useState } from "react";
import "./Admin.css";
import Navbar from "./Navbar";
import Projectsedit from "./Projectsedit";
import Articleedit from "./Articleedit";
import Galleryedit from "./Galleryedit";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [active, setactive] = useState("projects");
  
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
  }, []);
  


  return (
    <div className="admin">
      <div className="top">
        <div>
          <button
            className="goback"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </button>
        </div>
        <div className="adminheading">
          <h1>Admin Access</h1>
        </div>
      </div>
      <div className="mainadmin">
        <div className="sidebar">
          <div>
            <button
              className="adminbutton"
              onClick={() => {
                setactive("projects");
              }}
            >
              Projects
            </button>
          </div>
          <div>
            <button
              className="adminbutton"
              onClick={() => {
                setactive("article");
              }}
            >
              Article/Brouchers
            </button>
          </div>
          <div>
            <button
              className="adminbutton"
              onClick={() => {
                setactive("gallery");
              }}
            >
              Gallery
            </button>
          </div>
        </div>
        <div className="admin-content">
          
          {active === "projects" ? (
            <div>
              <Projectsedit />
            </div>
          ) : active === "article" ? (
            <div>
              <Articleedit />
            </div>
          ) : active === "gallery" ? (
            <div>
              <Galleryedit />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Admin;
