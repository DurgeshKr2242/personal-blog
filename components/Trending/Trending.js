import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import SingleCard from "../Single Card/SingleCard";

const Trending = () => {
  return (
    <div className="flex flex-col items-center w-full gap-4 pt-32 pb-10">
      <div className="flex flex-col items-start w-full gap-14">
        <div className="flex flex-col max-w-xs gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
          <p className="text-4xl font-bold">Trending</p>
          <p className="font-display text-black/80 dark:text-white/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus!
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full gap-6">
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
      </div>
    </div>
  );
};

export default Trending;
