import React, { useState, useRef, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSection/HomeSectionCard";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarosal = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shuffledItems, setShuffledItems] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Shuffle the data array and slice the first 10 items
    const shuffledData = data
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item)
      .slice(0, 10);
    setShuffledItems(shuffledData);
  }, [data]);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
    1440: { items: 5.5 },
  };

  const slidePrev = () => carouselRef.current.slidePrev();
  const slideNext = () => carouselRef.current.slideNext();

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = shuffledItems.map((item, i) => (
    <HomeSectionCard key={i} product={item} />
  ));

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 border">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - responsive[1440].items && (
          <Button
            className="z-50"
            variant="contained"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            className="z-50"
            variant="contained"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosal;
