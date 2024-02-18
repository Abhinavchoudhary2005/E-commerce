import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartItem, setCartItem] = useState(0);
  const [grandtotal, setGrandtotal] = useState(0);
  const [uniqueCart, setUniqueCart] = useState(
    Object.values(
      cart.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {})
    )
  );

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cart,
        setCart,
        cartItem,
        setCartItem,
        grandtotal,
        setGrandtotal,
        uniqueCart,
        setUniqueCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
