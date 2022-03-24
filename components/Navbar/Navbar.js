import React from "react";
import SearchInput from "../SearchBlog/SearchInput";
import DarkModeSwitch from "./DarkModeSwitch";
import ourwebLogo from "./ourwebLogo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex justify-center w-full bg-gradient-to-r px-5 from-white1 to-white2 dark:text-white dark:from-[#000000] dark:to-[#130F40]">
      <div className="flex mobileL:flex-row flex-col max-w-[1440px] items-center justify-between w-full py-1">
        <DarkModeSwitch></DarkModeSwitch>
        <h1 className="text-4xl font-bold font-logo">
          Our<span className="text-Red">Web</span>
        </h1>
        {/* <p className="text-lg font-bold ">Home / Blogs</p> */}
        <SearchInput />
      </div>
    </div>
  );
};

export default Navbar;
