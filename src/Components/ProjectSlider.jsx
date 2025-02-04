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

const ProjectSlider = ({
  cards,
  headingWhite,
  headingBlack,
  link,
  activeProjects,
  totalHours,
}) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
      <div className="font-lexend max-w-[347px] flex items-center justify-center text-white bg-black gap-2 rounded-full py-3 px-6 mb-10 mx-auto">
        <p>
          <span className="font-bold">{activeProjects}</span> Active Projects |{" "}
          <span className="font-bold">{totalHours}</span> Total Hors
        </p>
        <img src="/svgIcons/pendingrightarrow.svg" />
      </div>
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
                <img src="/Images/banglow.png" className="mb-[37px]" />
                <div className={`flex mb-6 items-start justify-between w-full`}>
                  <div>
                    <h1 className="text-base md:text-xl font-semibold">
                      {card.title}
                    </h1>
                    <p className="font-lexend font-normal flex flex-row justify-start items-center gap-1 md:text-base md:text-[16px] text-[12px]">
                      <img
                        src="svgIcons/location.svg"
                        className="w-[20px] h-[20px]"
                      />
                      <span>{card.loc}</span>
                    </p>
                  </div>
                  <Link
                    href="/"
                    className="text-black text-sm md:text-base underline font-medium"
                  >
                    More Info
                  </Link>
                </div>

                <p className="font-light text-lg text-black/50">{card.para}</p>
                <p className="font-light text-lg my-2">
                  Progress: {card.progress}
                </p>
                <div className="flex items-center gap-2 font-light text-lg">
                  Leads received:{" "}
                  <div className="flex gap-1">
                    <span className="font-bold underline">{card.leads}</span>{" "}
                    <img
                      src="/svgIcons/rightblack.svg"
                      className="text-black"
                    />
                  </div>
                </div>

                <Link href={card.link || "#"}>
                  <button className="mt-9 mx-auto animated-button flex items-center justify-center gap-7 px-5 py-2 bg-black text-white font-normal rounded-full hover:bg-gray-800">
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
      {link ? (
        <div className="text-center mt-[60px] font-lexend">
          <Link
            href="/"
            className="text-black text-sm md:text-base underline font-medium"
          >
            {link}
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectSlider;
