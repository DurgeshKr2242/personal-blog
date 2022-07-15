import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import demoImg from "./demoImg.png";
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
    // <div className="object-cover w-full h-full">
    <Link href={`/blogs/${slug || "Random"}`}>
      <a className="no-underline">
        <div className="group flex h-full min-h-[200px] w-full max-w-xs cursor-pointer flex-col  object-cover shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg  ">
          {/* <div className="flex flex-col flex-grow transition-all shadow-sm cursor-pointer group bg-gray-900/10 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-200/10 "> */}
          {/* <div className="group flex w-[320px] flex-grow basis-auto cursor-pointer flex-col bg-gray-900/10  shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-200/10 mobileL:w-[420]"> */}
          {/* {image && (
          )} */}
          {/* <div className="h-32 w-[320px] mobileL:h-32 mobileL:w-[420]"> */}
          <img
            className="max-h-[200px] min-w-full object-cover align-bottom"
            // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
            src={image}
            // width="420"
            // height="160"
            // layout="fill"
            alt="JsBanner"
          />
          {/* </div> */}
          <div className="relative flex flex-col justify-between h-full gap-4 px-3 pt-3">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-black dark:text-white">
                  {title || "Random"}
                </p>

                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {/* {name || "Random"} -{" "} */}
                  {`${MONTHMAP[month]} ${date1}, ${year}` || "Random"}
                </p>
              </div>

              <p className="text-xs text-left text-gray-800 dark:text-gray-300">
                {description || ""}
              </p>
            </div>
            {/* <div className="absolute bottom-0 right-0 flex justify-end "> */}
            <button className="float-left flex max-w-[170px] items-center gap-1 bg-black px-3 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-Red dark:bg-white dark:text-black1 dark:group-hover:bg-Red dark:group-hover:text-white">
              Read Article <AiOutlineRight />
            </button>
            {/* </div> */}
          </div>
        </div>
      </a>
    </Link>
    // </div>
    // <p>Hello</p>
  );
};

export default SingleCard;
