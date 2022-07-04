import React from "react";
import SearchInput from "../SearchBlog/SearchInput";
import DarkModeSwitch from "./DarkModeSwitch";
import ourwebLogo from "./ourwebLogo.png";
import Image from "next/image";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex w-full justify-center bg-gradient-to-r from-white1 to-white2 px-5 dark:from-[#000000] dark:to-[#130F40] dark:text-white">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-between gap-2 py-1 navBreakM:flex-row">
        <DarkModeSwitch></DarkModeSwitch>
        <h1
          onClick={() => router.replace("/")}
          className="text-4xl font-extrabold tracking-wider cursor-pointer font-logo"
        >
          our<span className="text-Red">Web</span>
        </h1>
        {/* <p className="text-lg font-bold ">Home / Blogs</p> */}
        <SearchInput />
      </div>
    </div>
  );
};

export default Navbar;
