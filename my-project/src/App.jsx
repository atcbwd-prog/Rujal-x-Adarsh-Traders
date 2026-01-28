import { Routes, Route } from "react-router-dom";
import Navbar from "./marketing/Navbar";
import Footer from "./marketing/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import AboutUs from "./marketing/AboutUs";
import ContactUs from "./marketing/ContactUs";
import SingleProduct from "./Pages/SingleProduct";

// import CartPage from "./Pages/CartPage";

import RujalMedia from "./marketing/RujalMedia";

function App() {
  return (
    // <CartProvider>
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
  path="/products/:categorySlug/:productSlug"
  element={<SingleProduct />}
/>
        {/* <Route path="/men" element={<ProductsPage defaultCategory="men" />} />
            <Route path="/women" element={<ProductsPage defaultCategory="women" />} />
            <Route path="/kids" element={<ProductsPage defaultCategory="kids" />} />
            <Route path="/cart" element={<CartPage />} />  */}
      </Routes>

      <Footer />
      <RujalMedia />
    </div>
    // </CartProvider>
  );
}

export default App;
