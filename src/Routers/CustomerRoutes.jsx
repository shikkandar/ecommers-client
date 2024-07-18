import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/Homepage/HomePage";
import Cart from "../customer/components/Card/Cart";
import Navigation from "../customer/components/navigation/Navigation";
import { Footer } from "../customer/components/Footer/Footer";
import Product from "../customer/components/products/Product";
import ProductDetails from "../customer/components/productDetails/ProductDetails";
import Checkout from "../customer/components/checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetail from "../customer/components/Order/OrderDetail";
import PaymentSuccess from "../customer/components/payment/PaymentSuccess";

function CustomerRoutes() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/login"
          element={<HomePage />}
        />
        <Route
          path="/register"
          element={<HomePage />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetails />}
        />
        <Route
          path="checkout"
          element={<Checkout />}
        />
        <Route
          path="account/order"
          element={<Order />}
        />
        <Route
          path="account/order/:orderId"
          element={<OrderDetail />}
        />
        <Route
          path="/payment/:orderId"
          element={<PaymentSuccess />}
        />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CustomerRoutes;
