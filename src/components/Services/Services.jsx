import React from "react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md"; 
import { CiDeliveryTruck } from "react-icons/ci";

const Services = () => {
  return (
    <div className="container py-8">
      <div className="text-center">
        <h1 className="text-4xl font-semibold py-4">Our Services</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12">
        <div className="flex justify-center items-center gap-3">
        <FaMobileScreenButton className="text-2xl" />
        <p className="text-xl font-semibold">Online Booking</p>
        </div>
        <div className="flex justify-center items-center gap-3">
        <MdOutlineFastfood className="text-3xl" />
        <p className="text-xl font-semibold">Fast Food</p>
        </div>
        <div className="flex justify-center items-center gap-3">
        <MdFoodBank className="text-3xl"/>
        <p className="text-xl font-semibold">Healthy Food</p>
        </div>
        <div className="flex justify-center items-center gap-3">
        <CiDeliveryTruck className="text-3xl"/>
        <p className="text-xl font-semibold">Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
