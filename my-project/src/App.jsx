import { Routes, Route } from "react-router-dom";
import Navbar from "./marketing/Navbar";
import Footer from "./marketing/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import AboutUs from "./marketing/AboutUs";
import ContactUs from "./marketing/ContactUs";
import SingleProduct from "./Pages/SingleProduct";
import RujalMedia from "./marketing/RujalMedia";
import SignIn from "./Pages/Admin/SignIn";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddProduct from "./Pages/Admin/AddProduct";
import EditProduct from "./Pages/Admin/EditProduct";
import ProtectedRoute from "./Pages/Admin/ProtectedRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route
          path="/products/:categorySlug/:productSlug"
          element={<SingleProduct />}
        />
        {/* Admin routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/edit-product/:id"
          element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <RujalMedia />
    </div>
  );
}

export default App;
