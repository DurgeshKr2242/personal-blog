import React from "react";

const Comment = () => {
  return (
    <div className="w-full max-w-2xl px-10 py-6 mt-6 shadow-md bg-gray-200/30 dark:bg-gray-900/30 rounded-2xl">
      <p className="mb-4 text-2xl font-bold">Discussion</p>
      <div className="flex-col items-start w-full">
        <textarea
          className="w-full rounded-lg bg-gray-400/30 dark:bg-gray-600/30"
          name="comment Section"
          id="commentSec"
        ></textarea>
        <button className="py-1 rounded-md btn">Post</button>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <p className="border-[1px] dark:border-white/10 rounded-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          facilis quidem sint quam a deserunt voluptatibus libero ad, nesciunt{" "}
        </p>
        <p className="border-[1px] dark:border-white/10 rounded-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          facilis quidem sint quam a deserunt voluptatibus libero ad, nesciunt{" "}
        </p>
        <p className="border-[1px] dark:border-white/10 rounded-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          facilis quidem sint quam a deserunt voluptatibus libero ad, nesciunt{" "}
        </p>
        <p className="border-[1px] dark:border-white/10 rounded-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          facilis quidem sint quam a deserunt voluptatibus libero ad, nesciunt{" "}
        </p>
        <p className="border-[1px] dark:border-white/10 rounded-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          facilis quidem sint quam a deserunt voluptatibus libero ad, nesciunt{" "}
        </p>
      </div>
    </div>
  );
};

export default Comment;
