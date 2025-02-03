import React from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import Link from 'next/link';

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    return (
        <>
            {/* ======= FORM ======== */}
            <div className='flex flex-col gap-5 mx-10 w-[90%]'>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="fullName" className='font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]'>Full Name</label>
                    <input type="text" className='w-full md:h-[60px] h-[40px] px-10 shadow-lg outline-none rounded-sm font-lexend' id='fullName' />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="email" className='font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]'>Email</label>
                    <input type="email" className='w-full md:h-[60px] h-[40px] px-10 shadow-lg outline-none rounded-sm font-lexend' id='email' />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="password" className='font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]'>Password</label>

                    <div className='w-full flex flex-row justify-center items-center  md:h-[60px] h-[40px] rounded-sm bg-white shadow-lg'>
                        <input type={showPassword ? 'text' : 'password'} className='md:w-[95%] w-[85%] h-full px-10  outline-none font-lexend' id='password' />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)} // Toggle state
                            className="text-black md:w-[5%] w-[15%] h-full text-center align-middle  transition-colors duration-200 px-3"
                        >
                            {showPassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
                        </button>
                    </div>

                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="confirmPassword" className='font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]'>Confirm Password</label>

                    <div className='w-full flex flex-row justify-center items-center  md:h-[60px] h-[40px] rounded-sm bg-white shadow-lg'>
                        <input type={showConfirmPassword ? 'text' : 'password'} className='md:w-[95%] w-[85%] h-full px-10  outline-none font-lexend' id='confirmPassword' />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword((prev) => !prev)} // Toggle state
                            className="text-black md:w-[5%] w-[15%] h-full text-center align-middle  transition-colors duration-200 px-3"
                        >
                            {showConfirmPassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
                        </button>
                    </div>

                </div>

                <div className='flex flex-row gap-2 justify-start items-center'>
                    <input type="checkbox" id="agreeTrems" className='w-[17px] h-[17px]' />
                    <label htmlFor="agreeTrems" className='font-lexend text-[14px]/[17.5px] tracking-[4%] flex flex-row gap-2 justify-start items-center'>
                        <span className='font-[300]'>I agree to the</span>
                        <Link href='/terms-and-conditions' className='font-[500] underline'>Terms & Conditions</Link>
                    </label>

                </div>


            </div>
            {/* ======= FORM ======== */}

            {/* ========= Buttons ========= */}
            <button className="animated-button flex items-center justify-center gap-7 px-7 py-6 bg-black text-white font-normal rounded-full hover:bg-gray-800 h-[37px] ">
                <span className="relative  text-base left-0 md:text-[20px]/[25px] animated-text transition-all ease-linear duration-[400ms] font-lexend">
                    Sign Up
                </span>
                <img
                    src="/svgIcons/slidercomponenticon.svg"
                    className="relative right-0 transition-all ease-linear duration-[400ms] animated-icon w-[22px] h-[18px] md:w-[32px] md:h-[25px]"
                />
            </button>

            <div className="text-center text-gray-600 font-lexend text-[14px]/[17.5px] font-[300] tracking-[4%]">

                <div className='flex flex-row items-center gap-2'>
                    <span className="text-black font-[300] text-[14px]/[17.5px] underline font-lexend">Already have an account? </span>
                    <Link href="/sign-in" className="text-black font-[500] text-[14px]/[17.5px] underline font-lexend">
                        Sign In
                    </Link>
                </div>

            </div>
            {/* ========= Buttons ========= */}
        </>
    )
}

export default SignUp
