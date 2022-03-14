import React from "react";
import Facebook from "../../../assets/iconos/facebook.png";
import Logo from "../../../assets/logo/logo_02.png";
import Instagram from "../../../assets/iconos/instagram.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-ctn">
        <div className="footer-logo">
          <img src={Logo} alt="Viajes" />
        </div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="facebook icon" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="facebook icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
