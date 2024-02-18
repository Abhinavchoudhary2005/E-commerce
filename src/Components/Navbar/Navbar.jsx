import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { cartItem } = useContext(ShopContext);

  const [menu, setMenu] = useState(() => {
    return localStorage.getItem("ShopMenu") || "shop";
  });

  useEffect(() => {
    localStorage.setItem("ShopMenu", menu);
  }, [menu]);

  return (
    <div className="Nav">
      <Link to="E-commerce/" className="Link">
        <div
          className="logo-container"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <img src={logo} className="logo" alt="Logo" />
          <h2 className="name">SHOPY</h2>
        </div>
      </Link>
      <ul>
        <MenuItem to="/E-commerce" label="Shop" setMenu={setMenu} />
        <MenuItem to="/E-commerce/Men" label="Men" setMenu={setMenu} />
        <MenuItem to="/E-commerce/Women" label="Women" setMenu={setMenu} />
        <MenuItem to="/E-commerce/Kids" label="Kids" setMenu={setMenu} />
      </ul>
      <div className="login-cart">
        <Link to="/E-commerce/Login" className="Link">
          <button
            onClick={() => setMenu("login")}
            className={
              menu === "login" ? "login-btn login-btn-clicked" : "login-btn"
            }
          >
            Login
          </button>
        </Link>
        <Link to="/E-commerce/Cart" className="Link">
          <div
            onClick={() => setMenu("cart")}
            className={menu === "cart" ? "active cart" : "cart"}
          >
            <img src={cartIcon} alt="Cart" />
            <div className="cart-num"> {cartItem} </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const MenuItem = ({ to, label, setMenu }) => {
  const isActive = window.location.pathname === to;

  return (
    <Link to={to} className="Link">
      <li
        onClick={() => setMenu(label.toLowerCase())}
        className={isActive ? "active" : ""}
      >
        {label}
        {isActive && <div className="underline"></div>}
      </li>
    </Link>
  );
};
