import React from "react";
import "./EmailOffer.css";

export const EmailOffer = () => {
  return (
    <div className="EmailOffer">
      <div className="EmailOfferCard">
        <div className="EmailOfferSubCard">
          <h1 className="EmailOffer-h1">Get Exclusive Offers On Your Email</h1>
          <p className="EmailOffer-p">
            Subscribe to our newsletter and stay updated
          </p>
          <div className="input-btn-div">
            <input
              type="input"
              placeholder="Your email id"
              className="news-email"
            />
            <button className="email-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
