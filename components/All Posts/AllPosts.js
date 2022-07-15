import React from "react";
import SingleCard from "../Single Card/SingleCard";

const AllPosts = ({ allBlogs }) => {
  return (
    <div className="flex flex-col items-start w-full gap-14">
      <div className="flex max-w-xs flex-col gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
        <p className="text-4xl font-bold font-display">All Blogs</p>
        <p className=" text-black/80 dark:text-white/70">
          All the blogs, from the beginning till today!
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-14">
        {/* <ul className="flex flex-wrap gap-6"> */}
        {allBlogs.map((blog, i) => {
          return (
            <>
              {/* <li className=" flex-[1_1_350px] flex-grow"> */}
              <SingleCard
                key={blog.slug}
                slug={blog.slug}
                title={blog.frontMatter.title}
                name={blog.frontMatter.author}
                image={blog.frontMatter.thumbnailUrl}
                date={blog.frontMatter.date}
                description={blog.frontMatter.description}
              />
              {/* </li> */}
              {/* <li className="flex-[1_1_20rem] flex-grow">
                <SingleCard
                  key={blog.slug}
                  slug={blog.slug}
                  title={blog.frontMatter.title}
                  name={blog.frontMatter.author}
                  image={blog.frontMatter.thumbnailUrl}
                  date={blog.frontMatter.date}
                  description={blog.frontMatter.description}
                />
              </li> */}
            </>
          );
        })}
        {/* <li className="flex flex-grow-[3] "></li> */}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default AllPosts;
