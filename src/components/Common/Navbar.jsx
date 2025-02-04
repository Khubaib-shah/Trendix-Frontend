import React, { useState } from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrower from "../Layout/CartDrower";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drowerOpen, setDrowerOpen] = useState(false);
  const [navDrowerOpen, setNavDrowerOpen] = useState(false);
  const toggleCartDrower = () => {
    setDrowerOpen(!drowerOpen);
  };
  const toggleNavDrower = () => {
    setNavDrowerOpen(!navDrowerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left - Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Trendix
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>
        {/* Right - Icons */}
        <div className="flex items-center space-x-4 ">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrower}
            className="hover:text-black relative"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 " />
            <span className="absolute -top-1  bg-trendix-red text-white text-xs rounded-full px-2 py-0.5 ">
              4
            </span>
          </button>

          {/* Search  */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button
            onClick={toggleNavDrower}
            className="hover:text-black md:hidden"
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrower drowerOpen={drowerOpen} toggleCartDrower={toggleCartDrower} />
      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:1/3 h-full shadow-lg transform transition-transform duration-300 z-50 bg-white ${
          navDrowerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button>
            <IoMdClose onClick={toggleNavDrower} />
          </button>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrower}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrower}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrower}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrower}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
