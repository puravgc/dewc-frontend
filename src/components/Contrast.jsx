import React, { useEffect } from "react";
import icon from "../assets/icon.png";
import zoomin from "../assets/zoom in.png";
import zoomout from "../assets/zoom out.jpeg";
import highcontrast from "../assets/OIP.jpeg";
import { HashLink } from "react-router-hash-link";

const Contrast = () => {
  useEffect(() => {
    const zoomFactor = { current: 1 };
    const highContrast = { current: false };

    const accessibilityBtn = document.getElementById("accessibility-btn");
    const zoomInBtn = document.getElementById("zoom-in-btn");
    const zoomOutBtn = document.getElementById("zoom-out-btn");
    const highContrastBtn = document.getElementById("high-contrast");

    accessibilityBtn.addEventListener("click", () => {
      const accessibilityBtns = document.querySelector(".accessibility-btn");
      accessibilityBtns.style.display =
        accessibilityBtns.style.display === "block" ? "none" : "block";
    });

    zoomInBtn.addEventListener("click", () => {
      zoomFactor.current *= 1.1;
      zoom(zoomFactor.current);
    });

    zoomOutBtn.addEventListener("click", () => {
      zoomFactor.current /= 1.1;
      zoom(zoomFactor.current);
    });

    highContrastBtn.addEventListener("click", () => {
      toggleHighContrast();
    });

    function zoom(factor) {
      const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
      elements.forEach((element) => {
        let fontSize = window
          .getComputedStyle(element)
          .getPropertyValue("font-size");
        fontSize = parseFloat(fontSize);
        element.style.fontSize = fontSize * factor + "px";
      });
    }

    function toggleHighContrast() {
      const elements = document.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6,li,ul,button,ol,a"
      );
      if (!highContrast.current) {
        elements.forEach((element) => {
          element.style.color = "white";
          element.style.backgroundColor = "black";
        });
        highContrast.current = true;
      } else {
        elements.forEach((element) => {
          element.style.color = "";
          element.style.backgroundColor = "";
        });
        highContrast.current = false;
      }
    }
  }, []);

  return (
    <div className="contrast">
      <div class="accessibility-container">
      <div class="accessibility-btn">
          <button id="zoom-in-btn">
            <img src={zoomin} alt="" />
          </button>
          <button id="zoom-out-btn">
            <img src={zoomout} alt="" />
          </button>
          <button id="high-contrast">
            <img src={highcontrast} alt="" />
          </button>
        </div>
        <button id="accessibility-btn">
          <img src={icon} alt="" />
        </button>
        
      </div>
      <HashLink smooth to="#totop" className="backtotop">
        <button>
          <span class="material-symbols-outlined">arrow_upward</span>
        </button>
      </HashLink>
    </div>
  );
};

export default Contrast;
