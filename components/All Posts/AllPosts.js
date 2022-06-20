import React from "react";
import SingleCard from "../Single Card/SingleCard";

const AllPosts = ({ allBlogs }) => {
  return (
    <div className="flex flex-col items-start w-full gap-14">
      <div className="flex max-w-xs flex-col gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
        <p className="text-4xl font-bold">All Blogs</p>
        <p className="font-display text-black/80 dark:text-white/70">
          All the blogs, from the beginning till today!
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-14">
        {allBlogs.map((blog, i) => {
          return (
            <SingleCard
              key={blog.slug}
              slug={blog.slug}
              title={blog.frontMatter.title}
              name={blog.frontMatter.author}
              image={blog.frontMatter.thumbnailUrl}
              date={blog.frontMatter.date}
              description={blog.frontMatter.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
