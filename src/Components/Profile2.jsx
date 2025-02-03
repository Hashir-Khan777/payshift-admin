import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const imageUrl =
  "https://s3-alpha-sig.figma.com/img/6349/acbd/1a0a65f8f11b31f35a3437c0ba96638b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUWIESKH1ZxEfAcTv6v7b7uzvxxtUjHVmjEAPtQn5qRJmAtte2u-Um0NV~SxUUE~~xZDoF7mI6im~SVtm5yBQsQ5hsrKCJlRDdROLO6H9soAqAJ2IIvkhWeny1JFYvOI8RL3ASkcRjf0i18KcRKDYchVBc~TMFw~r3-Vexrvv~BGANDxjGJpcxeIqAa3dZKkfwAaEktae-IUd~O30ikFZmZjBEzTDJLxL7M9MPYhx3iChMVJFHaCA4F9GRtuRDtUqgp0iy9stBTOtIW~oqSbVSTMzjzyW2U20E~P7yi0tmYdSuTkZqw99gC1JGJ2I7nnEeQR4QqDUovCi6VfWwA1Rw__";

function Profile2() {
  return (
    <>
      {/* Container div starts */}
      <div className="w-[90%] md:h-[90vh] mx-auto flex md:flex-row flex-col gap-10 justify-center items-center">
        {/* ======= Profile Image ======= */}
        <div className="relative md:w-[310px] w-[100vw] md:h-[290px] bg-red-700">
          <img
            src={imageUrl}
            alt="Profile Image"
            className="object-cover object-center md:w-[310px] w-[100vw] md:h-[290px] h-[50vh]"
          />

          <img
            src="./svgIcons/camera.svg"
            alt="camera icon"
            className="absolute bottom-5 right-5"
          />
        </div>
        {/* ======= Profile Image ======= */}

        {/* ====== Profile Details ======= */}
        <div
          className="md:w-[866px] w-[95%] md:h-[290px] flex flex-col md:gap-5 gap-3 justify-center items-start rounded-md border-2 border-white md:px-10 px-3 py-3"
          style={{
            // background:"linear-gradient(0deg, #8ABEFF, #ffffff 50%)"
            background: "linear-gradient(0deg, #aed2ff 30%, #ffffff)",
            boxShadow: "2px 2px 35px 2px rgba(0, 0, 0, 0.2)", // Adjust as needed
          }}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-lexend md:text-[32px]/[40px] text-[14px]/[17.5px] font-[600]">
              Personal Details
            </h1>
            <img
              src="./svgIcons/edit.svg"
              alt="Edit icon"
              className="md:w-[38px]  w-[24px] md:h-[38px] h-[24px]"
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <h3 className="font-lexend md:text-[20px]/[25px] text-[12px]/[15px] font-[600] tracking-[4%]">
              Steve Roger
            </h3>
            <p className="font-lexend md:text-[20px]/[25px] text-[12px]/[15px] font-[300] tracking-[4%]">
              +971 55 707 7482
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <p className="font-lexend md:text-[20px]/[25px] text-[12px]/[15px] font-[600] tracking-[4%]">
              steverogers@shield.mcu.com
            </p>

            <button className="animated-button flex items-center justify-center gap-3 md:gap-7 px-4 md:px-5 py-2 bg-black text-white font-normal rounded-full hover:bg-gray-800 h-[30px] md:h-[37px] w-[100px] md:w-auto">
              <span className="relative left-0 text-[10px]/[12px] md:text-[20px]/[25px] animated-text transition-all ease-linear duration-[400ms] font-lexend whitespace-nowrap overflow-hidden">
                Verify
              </span>
              <img
                src="/svgIcons/slidercomponenticon.svg"
                className="relative right-0 transition-all ease-linear duration-[400ms] animated-icon w-[16px] h-[16px] md:w-[22px] md:h-[22px]"
              />
            </button>
          </div>
        </div>
        {/* ====== Profile Details ======= */}
      </div>
      {/* Container div ends */}
    </>
  );
}

export default Profile2;
