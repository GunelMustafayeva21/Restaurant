import React from "react";
import Profile from '../../assets/profile.png'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="py-4">
      <div className="container flex justify-between items-center">

        <div className="text-lg font-semibold">
          <p>
            FOOD <span className="text-primary">EAT</span>
          </p>
        </div>

        <div className="flex justify-center items-center gap-6">
          <ul className="gap-8 hidden sm:flex">
            <li className="border-b-2 border-white hover:border-primary uppercase">
              Home
            </li>
            <li className="border-b-2 border-white hover:border-primary uppercase">
              Menu
            </li>
            <li className="border-b-2 border-white hover:border-primary uppercase">
              About
            </li>
          </ul>
          <div className="flex gap-4 items-center">
            <img src={Profile} className="w-10 rounded-full" />
            <IoIosArrowDown />
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
