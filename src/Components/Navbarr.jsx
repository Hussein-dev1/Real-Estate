import React, { useEffect, useState } from "react";
import logo from "./../assets/logo.svg";
import Hbar from "./../assets/menu_icon.svg";
import ResNavbar from "./ResNavbar";

export default function Navbar() {
  const [close, setClose] = useState(false);

  const handleClick = () => setClose(!close);



  useEffect(() => {
    const handleResize = () => {
      // 768px هو الـ breakpoint الافتراضي للـ md في Tailwind
      if (window.innerWidth >= 768) {
        setClose(false); 
      }
    };

    // إضافة الـ event listener لما الشاشة حجمها يتغير
    window.addEventListener("resize", handleResize);

    // الـ Cleanup function عشان نمسح الـ listener لما الـ component يتعمله Unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">

        {/* logo */}
        <div>
          <img src={logo} alt="" />
        </div>

        {/* links */}
        <div>
          <ul className="hidden md:flex gap-7 items-center text-white">
            <li>
              <a href="" className="cursor-pointer hover:text-gray-400">
                Home
              </a>
            </li>

            <li>
              <a href="" className="cursor-pointer hover:text-gray-400">
                About
              </a>
            </li>

            <li>
              <a href="" className="cursor-pointer hover:text-gray-400">
                Projects
              </a>
            </li>

            <li>
              <a href="" className="cursor-pointer hover:text-gray-400">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* button */}
        <div>
          <button className="hidden md:block bg-white px-8 py-2 rounded-full">
            Sign Up
          </button>
        </div>

        {/* mobile menu button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={handleClick}
        >
          <img src={Hbar} alt="" className="w-6" />
        </div>

        <ResNavbar close={close} setClose={setClose} />

      </div>
    </nav>
  );
}