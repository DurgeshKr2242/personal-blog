import React from "react";
import theme from "prism-react-renderer/themes/nightOwl";
import SharePostComponent from "./SharePostComponent";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

import SubscribeMailChimp from "./SubscribeMailChimp";

const PostDetails = ({ frontMatter, slug, mdxSource }) => {
  const components = {
    code: (props) =>
      props.className ? (
        <code className={`${props.className} text-base`}>{props.children}</code>
      ) : (
        <code className="rounded-sm bg-[#282C34] px-2 py-0.5 text-white ">
          {props.children}
        </code>
      ),
    pre: (props) => {
      {
        // console.log(props);
      }
      return (
        <pre
          // className={`w-full my-[1em] p-[0.5em] text-left overflow-scroll max-w-sm relative`} //For scroll
          className={`relative my-[1em]  w-full whitespace-pre-wrap break-all text-left text-base font-normal not-italic`} //For wrap
        >
          {props.children}
        </pre>
      );
    },

    // ol: (props) => {
    //   console.log(props);
    //   return (
    //     {props.children.map((listItem, i) =>{
    //         i%2 ==1 && (
    //           return(

    //           )
    //         )
    //     })}
    //   )
    // },

    h2: (props) => (
      <div className="flex items-center gap-2 mt-8">
        <h2 id={props.id}>{props.children.props.children}</h2>
        <a
          className="text-black no-underline decoration hover:text-Red/70 dark:text-white"
          href={`#${props.id}`}
        >
          <AiOutlineLink className="text-2xl" />
        </a>
      </div>
    ),
    h3: (props) => (
      <div className="flex items-center gap-2">
        <h3 id={props.id}>{props.children.props.children}</h3>
        <a
          className="text-black no-underline decoration hover:text-Red/70 dark:text-white"
          href={`#${props.id}`}
        >
          <AiOutlineLink className="text-xl" />
        </a>
      </div>
    ),
    h4: (props) => <h4>{props.children.props.children}</h4>,
    // code: (props) => <code className="bg-[#282C34]">{props.children}</code>,
  };

  return (
    <article className="flex flex-col items-center justify-between object-contain w-full max-w-3xl gap-6 shadow-md bg-gray-200/30 dark:bg-gray-900/30 ">
      {/* <div className="flex justify-start w-full ">
        <p className="text-sm btn bg-Red hover:underline">#Productivity</p>
      </div> */}

      <header className="w-full max-w-3xl">
        {/* <img
          className="object-cover w-full shadow-lg h-80 "
          src={frontMatter.thumbnailUrl}
          // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${CoverImage.data?.attributes?.formats.large?.url}`}
          // layout="fill"
          // alt={CoverImage.data?.attributes?.alternativeText}
        /> */}
        {/* <div className="h-max  object-fill mobileL:object-fill  mobileL:max-h-[432px] mobileL:h-max  relative">
          <Image
            className=""
            // className="max-w-xs w-max mobileL:max-w-md tablet:max-w-lg rounded-3xl"
            src={frontMatter.thumbnailUrl}
            // layout="fill"
            // width="1400"
            // height="583"
            width="960"
            height="383"
            // width="100%"
            // height="100%"
            // layout="fill"
            objectFit="cover"
            // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${postData?.attributes?.CoverImage?.data?.attributes?.formats?.large?.url}`}
            alt={frontMatter.title}
          />
        </div> */}
        <div className="flex flex-col items-start gap-6 px-2 pt-6 tablet:px-8 mobileL:max-w-3xl">
          <div className="flex flex-col w-full gap-4 ">
            <div className="flex flex-col mb-10">
              <h1 className="mb-8 max-w-[80%] text-left text-4xl font-bold laptop:mt-6">
                {frontMatter.title}
              </h1>
              <div className="w-40 h-2 bg-Red"></div>
            </div>
            <p className="text-italic text-black/70 dark:text-white/70">
              - {frontMatter.date}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Long Story Short </h2>
            <div className="h-1.5 w-14 bg-Red/80"></div>
            <p className="text-left text-black dark:text-white">
              {/* <span className="font-semibold text-black dark:text-white"> */}
              {frontMatter.description}
              {/* </span> */}
            </p>
          </div>

          {frontMatter.toc && (
            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Table Of Content </h2>
              <div className="h-1.5 w-14 bg-Red/80"></div>
              <div className="text-left text-black dark:text-white">
                <ol>
                  {frontMatter.toc.map((item, i) => {
                    return (
                      <li key={i} className="py-1">
                        <span className="pr-2 opacity-70">{i + 1}. </span>
                        <Link
                          href={`#${i + 1}-${item.listitem
                            .toLowerCase()
                            .split(" ")
                            .join("-")}`}
                        >
                          <a className="text-black decoration decoration-red-400 decoration-solid underline-offset-2 hover:decoration-dashed dark:text-white">
                            {item.listitem}
                          </a>
                        </Link>
                        {item.sublist && (
                          <>
                            <br />
                            <ol className="ml-6">
                              {item.sublist.map((subitem, j) => {
                                return (
                                  <li key={j + 1} className="py-1">
                                    <span className="pr-2 opacity-70">
                                      {i + 1}.{j + 1}{" "}
                                    </span>
                                    <Link
                                      href={`#${i + 1}${
                                        j + 1
                                      }-${subitem.listitem
                                        .toLowerCase()
                                        .split(" ")
                                        .join("-")}`}
                                    >
                                      <a className="text-black decoration decoration-red-400 decoration-solid underline-offset-2 hover:decoration-dashed dark:text-white">
                                        {" "}
                                        {subitem.listitem}
                                      </a>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ol>
                          </>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="flex flex-col items-start gap-6 px-0 pt-6 tablet:px-8 mobileL:max-w-3xl">
        <SharePostComponent
          Title={frontMatter.title}
          Description={frontMatter.description}
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`}
        />
        <div className="flex flex-col object-contain w-full max-w-3xl gap-5 px-2 text-base text-black whitespace-pre-wrap wrap customOverflowCode dark:text-white">
          <MDXRemote
            className="text-base"
            {...mdxSource}
            components={components}
          />
        </div>

        <SubscribeMailChimp />

        <div className="flex flex-col w-full gap-4 my-4">
          <SharePostComponent
            Title={frontMatter.title}
            Description={frontMatter.description}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`}
          />
        </div>
      </div>
    </article>
  );
};

export default PostDetails;
