import React from "react";
import SingleCard from "../Single Card/SingleCard";

const AllPosts = ({ posts }) => {
  return (
    <div className="flex flex-col items-start w-full gap-14">
      <div className="flex flex-col max-w-xs gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
        <p className="text-4xl font-bold">All Blogs</p>
        <p className="font-display text-black/80 dark:text-white/70">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus!
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-14">
        {posts.map((post) => {
          return (
            <SingleCard
              key={post.node.id}
              slug={post.node.slug}
              title={post.node.title}
              name={post.node.author.name}
              //   date={new Date(post.node.createdAt)}
              image={post.node.featuredImage.url}
              date="Jan 12, 2021"
              description={post.node.excerpt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
