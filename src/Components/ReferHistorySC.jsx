"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaRegCircleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ReferHistorySliderComponent = ({ cards, headingWhite, headingBlack }) => {
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
      className="container rounded-lg mx-auto mt-20 py-20 px-5 md:px-16 border-[4px] border-white"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      <h1 className="text-center text-2xl md:text-4xl mb-16 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>

      <div className="flex items-center justify-center mb-4 overflow-hidden rounded">
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
                {/* ============= Card Content ============ */}
                <div className="flex md:flex-col flex-row md:justify-center justify-between items-center gap-5">
                  <div className="flex flex-row md:justify-center justify-start items-center md:gap-5 gap-2">
                    <div className="md:w-[100px] w-[80px]  h-[80px] md:h-[100px] border-2 border-white rounded-full">
                      <img
                        src={card.picture}
                        className="w-full h-full rounded-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col md:gap-2 gap-1">
                      <h3 className="md:text-xl text-base font-semibold">
                        {card.name}
                      </h3>
                      <p className="md:text-base text-sm">
                        Invited {card.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#290080] md:font-bold font-semibold md:text-2xl text-xl">
                    +AED {card.amount}
                  </p>
                </div>

                {/* ============= Card Content ============ */}

                {/* <button className="mx-auto animated-button flex items-center justify-center space-x-2 mt-4 px-5 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800">
                                    <span className="relative left-0 pl-6 pr-4 text-base md:text-lg leading-relaxed animated-text transition-all ease-linear duration-[400ms]">
                                        {card.btnText}
                                    </span>
                                    <FaRegCircleRight className="relative right-0 transition-all ease-linear duration-[400ms] text-base md:text-3xl animated-icon" />
                                </button> */}
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

export default ReferHistorySliderComponent;
