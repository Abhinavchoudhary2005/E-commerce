import React from "react";
import "./Popular-women.css";
import { Items } from "../Items/Items";
import Womendata from "../Assets/data";

export const PopularWomen = () => {
  return (
    <div className="PopularWomen">
      <div className="h1-div">
        <h1 className="h1">POPULAR IN WOMEN</h1>
      </div>
      <div className="popular-women-card">
        {Womendata.map((data) => (
          <Items
            key={data.id}
            id={data.id}
            image={data.image}
            desc={data.name}
            newprice={data.new_price}
            oldprice={data.old_price}
          />
        ))}
      </div>
    </div>
  );
};
