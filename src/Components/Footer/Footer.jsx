import React from "react";
import "./Footer.css";
import logo from "../Assets/logo_big.png";
import insta from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pinterest_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-display">
        <div className="footer-card">
          <div className="footer-logo-container">
            <img src={logo} alt="" />
            <h2 className="footer-heading">SHOPY</h2>
          </div>
          <div className="footer-link">
            <ul>
              <li>Company</li>
              <li>Products</li>
              <li>Offices</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="socials">
            <img src={insta} alt="" />
            <img src={pinterest} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
      </div>
      <div className="copyright">Copyright © 2024 - All Rights Reserved.</div>
    </div>
  );
};
