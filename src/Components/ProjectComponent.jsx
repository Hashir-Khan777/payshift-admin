"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { FaRegCircleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProjectComponent = ({
  cards,
  headingWhite,
  headingBlack,
  categories,
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeCategory", category);
    }
  };

  useEffect(() => {
    if (window) {
      const breakpoint = window.matchMedia("(min-width: 1024px)");
      if (breakpoint.matches) {
        setActiveIndex(1);
      } else {
        setActiveIndex(0);
      }
    }
  }, []);

  return (
    <div
      className="container rounded-lg mx-auto mt-20 py-20 px-1 md:px-16 border-[2px] border-white"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      <h1 className="text-center text-2xl md:text-4xl mb-16 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>

      {categories?.length > 0 ? (
        <nav className="mb-[74px] font-lexend bg-[#D4E7FF] text-black lg:text-[20px] md:text-[18px] text-[12px] tracking-[4%] flex flex-row md:gap-[20px] gap-[4px] stify-center sm:justify-start items-center mx-auto md:max-w-[441px] sm:max-w-[318px] md:p-[20px] p-[6px] rounded-[3px] overflow-x-auto">
          {categories?.map((item) => (
            <button
              key={item.id}
              className={`px-[8px] py-[4px] font-[600] whitespace-nowrap rounded-lg transition-all duration-200 ${
                activeCategory === item.cat ? "bg-black text-white" : ""
              }`}
              onClick={() => handleCategoryClick(item.cat)}
            >
              {item.cat}
            </button>
          ))}
        </nav>
      ) : null}

      <div className="flex items-center justify-center mb-4 overflow-hidden">
        <Swiper
          autoplay
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          onSlideChange={(e) => {
            if (e.currentBreakpoint >= 1024) {
              setActiveIndex(e.activeIndex + 1);
            } else {
              setActiveIndex(e.activeIndex);
            }
          }}
        >
          {cards?.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className={`font-lexend shrink-0 w-full py-16 px-3 md:px-6 rounded-md  border-4 border-white${
                  index === activeIndex
                    ? "bg-gradient-to-b from-white to-[#c7e1ff] shadow-lg my-3"
                    : "bg-white/50 scale-90 opacity-40"
                } transition-transform duration-300`}
                style={{
                  background:
                    "linear-gradient(180deg, #E8F3FF 15.92%, #92A8FF 100%)",
                  boxShadow: "0px 0px 20px rgba(146, 168, 255, 1)",
                }}
              >
                {/* ---- Card ---- */}
                <div className={`flex justify-between w-full`}>
                  <h1 className="text-base md:text-xl font-semibold">
                    {card.title}
                  </h1>
                  <Link
                    href="/"
                    className="text-black text-sm md:text-base underline font-medium"
                  >
                    More Info
                  </Link>
                </div>

                {card.firstpara ? (
                  <p className="font-lexend text-xl mt-[40px] font-light">
                    {card.firstpara}
                  </p>
                ) : null}
                {card.secondpara ? (
                  <p className="font-lexend text-xl mt-[40px] font-light">
                    {card.secondpara}
                  </p>
                ) : null}

                <Link href={card.link || "#"}>
                  <button className="mt-[40px] mx-auto animated-button flex items-center justify-center gap-7 px-5 py-2 bg-black text-white font-normal rounded-full hover:bg-gray-800">
                    <span className="relative text-base left-0 md:text-xl animated-text transition-all ease-linear duration-[400ms] font-lexend">
                      {card.btnText}
                    </span>
                    <img
                      src="/svgIcons/slidercomponenticon.svg"
                      className="relative right-0 transition-all ease-linear duration-[400ms] animated-icon w-[22px] h-[22px] md:w-[32px] md:h-[32px]"
                    />
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-end items-end gap-4 container">
        <button className="text-3xl" aria-label="Scroll Left" ref={prevRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
            src="/svgIcons/slidericonleft.svg"
          />
        </button>
        <button className="text-3xl" aria-label="Scroll Right" ref={nextRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
            src="/svgIcons/slidericon.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectComponent;
