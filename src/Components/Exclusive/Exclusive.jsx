import React from "react";
import ExclusiveImg from "../Assets/exclusive_image.png";
import "./Exclusive.css";

export const Exclusive = () => {
  return (
    <div className="top-exclusive">
      <div className="Exclusive">
        <div className="exclusive-intro">
          <div>
            <h1 className="exclusive-heading">
              Exclusive <br />
              Offers For You
            </h1>
            <p className="exclusive-p">ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="exclusive-btn">Check now</button>
          </div>
        </div>
        <div>
          <img src={ExclusiveImg} className="exclusive-img" alt="" />
        </div>
      </div>
    </div>
  );
};
