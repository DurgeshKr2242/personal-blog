import React from "react";
import { useRouter } from "next/router";
import { AiOutlineRight } from "react-icons/ai";

const RecentPosts = ({ postData }) => {
  console.log(postData);
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
              - {postData?.attributes.createdAt}
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
