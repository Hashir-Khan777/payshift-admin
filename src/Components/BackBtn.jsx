import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

function BackBtn({backBtnText="Go Back"} ) {
//   console.log("btnText:", btnText);  // Debug: Check what btnText contains
  return (
    <div className="w-full bg-[#ffffff] py-5 flex flex-row justify-start items-center gap-3 px-4 md:ps-16 ps-6 cursor-pointer">
      <FaArrowLeft className="md:w-[20px] w-[15.28px] md:h-[20px] h-[15.22px]" />
      <p className="text-gray-500 md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
        {backBtnText}
      </p>
    </div>
  );
}

export default BackBtn;