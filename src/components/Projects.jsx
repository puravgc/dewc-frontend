import React, { useEffect, useState } from "react";
import "../index.css";
import logo from "../assets/logo.png";
import tewaImage from "../assets/tewa.jpeg";
import ablisLogo from "../assets/ablis logo.jpeg";
import pkrMetroImage from "../assets/pkr metro.jpeg";
import cbmNepalImage from "../assets/cbm nepal.jpeg";
import cilLogoImage from "../assets/cil logo.jpg";
import miusaImage from "../assets/R.jpeg";
import makingCentsImage from "../assets/making cents.jpg";
import nfdnLogo from "../assets/logo-of-nfdn.png";

const Projects = () => {
  const [projectarray, setprojectarray] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://dewc-vercel.vercel.app/getproject", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setprojectarray(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <div className="programContainer" id="projectSection">
        <div className="programContent">
          <h2 className="programTitle">Projects</h2>
          <div className="programLogo">
            <img src={logo} alt="DWEC" />
          </div>

          {projectarray.map((project,index) => (
            <div id={`${index}`} key={project._id} className={index}>
              <h2 className="intro">{project.title}</h2>
              <p className="para">{project.description}</p>
              <div className="projectimage">
                {project.photos.map((photo, index) => (
                  <div className="inside">
                     <img key={index} src={photo} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <h2 className="collabTitle">In collaboration with </h2>

          <div className="logoContainer">
            <img src={tewaImage} alt="Tewa" />
            <img src={ablisLogo} alt="ablis" />
            <img src={pkrMetroImage} alt="pkr" />
            <img src={cbmNepalImage} alt="cbm" />
            <img src={cilLogoImage} alt="cil" />
            <img src={miusaImage} alt="MIUSA" />
            <img src={makingCentsImage} alt="MCI" />
            <img src={nfdnLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
