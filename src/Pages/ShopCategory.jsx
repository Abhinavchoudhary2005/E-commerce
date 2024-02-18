import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Components/Context/ShopContext";
import { Items } from "../Components/Items/Items";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter(
    (data) => props.category === data.category
  );

  return (
    <div className="shop-category">
      <div className="banner-div">
        <img src={props.banner} alt="Banner" className="banner" />
      </div>
      <div className="shop-category-cards-div">
        <div className="shop-category-card">
          {filteredProducts.map((data) => (
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
    </div>
  );
};
