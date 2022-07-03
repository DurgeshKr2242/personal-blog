import React from "react";
import { useRouter } from "next/router";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
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

const RecentPosts = ({ postData }) => {
  const router = useRouter();

  return (
    <div className="group flex h-max max-h-[432px] w-full flex-col items-center justify-center  bg-gray-900/10  shadow-sm transition-all  dark:bg-gray-200/10 tablet:flex-row  ">
      <div className=" flex min-h-[400px] max-w-3xl flex-col items-start gap-0 tablet:min-h-[414px] tablet:gap-10 tabletM:flex-row ">
        <div className="flex flex-col items-start gap-4 px-2 py-2 rounded-r-xl tablet:items-start tabletS:py-6 tabletS:px-6">
          <p className="text-left text-2xl font-bold leading-[1.2] tablet:text-left tablet:text-4xl mobileL:leading-snug">
            {postData.frontMatter.title}
          </p>
          <div className="flex flex-col items-start gap-2 tablet:items-start">
            <p className="text-xs text-left text-gray-400 dark:text-gray-400 tablet:text-left tabletS:text-sm">
              - {postData.frontMatter.date}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-5 px-2 py-2 text-xs leading-tight h-max tabletS:py-6 tabletS:px-6 mobileL:text-base mobileL:leading-snug">
          <p className="text-black/70 dark:text-white/70">
            {postData.frontMatter.description}
          </p>
          <Link href={`/blogs/${postData.slug}`}>
            <a className="no-underline">
              <button className="flex items-center gap-1 px-2 py-1 text-sm font-semibold transition-colors bg-white text-black1 group-hover:bg-Red group-hover:text-white tablet:py-2 tablet:px-4 tablet:text-base">
                Read Article <AiOutlineRight />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
