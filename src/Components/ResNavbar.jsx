import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import cross from "./../assets/cross_icon.svg";

export default function ResNavbar({ close, setClose }) {
  return (
    <AnimatePresence mode="wait">
      {close && (
        <motion.div
          initial={{ opacity: 0, x:"100%"}}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%"}}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-20 md:hidden"
        >
          <div className=" bg-white py-3 shadow-lg  h-full">
            <img
              src={cross}
              alt=""
              className="w-6 relative left-[93%] top-3 cursor-pointer"
              onClick={() => setClose(false)}
            />
            <ul className=" flex flex-col justify-center items-center mt-10">
              <li className="p-4 hover:text-[#5651E5] duration-300">
                <a href="" onClick={() => setClick(false)}>
                  Home
                </a>
              </li>
              <li className="p-4 hover:text-[#5651E5] duration-300">
                <a href="" onClick={() => setClick(false)}>
                  Search
                </a>
              </li>
              <li className="p-4 hover:text-[#5651E5] duration-300">
                <a href="" onClick={() => setClick(false)}>
                  About
                </a>
              </li>
              <li className="p-4 hover:text-[#5651E5] duration-300">
                <a href="" onClick={() => setClick(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
