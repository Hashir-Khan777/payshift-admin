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

const DisputeSlider = ({
  cards,
  headingWhite,
  headingBlack,
  link,
  categories,
  pending,
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
      <div className="font-lexend w-[153px] flex items-center justify-center text-white bg-black gap-2 rounded-full py-3 px-6 mb-10 mx-auto">
        <p>
          <span className="font-bold">{pending}</span> Pending
        </p>
        <img src="/svgIcons/pendingrightarrow.svg" />
      </div>
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
                {card.payment || card.appointment ? (
                  <div
                    className={`flex gap-6 text-2xl items-center w-full ${
                      card.alertType === "success"
                        ? "text-[#17A900]"
                        : "text-[#F93434]"
                    } font-semibold mb-5`}
                  >
                    {card.alertType === "danger" ? (
                      <svg
                        viewBox="0 0 27 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[25px] h-[25px] md:w-[27px] md:h-[25px]"
                      >
                        <path
                          d="M11.0809 1.92012C12.1561 0.026628 14.844 0.0266264 15.9192 1.92012L26.3216 20.2396C27.3968 22.1331 26.0528 24.5 23.9025 24.5H3.09763C0.94726 24.5 -0.396723 22.1331 0.678463 20.2396L11.0809 1.92012Z"
                          fill="#F93434"
                        />
                        <path
                          d="M15.0296 16.7564H11.9702C11.9702 15.088 11.5447 10.5915 11.5447 9.02483V7.60059H15.4551V9.02483C15.4551 10.5915 15.0296 15.1084 15.0296 16.7564ZM15.2323 21.2326H11.7675V17.9162H15.2323V21.2326Z"
                          fill="white"
                        />
                      </svg>
                    ) : null}
                    <h1 className="text-[16px] md:text-[25px]">{card.alert}</h1>
                  </div>
                ) : null}
                <div className="flex justify-between items-center mt-[36px]">
                  <div className="font-lexend font-semibold text-base">
                    <p className="text-black/50">Ticket ID:</p>
                    <p className="text-black">{card.ticketId}</p>
                  </div>
                  <div className="font-lexend font-semibold text-base">
                    <p className="text-black/50">AssignedTo:</p>
                    <p className="text-black">{card.assignedTo}</p>
                  </div>
                </div>

                <div className="bg-[#D4E2F3] border border-solid my-[36px]" />

                {/* ---- Card ---- */}
                <div
                  className={`flex ${
                    card.propertyId ? "items-start" : "items-center"
                  } justify-between w-full`}
                >
                  <div>
                    <h1 className="text-base md:text-xl font-semibold">
                      {card.title}
                    </h1>
                    {card.propertyId ? (
                      <p className="text-sm font-medium bg-[#D1BCFF] rounded-full px-5 py-2 mt-3">
                        Property ID:{" "}
                        <span className="font-bold">{card.propertyId}</span>
                      </p>
                    ) : null}
                  </div>

                  {card.showMoreInfo && (
                    <Link
                      href="/"
                      className="text-black text-sm md:text-base underline font-medium"
                    >
                      View Profile
                    </Link>
                  )}
                </div>
                <p className="font-lexend font-semibold text-2xl mb-[12px] mt-[36px]">
                  Issue
                </p>
                <p className="font-lexend font-light mb-[36px]">{card.issue}</p>
                {card.appointment ? (
                  <p className="font-bold text-xl md:text-x2l text-center my-3 md:my-6">
                    {card.date}
                  </p>
                ) : null}
                {!card.payment && !card.appointment ? (
                  <p className="py-4 md:py-9 text-[12px] md:text-xl">
                    {card.info}{" "}
                    {card.offer ? (
                      <span className="text-[16px] md:text-3xl font-semibold">
                        {card.ref_no}
                      </span>
                    ) : null}
                  </p>
                ) : null}
                {card.ref_no && !card.offer ? (
                  <p className="text-[12px] md:text-xl font-medium mb-12">
                    Refrence Number:{" "}
                    <span className="text-[16px] md:text-3xl font-semibold">
                      {card.ref_no}
                    </span>
                  </p>
                ) : null}

                <Link href={card.link || "#"}>
                  <button className="mx-auto animated-button flex items-center justify-center gap-7 px-5 py-2 bg-black text-white font-normal rounded-full hover:bg-gray-800">
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

export default DisputeSlider;
