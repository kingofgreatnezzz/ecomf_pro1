import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import images from "../../../services/dummies";
import { Deliver, Returngoods, Twoo } from "../../../services/svgs";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mt-3 z-0">
      <div className="bg-slate-100 h-auto md:h-64 m-2 shadow-md overflow-hidden">
        <Slider {...settings}>
          <div className="mt-2">
            <img src={images.banners.bannerImg1} alt="slide1" />
          </div>
          <div className="mt-1">
            <img src={images.banners.bannerImg4} alt="slide2" className="w-full" />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <img src={images.banners.bannermain} width={850} alt="slider3" />
          </div>
        </Slider>
      </div>

      <section className="flex flex-col md:flex-row md:space-x-20 md:justify-center items-left md:items-center text-[14px] leading-tight ml-10 space-y-2 mt-5">
        <div className="flex items-center space-x-2 md:mt-2">
          <Deliver /> <p className=" text-stone-500">Free Drop Shipping</p>
        </div>
        <div className="flex items-center space-x-2">
          <Twoo /> <p className=" text-stone-500">Two Years Guarantee </p>
        </div>

        <div className="flex items-center space-x-2">
          <Returngoods />
          <p className=" text-stone-500">Return Policy in 30days</p>
        </div>
      </section>
    </div>
  );
}
