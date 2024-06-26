import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-silver mx-auto">
      <nav className="flex justify-between p-4">
        <div>Logo</div>

        <div className="hidden md:block">
          <ul className="flex gap-2 font-bold">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Journal</li>
          </ul>
        </div>

        {/* mobile view */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>

          {isOpen && (
            <div className="fixed inset-0 flex justify-end backdrop-blur-md">
              <div className="bg-white w-2/3 h-full flex flex-col items-start p-4 space-y-2 font-bold text-yellow-700 shadow-lg">
              
                <button className="self-end mb-4" onClick={toggleMenu}>
                  <IoMdClose size={24} />
                </button>

                <ul>
                  <li onClick={toggleMenu}>Home</li>
                  <li onClick={toggleMenu}>About</li>
                  <li onClick={toggleMenu}>Contact</li>
                  <li onClick={toggleMenu}>Journal</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
