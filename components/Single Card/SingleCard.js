import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

const SingleCard = ({ title, name, date, description, slug, image }) => {
  return (
    <div className="flex flex-col w-[300px] bg-gray-200/30 dark:bg-gray-900/30 rounded-2xl shadow-md">
      <div className=" w-[300px]">
        <img
          className="object-cover h-44 w-[300px] rounded-t-2xl"
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
          width="300"
          height="300"
          // layout="fill"
          alt="JsBanner"
        />
      </div>

      <div className="flex flex-col gap-4 px-4 py-6 text-sm">
        <div className="flex flex-col gap-1">
          <p className="text-gray-700 dark:text-gray-400">
            <span className="font-semibold text-black dark:text-white">
              {title || "Random"}
            </span>
          </p>

          <p className="text-xs text-gray-700 dark:text-gray-400">
            {name || "Random"} - {date || "Random"}
          </p>
        </div>

        <p className="text-sm text-left text-gray-700 dark:text-gray-400">
          {description || "Random"}
        </p>
        <div className="flex justify-end">
          <Link href={`/blogs/${slug || "Random"}`}>
            <a className="text-xs btn">
              {" "}
              Read Article <AiOutlineRight className="font-bold" />
            </a>
          </Link>
        </div>
      </div>
    </div>
    // <p>Hello</p>
  );
};

export default SingleCard;
