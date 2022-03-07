import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full bg-gradient-to-r px-5 from-white1 to-white2 dark:text-white dark:from-[#000000] dark:to-[#130F40]">
      <div className="flex mobileL:flex-row flex-col max-w-[1440px] items-center justify-between w-full py-1">
        <DarkModeSwitch></DarkModeSwitch>
        <p className="text-lg font-bold ">Home / Blogs</p>
        <div className="relative">
          <input
            type="text"
            className=" border-b-2 outline-none bg-transparent border-black/70 dark:border-white/70 py-2 pr-[70px] pl-2 text-lg placeholder:text-lg placeholder:tracking-widest dark:placeholder:text-gray-300/30 placeholder:text-gray-800/50"
            placeholder="search"
          />
          <button className="absolute right-0 px-5 py-1 text-lg font-semibold text-white bg-black dark:bg-white dark:text-black top-1 rounded-xl">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
