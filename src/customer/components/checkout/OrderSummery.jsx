import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Divider } from "@mui/material";
import CartItem from "../Card/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/order/Action";
import { createPayment } from "../../../State/payment/Action";
import { useLocation } from "react-router-dom";

function OrderSummery() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const { order } = useSelector((store) => store);
  console.log(order);
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);


  const handleCheckOut=() => {
    dispatch(createPayment(orderId))
  }

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order?.order?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order?.order?.orderItems?.map((item, i) => (
              <CartItem
                key={i}
                item={item}
              />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <Divider />
              <div className="space-y3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>${order?.order?.totalPrice + order?.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">-${order?.order?.discounte}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivary Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600 font-bold">${order?.order?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
              onClick={handleCheckOut}
                variant="contained"
                className="w-full mt-5"
                sx={{ p: "2.5rem", py: ".7rem", backgroundColor: "#9155fd" }}>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummery;
