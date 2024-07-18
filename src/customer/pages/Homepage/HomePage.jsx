import React from "react";
import MainCarosal from "../../components/homeCarosal/MainCarosal";
import HomeSectionCarosal from "../../components/HomeSectionCarosal/HomeSectionCarosal";
import { mens_kurta } from "../../../data/mens_kuta";
import { mens_shirt } from "../../../data/mens_shirt";
import { mens_pant } from "../../../data/mens_pant";
import { womens_top } from "../../../data/womens_top";
import { womens_dress } from "../../../data/womens_dress";
import { womens_jeans } from "../../../data/womens_jeans";

const HomePage = () => {
  return (
    <>
      <MainCarosal />
      <div className="space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosal
          data={mens_kurta}
          sectionName={"Men's Kurta"}
        />
        <HomeSectionCarosal
          data={womens_top}
          sectionName={"Women's Tops "}
        />
        <HomeSectionCarosal
          data={mens_shirt}
          sectionName={"Men's Shirt"}
        />
        <HomeSectionCarosal
          data={womens_dress}
          sectionName={"Women's Dress"}
        />
        <HomeSectionCarosal
          data={mens_pant}
          sectionName={"Men's Pants"}
        />
        <HomeSectionCarosal
          data={womens_jeans}
          sectionName={"Women's Jeans"}
        />
      </div>
    </>
  );
};

export default HomePage;
