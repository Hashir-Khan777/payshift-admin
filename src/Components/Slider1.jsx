"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Slider1 = ({ cards, headingWhite, headingBlack, categories }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      className="w-[90%] container rounded-lg mx-auto mt-20 md:py-20 py-5 px-1 md:px-16 border-[2px] border-white "
      style={{
        background:   "linear-gradient(180deg, #E8F3FF 15.92%, #bddcff 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
       <h1 className="ps-2 text-left text-[14px] md:text-4xl font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>


      {/* ========= Slider ============ */}
      <div className="flex items-center justify-center mb-4 overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
          }}
        >
          {Array.from({ length: Math.ceil(cards.length / 4) }).map(
            (_, slideIndex) => (
              <SwiperSlide
                key={slideIndex}
                className="w-[100%] py-2 px-2"
              >
                <div className="w-full my-4 flex flex-col gap-8">
                  {cards
                    .slice(slideIndex * 4, slideIndex * 4 + 4)
                    .map((card, index) => (
                      <div
                        key={index}
                        className="rounded-sm px-4 py-5 flex flex-col gap-3 border-2 border-white relative"
                        style={{
                          background:
                            "linear-gradient(180deg, #E8F3FF 15.92%, #bddcff 100%)",
                          boxShadow: "1px 1px 10px 3px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        {/* ---- Card Content---- */}
                        <div className="w-full flex flex-row justify-between items-center">
                          <p className="font-lexend font-[600] md:text-[20px]/[25px] text-[12px]/[15px] tracking-[4%] text-[#000000]">{card.category}</p>
                          <p className="font-lexend font-[600] md:text-[20px]/[25px] text-[12px]/[15px] tracking-[4%] text-[#5EB43B]">{card.tag}</p>
                        </div>

                        <div className="w-full flex flex-row justify-between items-center ps-2">

                          <div className="w-full flex flex-col gap-3 ">
                            <h1 className="mt-3 font-lexend font-[600] md:text-[32px]/[40px] text-[18px]/[22.5px] tracking-[4%] text-[#000000]">{card.projectName}</h1>

                            <div className="w-full flex flex-row justify-between items-center whitespace-nowrap">
                              <p className="flex flex-row gap-2 justify-center items-center">
                                <img src="./svgIcons/location.svg" alt="Location Icon" className="md:w-[16px] md:h-[16px] w-[7px] h-[9px]" />
                                <span className="md:text-[20px]/[25px] text-[12px]/[15px] font-[300] font-lexend tracking-[4%]">Dubai</span>
                              </p>
                              <p className=" md:text-[20px]/[25px] text-[12px]/[15px] font-[300] font-lexend tracking-[4%">1400 SQFT</p>
                              <p className=" md:text-[20px]/[25px] text-[12px]/[15px] font-[300] font-lexend tracking-[4%">2BHK, 2BR</p>
                            </div>

                          </div>

                          <Link href='#' >
                            <FaArrowRight className="md:w-[20px] w-[15.28px] md:h-[20px] h-[15.22px]" />
                          </Link>

                        </div>



                        {/* ---- Card Content---- */}

                        {/* ===== Buttons ==== */}

                        <div className="w-full flex justify-center items-center">
                          <Link href={`/${card.viewAllLink}`} className="text-center underline">
                            View all
                          </Link>
                        </div>


                        {/* ===== Buttons ==== */}


                        {/* ---- Card Content---- */}
                      </div>
                    ))}
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-end items-end gap-4 container px-10 pt-10">
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

export default Slider1;