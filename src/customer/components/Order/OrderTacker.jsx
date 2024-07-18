import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Deliverd",
];
const OrderTacker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper
        activeStep={activeStep}
        alternativeLabel>
        {steps.map((lable, i) => (
          <Step key={i}>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {lable}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTacker;
