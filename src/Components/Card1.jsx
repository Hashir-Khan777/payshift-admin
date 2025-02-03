import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Card1({ cards, headingBlack, headingWhite }) { // Destructuring 'cards' prop properly


    return (
        <div className="w-[90%] mx-auto flex flex-col my-10 md:py-10 py-5 md:gap-14 gap-5 justify-between md:items-center items-start px-5 border-2 border-white rounded-md"
            style={{
                background: "linear-gradient(0deg, #FFFFFF33 20%, #FFFFFF)",
                boxShadow: "2px 2px 5px 5px rgba(0,0,0,0.1)"
            }}
        >

            <h1 className="text-center text-[14px]/[17.5px] md:text-4xl font-medium font-lexend  md:font-cashdisplay">
                <span className="text-white">{headingWhite}</span> {headingBlack}
            </h1>

            <div className=" w-full flex flex-col justify-between items-center gap-4">
                {cards.map((card, index) => ( // Mapping over the array
                    <div key={index} className="md:h-[136px] h-[71px] md:px-10 px-5 w-full flex justify-between items-center gap-4 border-2 border-white rounded-md"
                        style={{
                            background: "linear-gradient(0deg, #FFFFFF33 50%, #FFFFFF )",
                            boxShadow: "1px 1px 10px 2px rgba(0,0,0,0.25)"
                        }}
                    >

                        <div className="flex flex-row gap-3">
                            {/* ---- Image ---- */}
                            {card.image ? (
                                <div className="md:w-[92.6px] md:h-[92.6px] w-[48px] h-[48px]">
                                    <img
                                        className="object-cover object-center rounded-full md:w-[92.6px] md:h-[92.6px] w-[48px] h-[48px]"
                                        src={card.image}
                                        alt="Profile Image"
                                    />
                                </div>
                            ) : null}
                            {/* ---- Image ---- */}

                            <p className="flex flex-col justify-start items-start gap-2">
                                <span className="font-lexend font-[600] md:text-[32px]/[40px] text-[12px]/[15px] text-center tracking-[4%]">{card.name}</span>

                                <span className="font-lexend font-[300] md:text-[16px]/[20px] text-[12px]/[15px] text-center tracking-[4%]">{card.info}</span>
                            </p>
                        </div>

                        <FaArrowRight className="md:w-[27px] w-[15.28px] md:h-[26px] h-[15.22px]" />
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Card1