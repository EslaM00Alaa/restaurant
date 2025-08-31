"use client";
import React, { useState, useEffect } from "react";
import data from "./data.json";
import Image from "next/image";
import bg from "../../public/bg.jpg";
import Footer from "../_components/footer/footer";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Select first category by default
  useEffect(() => {
    if (data.catigories.length > 0) {
      setSelectedCategory(data.catigories[0]);
    }
  }, []);

  return (
    <>
      <div className="relative min-h-screen">
        {/* Background */}
        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Orange transparent overlay */}
        <div className="absolute inset-0 bg-black/45 "></div>

        {/* Content */}
        <div className="relative z-10 p-6 text-white">
          <h1 className="text-3xl font-bold mb-6 text-center text-[white] drop-shadow-lg">
            المنيو
          </h1>

          {/* Categories */}
          <div className="flex overflow-x-auto flex-nowrap gap-3 mb-8 no-scrollbar">
            {data.catigories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 text-lg font-semibold px-5 py-2 rounded-xl  shadow-md transition-all ${
                  selectedCategory?.name === cat.name
                    ? "bg-[#E52020] text-white "
                    : "bg-white text-[#E52020]  hover:bg-[#fbe7df]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products */}
          {selectedCategory && (
            <div className="max-w-2xl mx-auto bg-[rgba(255,255,255,0.12)] backdrop-blur-md p-6 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {selectedCategory.name}
              </h2>
              <ul className="space-y-3">
                {selectedCategory.productes.map((prod, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center p-3 rounded-lg bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,221,206,0.3)] transition"
                  >
                    <span className="text-lg">{prod.name}</span>
                    <span className="font-bold text-[#fff]  px-2 py-1 rounded-md">
                      {prod.price} ج.م
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
