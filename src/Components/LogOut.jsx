import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function LogOut({text}) {
    return (
        <div className="w-[90%] mx-auto md:h-[136px] h-[71px] md:px-10 px-5  flex justify-between items-center gap-4 border-2 border-white rounded-md"
            style={{
                background: "linear-gradient(0deg, #FFFFFF33 50%, #FFFFFF )",
                boxShadow: "1px 1px 10px 2px rgba(0,0,0,0.25)"
            }}
        >

            <div className="flex flex-row gap-3">

                <p className="flex flex-col justify-start items-start gap-2 font-lexend font-[600] md:text-[32px]/[40px] text-[12px]/[15px] text-center tracking-[4%] text-[#F93434]">
                    {text}
                </p>
            </div>

            <FaArrowRight className="md:w-[27px] w-[15.28px] md:h-[26px] h-[15.22px]" />
        </div>
    )
}

export default LogOut
