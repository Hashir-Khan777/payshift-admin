import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-10">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Images/logo.svg" className=" h-[40px]" alt="Logo" />
        </a>
        <div className="flex flex-row gap-2 text-xl font-bold">
          <img src="/svgIcons/call.svg" alt="Call Icon" className="cursor-pointer w-[30px]" />
          <img src="/svgIcons/notification.svg" alt="Notification Icon" className="cursor-pointer w-[30px]" />
          <img src="/svgIcons/profile.svg" alt="Profile Icon" className="cursor-pointer w-[30px]" />

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
