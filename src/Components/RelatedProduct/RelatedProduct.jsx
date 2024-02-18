import React from "react";
import "./RelatedProduct.css";
import { Items } from "../Items/Items";
import related_data from "../Assets/data";

export const RelatedProduct = () => {
  return (
    <div className="related-data">
      <div className="related-data-h1-div">
        <h1 className="related-data-h1">RELATED PRODUCT</h1>
      </div>
      <div className="related-data-card">
        {related_data.map((related_data) => (
          <Items
            key={related_data.id}
            id={related_data.id}
            image={related_data.image}
            desc={related_data.name}
            newprice={related_data.new_price}
            oldprice={related_data.old_price}
          />
        ))}
      </div>
    </div>
  );
};
