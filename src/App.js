import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignUp } from "./Pages/LoginSignUp.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import banner_men from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_womens.png";
import banner_kid from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/E-commerce" element={<Shop />} />
          <Route
            path="/E-commerce/Men"
            element={<ShopCategory banner={banner_men} category="men" />}
          />
          <Route
            path="/E-commerce/Women"
            element={<ShopCategory banner={banner_women} category="women" />}
          />
          <Route
            path="E-commerce/Kids"
            element={<ShopCategory banner={banner_kid} category="kid" />}
          />
          <Route path="/E-commerce/Product" element={<Product />}>
            <Route path=":ProductId" element={<Product />} />
          </Route>
          <Route path="/E-commerce/Cart" element={<Cart />} />
          <Route path="/E-commerce/Login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
