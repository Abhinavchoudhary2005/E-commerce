import React from "react";
import "./NewCollection.css";
import Newdata from "../Assets/new_collections";
import { Items } from "../Items/Items";

export const NewCollection = () => {
  return (
    <div className="NewCollection">
      <div className="NewCollection-h1-div">
        <h1 className="NewCollection-h1">NEW COLLECTIONS</h1>
      </div>
      <div className="NewCollection-card">
        {Newdata.map((data) => (
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
