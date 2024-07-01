import React from "react";
import { GiCrenelCrown } from "react-icons/gi";

export default function LoadingPage() {
  return (
    <div className="w-full h-96 mt-48 flex flex-col justify-center items-center">
      <div className="flex ">
        <GiCrenelCrown
          size={80}
          className="text-zinc-900 relative animate-ping"
        />
        <GiCrenelCrown size={80} className="text-zinc-900 absolute" />
      </div>
      <p className="text-zinc-900 font-semibold">Loading ....</p>
    </div>
  );
}
