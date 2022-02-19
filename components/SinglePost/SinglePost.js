import React, { useState, useEffect } from "react";

import PostDetails from "./PostDetails";
import SingleRelatedPost from "./SingleRelatedPost";
import Comment from "./Comment";

const SinglePost = ({ blog }) => {
  console.log(blog);
  return (
    <div className="flex gap-4">
      <div>
        <PostDetails blogDetails={blog} />
        <Comment />
      </div>
      <div className="flex flex-col gap-8 max-w-[200px] ">
        {/* Realted post section */}

        <div className="flex flex-col gap-0 shadow-md bg-gray-200/30 dark:bg-gray-900/30 rounded-2xl">
          <div className="flex flex-col  gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
            <p className="font-bold">Related Posts</p>
          </div>
          <SingleRelatedPost />;
        </div>

        {/* Tags */}

        <div className="flex flex-col gap-0 shadow-md bg-gray-200/30 dark:bg-gray-900/30 rounded-2xl">
          <div className="flex flex-col  gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
            <p className="font-bold">Tags</p>
          </div>

          <p className="text-sm">Random category</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
