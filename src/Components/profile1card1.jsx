import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Profile1Card1({ cards }) { // Destructuring 'cards' prop properly
  
  
  return (
    <div className="w-[90%] md:h-[136px] bg-blue-300 mx-auto flex flex-row justify-between items-center px-10 py-3 border-2 border-white rounded-md my-0 mb-0"
     style={{
          background: "linear-gradient(0deg, #FFFFFF33 20%, #FFFFFF)",
          boxShadow:"2px 2px 5px 5px rgba(0,0,0,0.1)"
        }}
    >


      {cards.map((card, index) => ( // Mapping over the array
        <div key={index} className="w-full flex justify-between items-center gap-4">

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
            <p className="flex flex-col gap-2">
              <span className="font-lexend font-[600] md:text-[32px]/[40px] text-[12px]/[15px] text-center tracking-[4%]">{card.name ? card.name : "Steve Roger"}</span>
              <span className="font-lexend font-[300] md:text-[24px]/[30px] text-[12px]/[15px] text-center tracking-[4%]">{card.phone}</span>
            </p>
          </div>

          <FaArrowRight className="md:w-[27px] w-[15.28px] md:h-[26px] h-[15.22px]" />
        </div>
      ))}
    </div>
  );
}

export default Profile1Card1