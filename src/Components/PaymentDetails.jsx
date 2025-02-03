import React from 'react'

const PaymentDetails = ({ card }) => {
    const { amount, refNo, merchentName } = card;  // Destructure from card

    return (
        <div>
            <div
                className="mx-auto md:w-[377px] w-[90%] py-[32px] px-[24px] flex flex-row flex-wrap justify-between gap-5 border-2 border-white rounded-md text-left"
                style={{
                    background: "linear-gradient(0deg, #aed2ff 30%, #ffffff)",
                    boxShadow: "2px 2px 35px 2px rgba(0, 0, 0, 0.2)", // Adjust as needed
                }}
            >
                <div className="flex flex-col gap-2 justify-start">
                    <p className="md:text-[16px]/[17.5px] text-[14px] font-[400] text-[#000000]">To Pay</p>
                    <p className="text-[20px]/[25px] font-[500] text-[#17A900]">AED {amount}</p>
                </div>
                <div className="flex flex-col gap-2 justify-start">
                    <p className="md:text-[16px]/[17.5px] text-[14px] font-[400] text-[#000000]">Reference No</p>
                    <p className="text-[20px]/[25px] font-[600] text-[#000000]">{refNo}</p>
                </div>
                <div className="flex flex-col gap-2 justify-start">
                    <p className="md:text-[16px]/[17.5px] text-[14px] font-[400] text-[#000000]">Merchent Name</p>
                    <p className="text-[20px]/[25px] font-[600] text-[#000000]">{merchentName}</p>
                </div>
            </div>
        </div>
    );
};


export default PaymentDetails
