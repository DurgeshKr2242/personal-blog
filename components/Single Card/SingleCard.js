import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

const MONTHMAP = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const SingleCard = ({ title, name, date, description, slug, image }) => {
  const month = new Date(date).getMonth();
  const date1 = new Date(date).getDate();
  const year = new Date(date).getFullYear();
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
      <div className="flex flex-col justify-between h-full px-4 py-6">
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex flex-col gap-1">
            <p className="text-gray-700 dark:text-gray-400">
              <span className="font-semibold text-black dark:text-white">
                {title || "Random"}
              </span>
            </p>

            <p className="text-xs text-gray-700 dark:text-gray-400">
              {name || "Random"} -{" "}
              {`${MONTHMAP[month]} ${date1}, ${year}` || "Random"}
            </p>
          </div>

          <p className="text-sm text-left text-gray-700 dark:text-gray-400">
            {description || "Random"}
          </p>
        </div>
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
