import React from "react";
import { useRouter } from "next/router";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
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

const RecentPosts = ({ postData }) => {
  const router = useRouter();

  return (
    // <div className="group flex h-max max-h-[432px] w-full flex-col items-center justify-center  bg-gray-900/10  shadow-sm transition-all  dark:bg-gray-200/10 tablet:flex-row  ">
    //   {/* <div className=" flex min-h-[400px] max-w-4xl flex-col items-start gap-0 tablet:min-h-[344px] tablet:gap-10 tabletM:flex-row ">
    //     <div className="flex flex-col items-start gap-4 px-2 py-2 rounded-r-xl tablet:items-start tabletS:py-6 tabletS:px-6">
    //       <p className="text-left font-display text-2xl font-bold leading-[1.2] tablet:text-left tablet:text-4xl mobileL:leading-snug">
    //         {postData.frontMatter.title}
    //       </p>
    //       <div className="flex flex-col items-start gap-2 tablet:items-start">
    //         <p className="text-xs text-left text-gray-400 dark:text-gray-400 tablet:text-left tabletS:text-sm">
    //           - {postData.frontMatter.date}
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col items-start justify-between gap-5 px-2 py-2 text-xs leading-tight h-max tabletS:py-6 tabletS:px-6 mobileL:text-base mobileL:leading-snug">
    //       <p className="text-black/70 dark:text-white/70">
    //         {postData.frontMatter.description}
    //       </p>
    //       <Link href={`/blogs/${postData.slug}`}>
    //         <a className="no-underline">
    //           <button className="flex items-center gap-1 px-2 py-1 text-sm font-semibold transition-colors bg-white text-black1 group-hover:bg-Red group-hover:text-white tablet:py-2 tablet:px-4 tablet:text-base">
    //             Read Article <AiOutlineRight />
    //           </button>
    //         </a>
    //       </Link>
    //     </div>
    //   </div> */}
    //   <div className="objext-cover h-max max-h-[432px] w-full">
    //     <Image
    //       className="h-full max-h-[300px] w-full max-w-[300px] object-cover align-bottom "
    //       // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
    //       src={demoImg}
    //       // width="420"
    //       // height="160"
    //       // layout="fill"
    //       alt="JsBanner"
    //     />
    //   </div>

    //   <div className="relative flex-col items-start max-w-4xl gap-0 ">
    //     <div className="flex flex-col items-start gap-4 px-2 py-2 rounded-r-xl tablet:items-start tabletS:py-6 tabletS:px-6">
    //       <p className="text-left font-display text-2xl font-bold leading-[1.2] tablet:text-left tablet:text-4xl mobileL:leading-snug">
    //         {postData.frontMatter.title}
    //       </p>
    //       <div className="flex flex-col items-start gap-2 tablet:items-start">
    //         <p className="text-xs text-left text-gray-400 dark:text-gray-400 tablet:text-left tabletS:text-sm">
    //           - {postData.frontMatter.date}
    //         </p>
    //       </div>
    //     </div>
    //     <Link href={`/blogs/${postData.slug}`}>
    //       <a className="no-underline">
    //         <button className="absolute right-0 flex items-center gap-1 px-2 py-1 text-sm font-semibold transition-colors bg-white botom-0 text-black1 group-hover:bg-Red group-hover:text-white tablet:py-2 tablet:px-4 tablet:text-base">
    //           Read Article <AiOutlineRight />
    //         </button>
    //       </a>
    //     </Link>
    //     {/* <div className="flex flex-col items-start justify-between gap-5 px-2 py-2 text-xs leading-tight h-max tabletS:py-6 tabletS:px-6 mobileL:text-base mobileL:leading-snug">
    //       <p className="text-black/70 dark:text-white/70">
    //         {postData.frontMatter.description}
    //       </p>
    //       <Link href={`/blogs/${postData.slug}`}>
    //         <a className="no-underline">
    //           <button className="flex items-center gap-1 px-2 py-1 text-sm font-semibold transition-colors bg-white text-black1 group-hover:bg-Red group-hover:text-white tablet:py-2 tablet:px-4 tablet:text-base">
    //             Read Article <AiOutlineRight />
    //           </button>
    //         </a>
    //       </Link>
    //     </div> */}
    //   </div>
    // </div>
    <div className="group flex h-max w-full flex-col justify-between gap-4 bg-white text-black shadow-sm  transition-all  tablet:max-h-[372px] tablet:flex-row  ">
      <img
        className="h-full max-h-[280px] w-full tablet:max-h-[352px] tablet:max-w-[55%]"
        // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
        src={postData.frontMatter.thumbnailUrl}
        // width="420"
        // height="160"
        // layout="fill"
        alt="JsBanner"
      />

      <div className="flex min-h-[40%] min-w-[40%] flex-col  justify-between tablet:min-h-full">
        <div className="flex flex-col items-start justify-center flex-grow px-4">
          <p className="text-left font-display text-2xl font-bold leading-[1.2] laptop:text-4xl tablet:text-left mobileL:leading-[1.2]">
            {postData.frontMatter.title}
          </p>
          <p className="text-xs text-left text-black/70 tablet:text-left tabletS:text-sm">
            - {postData.frontMatter.date}
          </p>
        </div>
        <div className="w-full">
          <Link href={`/blogs/${postData.slug}`}>
            <a className="float-right no-underline">
              <button className="flex items-center gap-1 px-2 py-1 text-sm font-semibold text-white transition-colors bg-black group-hover:bg-Red group-hover:text-white tablet:py-2 tablet:px-4 tablet:text-base">
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
