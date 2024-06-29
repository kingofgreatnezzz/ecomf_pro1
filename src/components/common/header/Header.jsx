import React from "react";
import { FiSearch } from "react-icons/fi";

import { FaUser } from "react-icons/fa6";

import { GiLoveMystery } from "react-icons/gi";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="mt-3">
      <div className="flex flex-row items-center md:justify-center">
        {/* Search */}
        <input
          className="w-full md:w-[70%] mx-4 p-12 py-2 bg-transparent outline outline-stone-700 outline-1 rounded-full placeholder:text-center text-sm md:text-base"
          placeholder="Search Products, Categories & Brands"
        />
        <FiSearch className="absolute ml-8 md:inset-x-24 lg:inset-x-32 pointer-events-none h-6 w-6 text-stone-700" />

        <div className="hidden md:block">
          <div className="flex space-x-4 items-center justify-center text-stone-900">
            <Link to={"/cart"}>
              <div className="relaive">
                <IoCartSharp className=" absolute h-7 w-7 animate-ping" />
                <IoCartSharp className="h-7 w-7" />
              </div>
            </Link>

            <GiLoveMystery className="h-7 w-7 mt-1" />
            <FaUser className="h-5 w-5 mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
