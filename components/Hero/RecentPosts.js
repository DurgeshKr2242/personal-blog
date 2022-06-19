import React from "react";
import { useRouter } from "next/router";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
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
    <div className="group relative flex h-max max-h-[432px] w-full flex-col items-center justify-center bg-gray-200/30 shadow-sm transition-all    dark:bg-gray-900/30 tablet:flex-row">
      {/* <div className="flex tablet:flex-row flex-col items-center justify-center w-full tablet:gap-40 gap-10 min-h-[342px] px-10"> */}
      {/* <div className=" flex-1/2  max-h-[432px] relative">
        <Image
          className="h-[130px]  object-fill mobileL:object-fill  mobileL:max-h-[432px] mobileL:h-max w-full "
          // className="max-w-xs w-max mobileL:max-w-md tablet:max-w-lg rounded-3xl"
          src={postData.frontMatter.thumbnailUrl}
          width="1300"
          height="432"
          
          objectFit="cover"
          // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${postData?.attributes?.CoverImage?.data?.attributes?.formats?.large?.url}`}
          alt={postData.frontMatter.title}
        />
      </div> */}

      <div className="top-0 left-0 flex min-h-[400px] max-w-3xl flex-col items-start gap-0 tablet:min-h-[414px] tablet:gap-10 tabletM:flex-row ">
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
          <button
            onClick={() => router.push(`/blogs/${postData.slug}`)}
            className="flex items-center gap-1 px-2 py-1 text-sm font-semibold transition-colors bg-white text-black1 group-hover:bg-Red group-hover:text-white tablet:py-2 tablet:px-4 tablet:text-base"
          >
            Read Article <AiOutlineRight className="font-bold" />
          </button>
        </div>
      </div>
      {/* <button
        onClick={() => router.push(`/blogs/${postData.slug}`)}
        className="absolute bottom-0 right-0 items-center hidden gap-1 px-2 py-1 text-sm font-semibold transition-colors bg-white mobileL:text-base mobileL:py-2 mobileL:px-4 group-hover:bg-Red group-hover:text-white text-black1 tabletM:flex"
      >
        Read Article <AiOutlineRight className="font-bold" />
      </button> */}
    </div>
  );
};

export default RecentPosts;
