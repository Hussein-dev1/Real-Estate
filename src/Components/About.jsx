import React from "react";
import abimg from "./../assets/brand_img.png";
export default function About() {
  return (
    <div className="flex justify-center items-center container flex-col p-14 md:px-20 lg:px-32 mx-auto ">
      <div className="text-center ">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 ">
          About <span class="underline underline-offset-4 decoration-1 under font-light">Our Brand</span>
        </h1>
        <p className="max-w-80 text-[16px] text-gray-500 text-center mb-8">
          Passionate About Properties, Dedicated to Your Vision
        </p>
      </div>
      <div className=" flex justify-center items-center flex-col lg:flex-row  lg:items-start md:gap-20">
      
          <img src={abimg} alt="" className="w-full sm:w-1/2 md:w-1/2 " />
        
        <div className="w-[50%] flex flex-col items-center lg:items-start mt-10">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div className="">
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="max-w-110 text-[16px] text-gray-500 my-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="bg-[#3B82F6] px-8 py-2 rounded cursor-pointer text-white">
          Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
