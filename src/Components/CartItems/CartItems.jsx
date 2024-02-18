import React, { useState, useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../Context/ShopContext";

export const CartItems = (props) => {
  const { setCartItem, setGrandtotal, uniqueCart, setUniqueCart } =
    useContext(ShopContext);

  const [quantity, setQuantity] = useState(props.quantity);

  const removeItem = () => {
    setQuantity((prev) => prev - 1);
    setCartItem((prev) => prev - 1);
    setGrandtotal((prev) => prev - props.price); // Update grandtotal by subtracting item price

    // Update uniqueCart by decrementing quantity or removing item
    const updatedUniqueCart = uniqueCart.map((item) => {
      if (item.id === props.id) {
        return { ...item, quantityNum: item.quantityNum - 1 };
      }
      return item;
    });
    const filteredUniqueCart = updatedUniqueCart.filter(
      (item) => item.quantityNum !== 0
    );

    setUniqueCart(filteredUniqueCart);
  };

  const total = props.price * quantity;

  return quantity === 0 ? null : (
    <tr>
      <td className="cart-product">
        <img src={props.img} className="cart-img" alt="Product" />
      </td>
      <td className="cart-title">{props.name}</td>
      <td className="cart-price">${props.price}</td>
      <td className="cart-quantity">{quantity}</td>
      <td className="cart-total">${total}</td>
      <td className="cart-remove" onClick={removeItem}>
        X
      </td>
    </tr>
  );
};
