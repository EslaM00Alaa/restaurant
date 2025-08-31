"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";





import logo from "../../../public/logo.jpg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-start w-7/12">
        <div className="flex items-center space-x-2 mr-12">
          <Image src={logo} alt="Logo" width={100} height={80} className="rounded-full" />
        </div>

        {/* Desktop Links */}
       

        <div className="hidden md:flex space-x-6 w-6/12 justify-between ">
          <a href="#" className="hover:bg-gray-700 px-3 py-6 flex items-center">Animes <span className="ml-2"><FaAngleDown/></span></a>
          <a href="#" className="hover:bg-gray-700 px-3 py-6 flex items-center">Mangas <span className="ml-2"><FaAngleDown/></span></a>
          <a href="#" className="hover:bg-gray-700 px-3 py-6 flex items-center">News <span className="ml-2"><FaAngleDown/></span></a>

        </div>
            
        </div>

        {/* Search + Login */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-sm rounded-lg pl-8 pr-3 py-2 focus:outline-none"
            />
            <FaSearch className="absolute left-2 top-2 text-gray-400" size={14} />
          </div>
          <button className="bg-[#ec5e95] hover:bg-[#e2598e] px-4 py-1 rounded-lg">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-black">
          <a href="#" className="block hover:text-gray-400">Animes</a>
          <a href="#" className="block hover:text-gray-400">Mangas</a>
          <a href="#" className="block hover:text-gray-400">News</a>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-800 text-sm rounded-lg pl-8 pr-3 py-1 focus:outline-none"
            />
            <FaSearch className="absolute left-2 top-2 text-gray-400" size={14} />
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
