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
  const month = new Date(postData?.attributes.createdAt).getMonth();
  const date1 = new Date(postData?.attributes.createdAt).getDate();
  const year = new Date(postData?.attributes.createdAt).getFullYear();
  const router = useRouter();

  return (
    <div className="flex tablet:flex-row flex-col items-center justify-center w-full tablet:gap-40 gap-10 min-h-[342px] px-10">
      <img
        className="max-w-xs mobileL:max-w-md tablet:max-w-lg rounded-3xl"
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${postData?.attributes?.CoverImage.data.attributes.formats.large.url}`}
        alt="CarPic"
      />

      <div className="flex flex-col items-center max-w-2xl gap-10 tablet:items-start ">
        <div className="flex flex-col items-center gap-4 tablet:items-start">
          <div className="flex flex-col items-center gap-2 tablet:items-start">
            <p className="text-center text-gray-700 tablet:text-left dark:text-gray-400">
              <span className="font-semibold text-black dark:text-white">
                Maintainance
              </span>
              {/* - {postData?.attributes.createdAt} */}-{" "}
              {`${MONTHMAP[month]} ${date1}, ${year}`}
            </p>
            <p className="text-sm text-center text-gray-700 tablet:text-left dark:text-gray-400">
              {postData?.attributes.author.data.attributes.username}
            </p>
          </div>

          <p className="text-4xl font-bold text-center tablet:text-left">
            {postData?.attributes.Title}
          </p>
        </div>
        <button
          onClick={() => router.push(`/blogs/${postData?.attributes.Slug}`)}
          className="flex items-center gap-1 px-4 py-2 font-semibold text-white transition-colors bg-black rounded-full hover:bg-Red dark:hover:bg-Red dark:hover:text-white dark:text-black1 dark:bg-white"
        >
          Read Article <AiOutlineRight className="font-bold" />
        </button>
      </div>
    </div>
  );
};

export default RecentPosts;
