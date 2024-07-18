import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./customer/components/Card/Cart";
import { Footer } from "./customer/components/Footer/Footer";
import Order from "./customer/components/Order/Order";
import OrderDetail from "./customer/components/Order/OrderDetail";
import Checkout from "./customer/components/checkout/Checkout";
import Navigation from "./customer/components/navigation/Navigation";
import ProductDetails from "./customer/components/productDetails/ProductDetails";
import Product from "./customer/components/products/Product";
import HomePage from "./customer/pages/Homepage/HomePage";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminRoutes from "./Routers/AdminRoutes";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/*"
            element={<CustomerRoutes />}
          />
          <Route
            path="/admin/*"
            element={<AdminRoutes />}
          /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
