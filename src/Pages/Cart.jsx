import React, { useContext } from "react";
import { CartItems } from "../Components/CartItems/CartItems.jsx";
import { ShopContext } from "../Components/Context/ShopContext";
import "./CSS/Cart.css";

export const Cart = () => {
  const { cart, grandtotal, uniqueCart } = useContext(ShopContext);

  for (let i = 0; i < cart.length; i++) {
    let productId = cart[i].id;
    let quantity = 0;

    for (let j = 0; j < cart.length; j++) {
      if (productId === cart[j].id) {
        quantity++;
      }
    }

    cart[i].quantityNum = quantity;
  }

  return (
    <div className="cart-card">
      {uniqueCart.length === 0 ? (
        <h1 className="cart-empty-text">
          Cart is empty <br />
          Add items to Cart
        </h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th className="cart-product">Products</th>
              <th className="cart-title">Title</th>
              <th className="cart-price">Price</th>
              <th className="cart-quantity">Quantity</th>
              <th className="cart-total">Total</th>
              <th className="cart-remove">Remove</th>
            </tr>
          </thead>
          <tbody>
            {uniqueCart.map((data) =>
              data.quantityNum === 0 ? null : (
                <CartItems
                  key={data.id}
                  id={data.id}
                  img={data.image}
                  name={data.name}
                  price={data.new_price}
                  quantity={data.quantityNum}
                />
              )
            )}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="cart-quantity">
                <b>Grand Total:- </b>
              </td>
              <td className="cart-total">
                <b>${grandtotal}</b>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
