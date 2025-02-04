import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="bg-trendix-red text-white">
      {/* Icons */}
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex space-x-4 ">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
        {/* Content  */}
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - fast and reliable shipping!</span>
        </div>
        {/* Contact  */}
        <div className="text-sm hidden md:block">
          <a href="tel:+923162126865" className="hover:text-gray-300">
            +92 (316) 2126865
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
