import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

import { AiFillCaretRight } from "react-icons/ai";

import RecentPosts from "./RecentPosts";
import { getRecentBlogs } from "../../Services/api";
const Hero = ({ recentBlogs }) => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setRecentPosts(recentBlogs);
  }, []);

  const leftHandler = () => {
    if (index != 0) {
      setIndex(index - 1);
    } else {
      setIndex(2);
    }
  };

  const rightHandler = () => {
    if (index != 2) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-6 pt-6 pb-10">
      <div className="flex flex-col items-start w-full gap-14">
        <div className="flex flex-col max-w-xs gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
          <p className="text-4xl font-bold">Latest Blogs</p>
          <p className="font-display text-black/80 dark:text-white/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus!
          </p>
        </div>
        <div className="relative w-full">
          <AiFillCaretRight
            onClick={leftHandler}
            className="cursor-pointer font-semibold transition-colors  rounded-full  hover:text-Red text-4xl absolute top-[50%] rotate-180 left-0 opacity-80"
          />
          <RecentPosts postData={recentPosts[index]} />
          <AiFillCaretRight
            onClick={rightHandler}
            className="cursor-pointer font-semibold transition-colors  rounded-full  hover:text-Red text-4xl absolute top-[50%]  right-0 opacity-80"
          />
        </div>
      </div>
      <div className="flex min-h-[32px] items-center gap-3">
        <div
          onClick={() => setIndex(0)}
          className={`${
            index === 0 ? "w-8 h-8" : "w-5 h-5"
          } bg-black rounded-full dark:bg-white transition-all cursor-pointer duration-300`}
        ></div>
        <div
          onClick={() => setIndex(1)}
          className={`${
            index === 1 ? "w-8 h-8" : "w-5 h-5"
          } bg-black rounded-full dark:bg-white transition-all cursor-pointer duration-300`}
        ></div>
        <div
          onClick={() => setIndex(2)}
          className={`${
            index === 2 ? "w-8 h-8" : "w-5 h-5"
          } bg-black rounded-full dark:bg-white transition-all cursor-pointer duration-300`}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
