import React, { useState } from "react";
import video from "../assets/background video.mp4";
import logo from "../assets/logo.png";
import ytlogo from "../assets/youtube logo.png";
const Video = () => {
  const [readmore, setreadmore] = useState(false);
  return (
    <div className="mainedu">
      <div class="education" id="disabilitySection">
        <h2 class="educationTitle">Documentary</h2>
        <video autoPlay muted loop class="videoPlayer">
          <source src={video} type="video/mp4" className="source" />
          Your browser does not support HTML5 video.
        </video>
        <div class="educationContainer">
          <div class="educationHolder">
            <h3>
              Beyond Limitations
              <br />
              <strong>A DWEC Documentary</strong>
            </h3>
            <div class="eduLogo">
              <img src={logo} alt="DWEC" />
            </div>
            <p class="edufirst">
              "Beyond Limitations: A DWEC Documentary" delves deep into the
              journeys of individuals who defy conventional boundaries and
              redefine what it means to overcome challenges. With unwavering
              determination, they shatter stereotypes and pave the way for a
              more inclusive society.
            </p>
            {readmore ? (
              <p class="edusec">
                Through their stories, the documentary ignites a sense of
                empowerment and sparks meaningful conversations about equality
                and accessibility. As viewers embark on this transformative
                journey, they are reminded of the boundless potential within
                each individual and the importance of celebrating diversity in
                all its forms.
              </p>
            ) : (
              <></>
            )}
            <button
              id="readMore"
              onClick={() => {
                setreadmore(!readmore);
              }}
            >
              Read {readmore ? "Less" : "More"}
            </button>
            <div class="info">
              <h2>Watch our documentary on YouTube</h2>
              <a
                href="https://www.youtube.com/watch?v=iXLaqS0G2qE&ab_channel=YouthPowerYP2LE"
                target="_blank"
              >
                <img src={ytlogo} alt="YouTube Icon" /> Click here to watch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
