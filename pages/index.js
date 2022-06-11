import React, { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Trending from "../components/Trending/Trending";
import AllPosts from "../components/All Posts/AllPosts";
import axios from "axios";
// import { getAllBlogs, getRecentBlogs } from "../Services/api";
import Seo from "../components/SEO/Seo";
import { getAllBlogsForMdx, getRecentBlogsForMdx } from "../Services/mdx-api";
// import fs from "fs";
// import path from "path";

export default function Home({ blogs, recentBlogs }) {
  useEffect(() => {
    localStorage.setItem("AllBlogsForOurWeb", JSON.stringify(blogs));
  }, []);

  return (
    <div className=" flex flex-col items-center w-full bg-gradient-to-r from-white1 to-white2 dark:text-white dark:from-[#000000] dark:to-[#130F40]">
      <Seo
        title={"OurWEB"}
        description="Technical blog website covering topics broadly related to web development."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        //  shareImage={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog[0]?.attributes.CoverImage.data?.attributes?.formats.large?.url}`}
        keywords="OurWeb web webdev webdevelopment development"
      />
      <div className="flex flex-col max-w-[1440px] px-5 w-full my-20">
        <Hero recentBlogs={recentBlogs} />
        {/* <Trending /> */}
        <AllPosts allBlogs={blogs} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const blogs = getAllBlogsForMdx();
  // console.log("BLOGGGG:", blogs);
  const recentBlogs = getRecentBlogsForMdx();
  // console.log("TEMPPPP", temp);
  // const recentBlogs = await getRecentBlogs();
  return {
    props: {
      blogs,
      recentBlogs,
    },
  };
}
