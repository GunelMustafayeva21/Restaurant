import React from "react";
import Image2 from "../../assets/2.png";
import Image3 from "../../assets/3.png";
import Image4 from "../../assets/4.png";

const FoodData = [
  { image: Image2, rating: "⭐⭐⭐⭐⭐", price: "$10.23", name: "Salad", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { image: Image3, rating: "⭐⭐⭐⭐⭐", price: "$20.48", name: "Salad", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { image: Image4, rating: "⭐⭐⭐⭐⭐", price: "$30.79", name: "Salad", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { image: Image3, rating: "⭐⭐⭐⭐⭐", price: "$20.48", name: "Salad", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
];

const TopList = () => {
  return (
    <div className="container py-14">
      <div className="text-center">
        <h1 className="text-4xl font-semibold py-4">Top List</h1>
        <p>Our Top List</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
        {FoodData.map((food, index) => (
          <div key={index} className=" bg-secondary/50 border shadow-xl flex flex-col items-center gap-3 pt-4 pb-8 rounded-3xl hover:scale-90 transition duration-500 ">
            <img src={food.image} className="w-60 h-60 sm:w-40 sm:h-40 rounded-3xl object-cover drop-shadow" />
            <p >{food.rating}</p>
            <p className="font-lg font-semibold">{food.name}</p>
            <p className="text-center ">{food.desc}</p>
            <p className="font-lg font-semibold">{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
