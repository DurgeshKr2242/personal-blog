import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Trending from "../components/Trending/Trending";
import AllPosts from "../components/All Posts/AllPosts";

import { getAllBlogs } from "../Services/api";

export default function Home({ blogs }) {
  console.log(blogs);
  return (
    <div className=" flex flex-col items-center w-full bg-gradient-to-r from-white1 to-white2 dark:text-white dark:from-[#000000] dark:to-[#130F40]">
      <div className="flex flex-col max-w-[1440px] px-5 w-full ">
        <Hero />
        <Trending />
        <AllPosts allBlogs={blogs} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
