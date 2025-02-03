import React from "react";
import { BsBank2 } from "react-icons/bs";
import { FaCcApplePay } from "react-icons/fa";
import { GrPaypal } from "react-icons/gr";

// This Card is For Payment Method in Customer Profile

const paymentMethods = [
  { id: 1, name: "Card", icon: "/svgIcons/card.svg", isImg: true },
  { id: 2, name: "Bank", icon: BsBank2, isImg: false },
  { id: 3, name: "ApplePay", icon: FaCcApplePay, isImg: false },
  { id: 4, name: "PayPal", icon: GrPaypal, isImg: false },
];

function Card2({ headingBlack, headingWhite }) {
  return (
    <div
      className="w-[90%] bg-blue-300 mx-auto flex flex-col my-10 md:py-10 py-5 md:gap-14 gap-5 justify-between md:items-center items-start px-5 border-2 border-white rounded-md"
      style={{
        background: "linear-gradient(0deg, #FFFFFF33 20%, #FFFFFF)",
        boxShadow: "2px 2px 5px 5px rgba(0,0,0,0.1)",
      }}
    >
      {/* Heading */}
      <h1 className="text-center text-[14px] md:text-4xl font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>

      {/* Payment Methods */}
      <div className="w-full flex flex-row flex-wrap md:justify-center gap-2 md:gap-10 justify-start sm:gap-4 px-3">

  {paymentMethods.map((method) => (
    <div
      key={method.id}
      className="rounded-lg shadow-lg w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[200px] md:h-[200px] flex flex-col justify-center items-center gap-1 p-2"
      style={{ background: "linear-gradient(0deg, #aed2ff 10%, #ffffff 90%)" }}
    >
      {method.isImg ? (
        <img className="w-6 md:w-[81px] md:h-[83px] sm:w-[24px] sm:h-[24px]" src={method.icon} alt={method.name} />
      ) : (
        <method.icon className="w-6 md:w-[81px] md:h-[83px] sm:w-[24px] sm:h-[24px] text-[#030055]" />
      )}
      <span className="text-[10px] sm:text-[12px] md:text-[20px] font-medium font-lexend">
        {method.name}
      </span>
    </div>
  ))}
</div>


    </div>
  );
}

export default Card2;
