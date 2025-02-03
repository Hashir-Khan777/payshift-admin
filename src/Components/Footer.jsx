import React from "react";
import { FaRegCircleRight, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-center pt-[50px] pb-[10px] px-[12px] md:px-[162px]"
      style={{ backgroundImage: `url(/Images/footerbg.png)` }}
    >
      <p className="text-center text-[36px] md:text-[50px] font-medium text-white mb-10">
        Thanks For Using PayShift
      </p>

      <div className="flex flex-wrap gap-10 justify-center items-center mb-20">

        <div className="w-full md:w-[400px] bg-white/10 rounded-[4px] py-[36px] px-[24px] shadow-md shrink-0 border-white/20 border-[4px]">
          <p className="text-2xl font-lexend font-medium text-white mb-16">
            Lets Do This Together
          </p>
          <div className="flex items-center justify-between">
            <p className="uppercase text-white text-[24px] md:text-[32px] font-semibold">
              Contact Us
            </p>
            <img
              src="/svgIcons/footericon.svg"
              className="w-[35px] text-white"
            />
          </div>
        </div>
        <div className="w-full md:w-[400px] bg-white/10 rounded-[4px] py-[36px] px-[24px] shadow-md shrink-0 border-white/20 border-[4px]">
          <p className="text-2xl font-medium font-lexend text-white mb-16">
            Check Latest Insights
          </p>
          <div className="flex items-center justify-between">
            <p className="uppercase text-white text-[24px] md:text-[32px] font-semibold">
              Media Centre
            </p>
            <img
              src="/svgIcons/footericon.svg"
              className="w-[35px] text-white"
            />
          </div>
        </div>
      </div>

      <h2 className="text-center text-white text-[25px] font-semibold mb-6">
        Follow Us On
      </h2>
      <div className="flex justify-center gap-8 mb-6">
        <FaInstagram className="w-9 h-9 text-white" />
        <FaXTwitter className="w-9 h-9 text-white" />
        <RiYoutubeLine className="w-9 h-9 text-white" />
        <AiOutlineFacebook className="w-9 h-9 text-white" />
      </div>
      <p className="text-2xl font-medium text-white/65 text-center mb-8">
        ©PayShift 2024. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
