import React from "react";
import "./Hero.css";
import heroImg from "../Assets/hero_image.png";
import arrow from "../Assets/arrow.png";

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="intro">
        <div>
          <h3>New Arrivals Only</h3>
          <h1 className="intro-heading">
            New
            <br />
            Collections
            <br />
            For Everyone
          </h1>
          <button className="hero-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <div>
        <img src={heroImg} className="hero-img" alt="" />
      </div>
    </div>
  );
};
