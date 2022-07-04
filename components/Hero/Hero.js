import React, { useState } from "react";

import { AiFillCaretRight } from "react-icons/ai";

import RecentPosts from "./RecentPosts";

const Hero = ({ recentBlogs }) => {
  // const [recentPosts, setRecentPosts] = useState([]);
  const [index, setIndex] = useState(0);
  // console.log("HHHH", recentBlogs[index]);
  // useEffect(() => {
  //   setRecentPosts(recentBlogs);
  // }, []);

  const leftHandler = () => {
    if (index != 0) {
      setIndex(index - 1);
    } else {
      setIndex(1);
    }
  };

  const rightHandler = () => {
    if (index != 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <div className="flex flex-col items-center w-full gap-6 pt-6 pb-10">
      <div className="flex flex-col items-start w-full gap-14">
        <div className="flex max-w-xs flex-col gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
          <p className="text-4xl font-bold font-display">Latest Blogs</p>
          <p className=" text-black/80 dark:text-white/70">
            The top three most recent blogs are right here. Take a look!
          </p>
        </div>
        <div className="w-full ">
          <RecentPosts postData={recentBlogs[index]} />
        </div>
      </div>
      <div className="flex min-h-[32px] w-full items-center justify-between gap-3">
        <AiFillCaretRight
          onClick={leftHandler}
          className="text-4xl transition-colors rotate-180 rounded-full cursor-pointer font-display opacity-80 hover:text-Red"
        />

        <div className="flex min-h-[32px] items-center gap-3">
          <div
            onClick={() => setIndex(0)}
            className={`${
              index === 0 ? "h-8 w-8" : "h-5 w-5"
            } cursor-pointer rounded-full bg-black transition-all duration-300 dark:bg-white`}
          ></div>
          <div
            onClick={() => setIndex(1)}
            className={`${
              index === 1 ? "h-8 w-8" : "h-5 w-5"
            } cursor-pointer rounded-full bg-black transition-all duration-300 dark:bg-white`}
          ></div>
          {/* <div
          onClick={() => setIndex(2)}
          className={`${
            index === 2 ? "w-8 h-8" : "w-5 h-5"
          } bg-black rounded-full dark:bg-white transition-all cursor-pointer duration-300`}
        ></div> */}
        </div>
        <AiFillCaretRight
          onClick={rightHandler}
          className="text-4xl transition-colors rounded-full cursor-pointer font-display opacity-80 hover:text-Red"
        />
      </div>
    </div>
  );
};

export default Hero;
