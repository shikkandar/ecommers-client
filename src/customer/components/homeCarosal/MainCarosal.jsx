import React from "react";
import MainCarosalData from "./MainCarosalData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarosal = () => {
  const items = MainCarosalData.map((item, i) => (
    <img
      key={i}
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt="img"
      style={{ width: "100%", height: "600px" }}
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarosal;
