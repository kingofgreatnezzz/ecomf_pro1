import { ImCross } from "react-icons/im";
import React from "react";

export default function ItemCard({ title, image, price }) {
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2 bg-slate-200">
      <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
        <ImCross className="hover:text-red-500 duration-300 cursor-pointer"/>
        <img className="w-32 h-32" src={image} alt="productImage"/>
        <h1 className=" font-bold text-zinc-900">{title}</h1>
      </div>
      <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 md:px-0 gap-6 md:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          {price}
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <span className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300">
            -
          </span>
          <p>6</p>
          <span className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300">
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-bold text-lg">
          <p className=" font-bold text-zinc-800">$2033</p>
        </div>
      </div>
    </div>
  );
}
