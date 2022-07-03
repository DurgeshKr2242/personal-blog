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
    <Link href={`/blogs/${slug || "Random"}`}>
      <a className="no-underline">
        <div className="group flex w-[320px] cursor-pointer flex-col bg-gray-900/10  shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-200/10 mobileL:w-[420]">
          {/* {image && (
        <div className="h-32 mobileL:h-32 mobileL:w-[420] w-[320px]">
          <Image
            className="object-fill h-32 mobileL:h-32 mobileL:w-[420] w-[320px]"
            // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
            src={image}
            width="420"
            height="160"
            // layout="fill"
            alt="JsBanner"
          />
        </div>
      )} */}
          <div className="relative flex flex-col justify-between h-full px-3 pt-3 pb-10">
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-black dark:text-white">
                  {title || "Random"}
                </p>

                <p className="text-xs text-gray-700 dark:text-gray-400">
                  {/* {name || "Random"} -{" "} */}
                  {`${MONTHMAP[month]} ${date1}, ${year}` || "Random"}
                </p>
              </div>

              <p className="text-sm text-left text-gray-700 dark:text-gray-400">
                {description || ""}
              </p>
            </div>
            <div className="absolute bottom-0 right-0 flex justify-end">
              <button className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-white transition-colors bg-black group-hover:bg-Red dark:bg-white dark:text-black1 dark:group-hover:bg-Red dark:group-hover:text-white">
                Read Article <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </a>
    </Link>
    // <p>Hello</p>
  );
};

export default SingleCard;
