import React from "react";
import BannerImg from "../../assets/1.png";

const Banner = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img src={BannerImg} alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold">Food Is Always Good</h1>
          <p className="py-4 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            placeat velit dolor, voluptate hic voluptatibus ipsum accusamus
            praesentium natus dolores. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
