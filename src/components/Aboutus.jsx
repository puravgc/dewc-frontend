import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../index.css";
const Aboutus = () => {
  const [readmore, setreadmore] = useState(false);
  return (
    <div class="aboutus" id="aboutSection">
      <div class="aboutContent">
        <div>
          <h2 class="aboutTitle">About Us</h2>
        </div>

        <div class="aboutLogo">
          <img src={logo} alt="DWEC" />
        </div>
        <div>
          <p class="initial-paragraph">
            Situated in the picturesque city of Pokhara, nestled amidst the
            serene beauty of the Himalayas, the Disabled Women Empowerment
            Center (DWEC) serves as a beacon of hope and resilience for disabled
            women across the region. More than just a physical space, DWEC
            represents a sanctuary where disabled women discover not only
            camaraderie but also a profound sense of purpose and belonging.
            Through a diverse range of programs and initiatives meticulously
            crafted to cater to their unique needs, DWEC empowers disabled women
            to overcome challenges and seize opportunities for personal and
            professional growth. At DWEC, education is not just a privilege but
            a fundamental right, and vocational training is a pathway to
            independence and self-sufficiency.
          </p>

          {readmore ? (
            <p class="additional-paragraph">
              Moreover, DWEC places a strong emphasis on holistic healthcare,
              ensuring that disabled women have access to essential medical
              services and support to enhance their overall well-being. Beyond
              its role as a service provider, DWEC serves as a tireless advocate
              for the rights and dignity of disabled women, challenging
              stereotypes and breaking down barriers to inclusion. Through
              collaborative partnerships and grassroots initiatives, DWEC
              champions the cause of accessibility and equal opportunity,
              striving to create a more inclusive and equitable society for all.
              With unwavering dedication and a steadfast commitment to
              empowerment and inclusion, DWEC is not just changing lives—it's
              transforming communities and reshaping the narrative around
              disability. As we look towards the future, DWEC remains steadfast
              in its mission to empower disabled women, forging a path towards a
              brighter and more inclusive tomorrow for all.
            </p>
          ) : (
            <></>
          )}
        </div>
        <button
          id="read-more-btn"
          onClick={() => {
            setreadmore(!readmore);
          }}
        >
          {readmore?(
            <>Read Less</>
          ):(
            <>Read More</>
          )}
        </button>

        <div>
          <h2 id="vision">Vision</h2>
        </div>
        <p class="vissionPara">
          DWEC&#39;s vision for a more inclusive and equitable Nepali society is
          deeply intertwined with its purpose, mission, and overarching goal.
          Through its clear mission to empower women and girls with disabilities
          and encourage their active participation in all spheres of society,
          DWEC aims to contribute to the realization of this vision. By adopting
          a Rights-Based Approach (RBA) in its program design and
          implementation, DWEC ensures that its activities promote participation
          and inclusion, ultimately working towards the creation of a society
          where everyone enjoys equal rights and social benefits. This approach
          not only aligns with DWEC&#39;s mission but also supports the
          achievement of its overall goal of protecting the rights of women and
          girls with disabilities and increasing their inclusion in mainstream
          society. Furthermore, DWEC recognizes that its mission and overall
          goal serve as guiding principles for both strategic planning and
          day-to-day operations, ensuring that all program activities are
          directly linked to advancing its mission and vision for a more
          empowered and inclusive society.
        </p>

        <h2 id="goal">Goals</h2>
        <ul>
          <li>
            To protect the rights of women and girls with disabilities and
            increase the rate of inclusion in mainstream society
          </li>

          <li>
            {" "}
            To improve their social, political, religious, cultural, economic,
            psychological status in society
          </li>

          <li>
            To reduce/eliminate the all kinds of discrimination, barrier,
            violence towards girls and women with disabilities.
          </li>
        </ul>

        <h2 id="objective">Objectives</h2>
        <ul>
          <li>
            {" "}
            Safeguard the rights of women and girls with disabilities through
            advocacy initiatives.
          </li>
          <li>Increase inclusion rates in mainstream society.</li>
          <li>
            Enhance the social, political, religious, cultural, economic, and
            psychological status of women and girls with disabilities.
          </li>
          <li>
            Work towards reducing and eliminating all forms of discrimination,
            barriers, and violence faced by girls and women with disabilities.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutus;
