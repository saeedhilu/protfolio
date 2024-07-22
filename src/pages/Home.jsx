import React from "react";
import Sidebar from "../components/Sidebar";
import AboutCommon from "../common/AboutCommon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyCarousel from "../common/Courousal";

const Home = () => {
  const heading = "SAEED NM";
  const text =
    "Welcome to the extraordinary world of SAEED NM, a versatile and imaginative artist who skillfully navigates the realms of product design, photography, and digital art. With a keen eye for detail and a relentless pursuit of innovation, SAEED NM crafts captivating visual narratives, immersive digital realms, and functional yet aesthetically pleasing products.";

  return (
    <div className="flex flex-col gap-y-6 min-h-screen  text-white">
      <Sidebar />
      <div className="p-6">
        <AboutCommon heading={heading} text={text} />
      </div>
      <div className="p-6">
        <MyCarousel />
      </div>
    </div>
  );
};

export default Home;
