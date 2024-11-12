import React from "react";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="container min-h-[550px] flex items-center justify-center gap-8 sm:justify-evenly flex-wrap ">
        <div className="flex flex-col justify-center gap-5 text-center md:text-start pt-10 max-w-[450px]">
          <h1 className="text-4xl font-semibold">
            Delicious Food Is Waiting For You
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum hic,
            qui magnam maxime quisquam veritatis ea ratione accusantium ducimus
            neque!
          </p>
          <div className="flex items-center gap-6 justify-center md:justify-start">
            <button className="primary-btn hover:scale-110  duration-200">Food Menu</button>
            <button className="secondary-btn hover:scale-110  duration-200">Book Table</button>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img src={HeroImg} className=" animate-spin-slow drop-shadow max-w-[450px]  mx-auto md:mx-0"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
