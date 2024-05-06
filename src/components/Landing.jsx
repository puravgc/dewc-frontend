import React, { useEffect } from "react";
import amb1 from "../assets/amb1.jpg";
import amb2 from "../assets/amb2.jpg";
import amb3 from "../assets/amb3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Landing = () => {
  return (
    <div>
      <div class="banner" id="homeSection">
        <div class="xyz">
          <div class="text">
            <h1>
            Disabled Women Empowerment Center (DWEC) – Kaski
              <br />
              <span>Empowering</span> <span>Abilities </span>
              <span>Embracing Differences</span>
            </h1>
          </div>
          <div className="slider">
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              stopOnHover={false}
              showArrows={true}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
            >
              <div className="slider-img-container">
                <img src={amb3} />
              </div>
              <div className="slider-img-container">
                <img src={amb2} />
              </div>
              <div className="slider-img-container">
                <img src={amb1} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
