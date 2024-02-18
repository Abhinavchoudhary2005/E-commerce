import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Components/Context/ShopContext";
import star_icon from "../Components/Assets/star_icon.png";
import star_dull_icon from "../Components/Assets/star_dull_icon.png";
import "./CSS/Product.css";
import { RelatedProduct } from "../Components/RelatedProduct/RelatedProduct";

export const Product = () => {
  const { all_product, setCart, setCartItem, setGrandtotal, setUniqueCart } =
    useContext(ShopContext);

  const { ProductId } = useParams();

  const product = all_product.find((data) => data.id === Number(ProductId));

  const AddToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
    setCartItem((prev) => prev + 1);
    setGrandtotal((prev) => prev + product.new_price); // Update grandtotal by adding item price

    // Update uniqueCart by adding new item
    setUniqueCart((prevUniqueCart) => {
      const updatedUniqueCart = [...prevUniqueCart, product];
      return Object.values(
        updatedUniqueCart.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {})
      );
    });
  };

  return (
    <div>
      <div className="product">
        <div className="product-child">
          <div className="side-img-card">
            <img src={product.image} className="side-img" alt="" />
            <img src={product.image} className="side-img" alt="" />
            <img src={product.image} className="side-img" alt="" />
            <img src={product.image} className="side-img" alt="" />
          </div>
          <div>
            <img src={product.image} className="main-img" alt="" />
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <div>
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull_icon} alt="" />
              (122)
            </div>
            <div className="price">
              <div className="old-price">${product.old_price}</div>
              <div className="new-price">
                <b>${product.new_price}</b>
              </div>
            </div>
            <div>
              A shirt is a versatile garment worn on the upper body, typically
              with buttons down the front.
            </div>
            <div>
              <h3>Select Size</h3>
              <div className="size-container">
                <div className="size-box">S</div>
                <div className="size-box">M</div>
                <div className="size-box">L</div>
                <div className="size-box">XL</div>
                <div className="size-box">XXL</div>
              </div>
              <button className="add-to-cart" onClick={AddToCart}>
                Add To Cart
              </button>
            </div>
            <div>
              <p>
                <b>Category: </b>
                {product.category}
              </p>
              <p>
                <b>Tags: </b>Modern, Latest
              </p>
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct />
    </div>
  );
};
