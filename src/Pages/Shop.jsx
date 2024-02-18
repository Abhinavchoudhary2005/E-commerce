import React from "react";
import { Hero } from "../Components/Hero/Hero.jsx";
import { PopularWomen } from "../Components/Popular-women/Popular-women.jsx";
import { Exclusive } from "../Components/Exclusive/Exclusive.jsx";
import { NewCollection } from "../Components/NewCollection/NewCollection.jsx";
import { EmailOffer } from "../Components/EmailOffer/EmailOffer.jsx";

export const Shop = () => {
  return (
    <div>
      <Hero />
      <PopularWomen />
      <Exclusive />
      <NewCollection />
      <EmailOffer />
    </div>
  );
};
