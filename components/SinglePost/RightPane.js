import React from "react";
import SingleRelatedPost from "./SingleRelatedPost";

const RightPane = () => {
  return (
    <div className="flex max-w-[200px] flex-row gap-8 tablet:flex-col ">
      {/* Realted post section */}

      <div className="flex flex-col gap-0 shadow-md rounded-2xl bg-gray-200/30 dark:bg-gray-900/30">
        <div className="flex flex-col  gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
          <p className="font-bold">Related Posts</p>
        </div>
        <SingleRelatedPost />;
      </div>

      {/* Tags */}

      <div className="flex flex-col gap-0 shadow-md rounded-2xl bg-gray-200/30 dark:bg-gray-900/30">
        <div className="flex flex-col  gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
          <p className="font-bold">Tags</p>
        </div>

        <p className="text-sm">Random category</p>
      </div>
    </div>
  );
};

export default RightPane;
