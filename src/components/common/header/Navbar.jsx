import React, { useState } from "react";
import { BsBox2Heart } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { PiTelevisionBold } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineSmartToy } from "react-icons/md";
import { IoRoseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaComputer } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { GiCrenelCrown } from "react-icons/gi";
import { Bar, Notification, Cart, Close } from "../../../services/svgs";

export default function Header() {
  const [isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isopen);
  };

  const sidebarvarients = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className="relative top-0 z-10 bg-slate-100 shadow-slate-300 shadow-lg rounded-sm">
      <nav className="flex items-center justify-between p-5">
        <div>
          <GiCrenelCrown size={28} className="text-slate-900" />
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-12 text-stone-800 text-justify pr-5">
            <li className="border-r-stone-400 border-r-2">
              <p className="relative inline-block pr-4 transition ease-in-out delay-110 hover:text-black hover:-translate-y-1 hover:scale-110 hover:font-bold before:absolute before:left-0 before:right-3 before:bottom-0 before:h-[2px] before:bg-black before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                Home
              </p>
            </li>
            <li className="border-r-stone-400 border-r-2">
              <p className="relative inline-block pr-4 transition ease-in-out delay-110 hover:text-black hover:-translate-y-1 hover:scale-110 hover:font-bold before:absolute before:left-0 before:right-3 before:bottom-0 before:h-[2px] before:bg-black before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                Shop
              </p>
            </li>
            <li className="border-r-stone-400 border-r-2">
              <p className="relative inline-block pr-4 transition ease-in-out delay-110 hover:text-black hover:-translate-y-1 hover:scale-110 hover:font-bold before:absolute before:left-0 before:right-3 before:bottom-0 before:h-[2px] before:bg-black before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                About
              </p>
            </li>
            <li className="border-r-stone-400 ">
              <p className="relative inline-block pr-4 transition ease-in-out delay-110 hover:text-black hover:-translate-y-1 hover:scale-110 hover:font-bold before:absolute before:left-0 before:right-3 before:bottom-0 before:h-[2px] before:bg-black before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                Journal
              </p>
            </li>
          </ul>
        </div>

        {/* mobile view */}
        <div className="md:hidden flex">
          <div className="flex items-center text-stone-800 bg-slate-100 space-x-3">
            <Cart />
            <Notification />

            <button onClick={toggleMenu}>{isopen ? <Close /> : <Bar />}</button>
          </div>
          {isopen && (
            <div className="fixed inset-0 flex justify-end backdrop-blur-md z-20">          
              {/* Added z-index */}
              <motion.div
                initial={{ x: "100%" }}
                animate={isopen ? "open" : "closed"}
                variants={sidebarvarients}
                className="w-[70%] bg-slate-200 opacity-80 items-start flex flex-col p-4"
              >
                <button
                  className="self-end mb-4 bg-slate-200"
                  onClick={toggleMenu}
                >
                  <Close />
                </button>

                <ul className="flex flex-col gap-y-3">
                  <li className="flex gap-2 items-center">
                    <BsBox2Heart className="h-5 w-5" />
                    Orders
                  </li>
                  <li className="flex gap-2 items-center">
                    <GiSelfLove className="h-5 w-5" />
                    Saved Items
                  </li>
                  <hr className="bg-gray-800 w-56" />
                  <p className="font-bold">Our Categories</p>

                  <li className="flex gap-2 items-center">
                    <GiSmartphone className="h-5 w-5" />
                    Phone & Tablets
                  </li>
                  <li className="flex gap-2 items-center">
                    <MdOutlineSmartToy className="h-5 w-5" />
                    Appliances
                  </li>
                  <li className="flex gap-2 items-center">
                    <PiTelevisionBold className="h-5 w-5" />
                    Electronics
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoRoseOutline className="h-5 w-5" />
                    Health & Beauty
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaComputer className="h-5 w-5" />
                    Computing
                  </li>

                  <li className="flex gap-2 items-center">
                    <HiOutlineBuildingOffice2 className="h-5 w-5" />
                    Home & Office
                  </li>

                  <hr className="bg-gray-800 w-56" />
                  <p className="font-bold">Our Service</p>
                  <li className="flex gap-2 items-center">Sell on Modex</li>
                  <li className="flex gap-2 items-center">Contact Us</li>
                  <li className="flex gap-2 items-center">Help</li>
                </ul>
              </motion.div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
