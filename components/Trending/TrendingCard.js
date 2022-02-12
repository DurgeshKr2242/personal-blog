import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const TrendingCard = () => {
  return (
    <div className="flex flex-col w-[300px] bg-gray-200/30 dark:bg-gray-900/30 rounded-2xl shadow-md">
      <div className=" w-[300px]">
        <img
          className="object-cover h-44 w-[300px] rounded-t-2xl"
          src="https://getflywheel.com/layout/wp-content/uploads/2019/02/The_Best_Java_Script_Libraries_1800x500-1.jpg"
          alt="JsBanner"
        />
      </div>

      <div className="flex flex-col gap-4 px-4 py-6 text-sm">
        <div className="flex flex-col gap-1">
          <p className="text-gray-700 dark:text-gray-400">
            <span className="font-semibold text-black dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </span>
          </p>

          <p className="text-xs text-gray-700 dark:text-gray-400">
            Durgesh Kumar - Jan 12, 2021
          </p>
        </div>

        <p className="text-sm text-left text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          consectetur architecto assumenda ullam rerum fugit sequi, dolorum
          corrupti...
        </p>
        <div className="flex justify-end">
          <button className="text-xs btn">
            Read Article <AiOutlineRight className="font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
