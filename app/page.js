"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { IoRestaurant } from "react-icons/io5";
const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#E52020]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
       
       <div className="flex flex-col items-center justify-center text-5xl font-bold text-white">
          <IoRestaurant/>
          <h1>EL Restaurant</h1>  
       </div>



      </motion.div>
    </div>
  );
};

export default Home;
