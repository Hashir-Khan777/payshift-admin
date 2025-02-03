"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SignUp from './SignUp'
import SignIn from './SignIn'

const SignComponent = () => {
    const pathname = usePathname();

    return (
        <>
            {/* Navigation Links */}
            <div className='w-full md:h-[70px] h-[65px] bg-[#000000] flex flex-row justify-center items-center gap-10'>
                <Link
                    href="/sign-in"
                    className={`font-cashdisplay md:text-[24px]/[30px] text-[20px]/[24.6px] font-[500] ${pathname === '/sign-in' ? 'text-white' : 'text-gray-400'
                        }`}
                >
                    Sign In
                </Link>
                <Link
                    href="/sign-up"
                    className={`font-cashdisplay md:text-[24px]/[30px] text-[20px]/[24.6px] font-[500] ${pathname === '/sign-up' ? 'text-white' : 'text-gray-400'
                        }`}
                >
                    Sign Up
                </Link>
            </div>



            {/* Form Content */}
            <div className='w-full flex flex-col justify-center items-center gap-5 py-10'
                style={{ background: "linear-gradient(180deg, #aed2ff 30%, #ffffff)" }}>

                {/* Social Login Section */}
                <div className='w-[90%] flex flex-col justify-center items-center gap-5 py-5'>
                    {/* --- Sign UP/IN  with FB or Google --------*/}
                    <div className='w-[100%] flex flex-col justify-center items-center gap-5 py-5'>
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
                        <div className="md:w-[50%] w-[50%] border-t-[1px] border-black"></div>
                        <span className="text-[#000000] md:text-[18px]/[22.5px] text-[14px]/[17.5px] font-[400] font-lexend">Or</span>
                        <div className="md:w-[50%] w-[50%] border-t-[1px] border-black"></div>
                    </div>
                </div>

                {/* Form Section */}
                {pathname === '/sign-up' ? <SignUp /> : <SignIn />}


            </div>
        </>
    )
}

export default SignComponent