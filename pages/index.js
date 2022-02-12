import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Trending from "../components/Trending/Trending";
import { GetStaticProps } from "next";
import { getPosts, getRecentPosts } from "../Services";
import AllPosts from "../components/All Posts/AllPosts";

export default function Home({ posts }) {
  // useEffect(() => {
  //   console.log("LOGGGG");
  //   console.log(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);
  // }, []);

  console.log(posts);
  return (
    <div className=" flex flex-col items-center w-full bg-gradient-to-r from-white1 to-white2 dark:text-white dark:from-[#000000] dark:to-[#130F40]">
      <div className="flex flex-col max-w-[1440px] px-5 w-full ">
        <Hero />
        <Trending />
        <AllPosts posts={posts} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  // const recentPosts = await getRecentPosts();
  // const recentPosts1 = JSON.parse(JSON.stringify(recentPosts));

  return {
    props: { posts },
  };
}
