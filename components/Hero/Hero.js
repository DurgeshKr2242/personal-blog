import React, { useState, useEffect } from "react";

import { AiOutlineRight } from "react-icons/ai";
import { getRecentPosts } from "../../Services";
import RecentPosts from "./RecentPosts";
const Hero = ({ categories, slug }) => {
  const [recentPost, setRecentPost] = useState([]);

  useEffect(() => {
    // if (!slug) {
    const getPostFunc = async () => {
      const posts = await getRecentPosts();
      setRecentPost(posts);
    };
    // }
    getPostFunc();
    console.log(recentPost);
  }, []);

  return (
    <div className="flex flex-col items-center w-full gap-6 pt-6 pb-10">
      <div className="flex flex-col items-start w-full gap-14">
        <div className="flex flex-col max-w-xs gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
          <p
            className="text-4xl font-bold"
            onClick={() => console.log(recentPost)}
          >
            Latest Blogs
          </p>
          <p className="font-display text-black/80 dark:text-white/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus!
          </p>
        </div>

        <RecentPosts />
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-black rounded-full dark:bg-white"></div>
        <div className="w-5 h-5 rounded-full dark:bg-white/50 bg-black/50"></div>
        <div className="w-5 h-5 rounded-full dark:bg-white/50 bg-black/50"></div>
      </div>
    </div>
  );
};

export default Hero;
