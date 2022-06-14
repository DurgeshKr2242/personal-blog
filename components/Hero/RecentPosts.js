import React from "react";
import { useRouter } from "next/router";
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

const RecentPosts = ({ postData }) => {
  // console.log("RECENT POST IS THIS", postData);
  // const month = new Date(postData?.attributes.createdAt).getMonth();
  // const date1 = new Date(postData?.attributes.createdAt).getDate();
  // const year = new Date(postData?.attributes.createdAt).getFullYear();
  const router = useRouter();

  return (
    <div className="flex tablet:flex-row flex-col items-center justify-center w-full max-h-[432px] relative group">
      {/* <div className="flex tablet:flex-row flex-col items-center justify-center w-full tablet:gap-40 gap-10 min-h-[342px] px-10"> */}
      <div className="w-[100%] flex-1/2 overflow-hidden max-h-[432px]">
        <img
          className="object-contain w-full brightness-[0.4] "
          // className="max-w-xs w-max mobileL:max-w-md tablet:max-w-lg rounded-3xl"
          src={postData.frontMatter.thumbnailUrl}
          // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${postData?.attributes?.CoverImage?.data?.attributes?.formats?.large?.url}`}
          alt="CarPic"
        />
      </div>

      <div className="absolute top-0 left-0 flex flex-col items-start max-w-3xl gap-10 tablet:items-start">
        <div className="flex flex-col items-start gap-4 px-2 py-2 mobileL:py-6 mobileL:px-6 rounded-r-xl tablet:items-start">
          <p className="text-2xl font-bold leading-snug text-left text-white mobileL:text-5xl tablet:text-left">
            {postData.frontMatter.title}
          </p>
          <div className="flex flex-col items-start gap-2 tablet:items-start">
            {/* <p className="font-semibold text-center text-gray-700 tablet:text-left dark:text-gray-400">
              {postData.frontMatter.author}
            </p> */}
            <p className="text-xs text-left text-gray-400 mobileL:text-sm tablet:text-left dark:text-gray-400">
              - {postData.frontMatter.date}
            </p>
          </div>
        </div>
        {/* <button
          onClick={() => router.push(`/blogs/${postData.slug}`)}
          className="flex items-center gap-1 px-4 py-2 font-semibold text-white transition-colors bg-black rounded-full hover:bg-Red dark:hover:bg-Red dark:hover:text-white dark:text-black1 dark:bg-white"
        >
          Read Article <AiOutlineRight className="font-bold" />
        </button> */}
      </div>
      <button
        onClick={() => router.push(`/blogs/${postData.slug}`)}
        className="absolute bottom-0 right-0 flex items-center gap-1 px-2 py-1 text-sm font-semibold transition-colors bg-white mobileL:text-base mobileL:py-2 mobileL:px-4 group-hover:bg-Red group-hover:text-white text-black1"
      >
        Read Article <AiOutlineRight className="font-bold" />
      </button>
    </div>
  );
};

export default RecentPosts;
