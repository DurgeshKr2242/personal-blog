import React from "react";
import { AiOutlineRight } from "react-icons/ai";
const RecentPosts = () => {
  return (
    <div className="flex items-center justify-between w-full px-10 gap-14">
      <img
        className="max-w-lg shadow-lg rounded-3xl"
        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="CarPic"
      />

      <div className="flex flex-col items-start max-w-2xl gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 dark:text-gray-400">
              <span className="font-semibold text-black dark:text-white">
                Maintainance
              </span>
              - October 30, 2021
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Durgesh Kumar
            </p>
          </div>

          <p className="text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button className="flex items-center gap-1 px-4 py-2 font-semibold text-white transition-colors bg-black rounded-full hover:bg-Blue dark:hover:bg-Blue dark:hover:text-white dark:text-black1 dark:bg-white">
          Read Article <AiOutlineRight className="font-bold" />
        </button>
      </div>
    </div>
  );
};

export default RecentPosts;
