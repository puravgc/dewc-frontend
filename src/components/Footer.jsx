import React from 'react';
import "../index.css";
import contactLogo from "../assets/logo.png";
import fbLogo from "../assets/fb logo.png";

const Footer = () => {
  return (
    <footer class="footer" id="contactSection">
      <div class="container">
        <h2 class="contactTitle">Contact Us</h2>
        <div class="contactLogo">
          <img src={contactLogo} alt="DWEC" />
        </div>
        <div class="contact-container">
          <div class="contact-info">
            <div class="contact-item">
              <h3>Phone Number:</h3>
              <p>+977-61450753, 9846184954</p>
            </div>
            <div class="contact-item">
              <h3>Email Address:</h3>
              <p>dweckaski@gmail.com</p>
            </div>
            <div class="contact-item">
              <h3>Address:</h3>
              <p>Pokhara Metropolitan City: 15 <br /> Nayagaun, Kaski</p>
            </div>
            <div class="contact-item">
              <h3>Running Hours:</h3>
              <p>Sunday - Friday: 10:00 AM - 5:00 PM<br /> Saturday: Closed</p>
            </div>
            <div class="contact-item">
              <h3>Follow us on:</h3>
              <p>
                <a href="https://www.facebook.com/profile.php?id=100069355609791" target="_blank">
                  <img src={fbLogo} alt="Facebook Logo" class="social-icon" />
                </a>
              </p>
            </div>
            <div class="copyright-content">
              <p>&copy; 2024 DWEC. All rights reserved.Designed by Sachet Singh Karki</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
