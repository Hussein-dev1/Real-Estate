import React from "react";
import Navbarr from "./Navbarr";
// 1. اعمل استدعاء للصورة هنا
import headerImg from "../assets/header_img.png";

export default function Home() {
  return (
    <div
      
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${headerImg})` }}
      id="Home"
    >
      <Navbarr />
      <div className="container text-center mx-auto py-4 px-6  text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] max-w-3xl font-semibold 
         inline-block">Explore homes that fit your dreams</h2>
          <div className="space-x-0 sm:space-x-6 mt-16 flex flex-col sm:flex-row justify-center items-center ">
            <button className="border border-white px-21 sm:px-8 py-3 rounded cursor-pointer">Projects</button>
            <button className="bg-[#3B82F6] px-19 sm:px-8 py-3 rounded cursor-pointer mt-7 sm:mt-0">Contact Us</button>
          </div>
      </div>
    </div>
  );
}
