import React from "react";
import SingleCard from "../Single Card/SingleCard";

const AllPosts = ({ allBlogs }) => {
  return (
    <div className="flex flex-col items-start w-full gap-14">
      <div className="flex flex-col max-w-xs gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
        <p className="text-4xl font-bold">All Blogs</p>
        <p className="font-display text-black/80 dark:text-white/70">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus!
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-14">
        {allBlogs.map((blog, i) => {
          return (
            <SingleCard
              key={blog.id}
              // key={blog.attributes.id}
              slug={blog.attributes.Slug}
              title={blog.attributes.Title}
              name={blog.attributes.author?.data.attributes.username}
              //   date={new Date("Random"}
              image={
                blog.attributes.CoverImage.data.attributes.formats.medium.url
              }
              date={blog.attributes.createdAt}
              description={blog.attributes.Description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
