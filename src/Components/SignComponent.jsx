"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import SignUp from './SignUp'
import SignIn from './SignIn'
import SignHeader from './SignHeader'

const SignComponent = () => {

    const pathname = usePathname();


    return (
        <section className='w-full overflow-x-hidden'>
            {/* ============== Header =============== */ }
             <div className='w-full relative'>
                {/* Video Background */}
                <div className='absolute top-0 left-0 w-full md:h-[316px] h-[140px] overflow-hidden z-0 opacity-[0.4]'>
                    <video
                        className='w-full h-full object-cover object-center'
                        autoPlay
                        muted
                        loop
                    >
                        <source src="./Images/video.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Inner Content */}
                <div className='relative md:h-[316px] h-[140px] z-10 flex items-center justify-center shadow-lg'>
                    <img src="./svgIcons/payshiftLogo.svg" alt="PayShift Logo" className='md:w-[300px] md:h-[99.4px] w-[147.25px] h-[46.5px]' />
                </div>
            </div>


            {/* ============== Header =============== */}


            <div className='w-full md:h-[70px] h-[65px] bg-[#000000] flex flex-row justify-center items-center gap-10'>
                <Link
                    href="/sign-in"
                    className={`font-cashdisplay md:text-[24px]/[30px] text-[20px]/[24.6px] font-[500] tracking-normal text-center ${pathname === '/sign-in' ? 'text-white' : 'text-gray-400'
                        }`}
                >
                    Sign In
                </Link>
                <Link
                    href="/sign-up"
                    className={`font-cashdisplay  md:text-[24px]/[30px] text-[20px]/[24.6px] font-[500] tracking-normal text-center ${pathname === '/sign-up' ? 'text-white' : 'text-gray-400'
                        }`}
                >
                    Sign Up
                </Link>
            </div>

            {/* {---------- Sign Up/ Sign In Form-----------} */}
            <div className='w-full flex flex-col justify-center items-center gap-5  py-10'
                style={{
                    background: "linear-gradient(180deg, #aed2ff 30%, #ffffff)",
                }}
            >

                {/* --- Sign UP/IN  with FB or Google --------*/}
                <div className='w-[90%] flex flex-col justify-center items-center gap-5 py-5'>
                    <p className='font-lexend font-[400] text-[18px]/[22.5px]'>{pathname === '/sign-up' ? 'Sign Up with' : 'Sign In with'}</p>
                    <div className='w-full flex flex-row justify-center items-center gap-5'>
                        <div className='w-[50%] md:h-[70px] h-[50px] bg-white  shadow-sm flex justify-center items-center rounded-sm cursor-pointer'>
                            <img src="./svgIcons/google.svg" className='md:w-[48px] md:h-[48px] w-[26px] h-[26px]' />
                        </div>
                        <div className='w-[50%] md:h-[70px] h-[50px] bg-white  shadow-sm flex justify-center items-center rounded-sm cursor-pointer'>
                            <img src="./svgIcons/fb.svg" className='md:w-[48px] md:h-[48px] w-[26px] h-[26px]' />
                        </div>
                    </div>
                </div>
                
                {/* ------ Sign UP/IN  with FB or Google ------*/}

                <div className="w-full flex items-center justify-center gap-5 my-10">
                    <div className="md:w-[43%] w-[35%] border-t-[1px] border-black"></div>
                    <span className="text-[#000000] md:text-[18px]/[22.5px] text-[14px]/[17.5px] font-[400] font-lexend">Or</span>
                    <div className="md:w-[43%] w-[35%] border-t-[1px] border-black"></div>
                </div>




                {/* ===== Form ===== */}

                {
                    pathname == '/sign-up' ? <SignUp /> : <SignIn />
                }


                {/* ===== Form ===== */}

                <button className="animated-button flex items-center justify-center gap-7 px-7 py-6 bg-black text-white font-normal rounded-full hover:bg-gray-800 h-[37px] ">
                    <span className="relative  text-base left-0 md:text-[20px]/[25px] animated-text transition-all ease-linear duration-[400ms] font-lexend">
                        {pathname == '/sign-up' ? 'Sign Up' : 'Sign In'}
                    </span>
                    <img
                        src="/svgIcons/slidercomponenticon.svg"
                        className="relative right-0 transition-all ease-linear duration-[400ms] animated-icon w-[22px] h-[18px] md:w-[32px] md:h-[25px]"
                    />
                </button>

                <div className="text-center text-gray-600 font-lexend text-[14px]/[17.5px] font-[300] tracking-[4%]">
                    {pathname === '/sign-in' ? (
                        <>
                        <div className='flex flex-row items-center gap-2'>
                            <span  className="text-black font-[300] text-[14px]/[17.5px] underline font-lexend">Don’t have an account? </span>
                            <Link href="/sign-up" className="text-black font-[500] text-[14px]/[17.5px] underline font-lexend">
                                Sign Up
                            </Link>
                            </div>
                        </>
                    ) : pathname === '/sign-up' ? (
                        <>
                        <div className='flex flex-row items-center gap-2'>
                            <span  className="text-black font-[300] text-[14px]/[17.5px] underline font-lexend">Already have an account? </span>
                            <Link href="/sign-in" className="text-black font-[500] text-[14px]/[17.5px] underline font-lexend">
                                Sign In
                            </Link>
                            </div>
                        </>
                    ) : null}
                </div>




            </div>
            {/* {---------------------------} */}
        </section>
    )
}

export default SignComponent
