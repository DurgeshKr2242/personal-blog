import React from "react";
import theme from "prism-react-renderer/themes/nightOwl";
import { useRouter } from "next/router";
import SharePostComponent from "./SharePostComponent";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

const PostDetails = ({ frontMatter, slug, mdxSource }) => {
  const components = {
    pre: (props) => (
      <pre
        // className={`w-full my-[1em] p-[0.5em] text-left overflow-scroll max-w-sm relative`} //For scroll
        className={`w-full my-[1em]  text-left whitespace-pre-wrap break-all relative text-base`} //For wrap
      >
        {props.children}
      </pre>
    ),
  };

  const router = useRouter();
  console.log(frontMatter.toc);

  // TODO : In header tag: Title, date, Toc, description,

  return (
    <article className="flex flex-col items-center justify-between object-contain w-full max-w-3xl gap-6 shadow-md bg-gray-200/30 dark:bg-gray-900/30 ">
      {/* <div className="flex justify-start w-full ">
        <p className="text-sm btn bg-Red hover:underline">#Productivity</p>
      </div> */}

      <header>
        <img
          className="object-cover w-full shadow-lg h-80 "
          src={frontMatter.thumbnailUrl}
          // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${CoverImage.data?.attributes?.formats.large?.url}`}
          // layout="fill"
          // alt={CoverImage.data?.attributes?.alternativeText}
        />
        <div className="flex flex-col items-start gap-6 px-2 pt-6 mobileL:max-w-3xl tablet:px-8">
          <div className="flex flex-col w-full gap-4 ">
            <div className="flex flex-col mb-10">
              <h1 className="text-4xl font-bold text-left max-w-[80%] mb-8">
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
            <div className="w-14 h-1.5 bg-Red/80"></div>
            <p className="text-left text-black dark:text-white">
              {/* <span className="font-semibold text-black dark:text-white"> */}
              {frontMatter.description}
              {/* </span> */}
            </p>
          </div>

          {frontMatter.toc && (
            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Table Of Content </h2>
              <div className="w-14 h-1.5 bg-Red/80"></div>
              <p className="text-left text-black dark:text-white">
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
                          <a>{item.listitem}</a>
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
                                      <a> {subitem.listitem}</a>
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
              </p>
            </div>
          )}
        </div>
      </header>
      <div className="flex flex-col items-start gap-6 px-0 pt-6 mobileL:max-w-3xl tablet:px-8">
        <SharePostComponent
          Title={frontMatter.title}
          Description={frontMatter.description}
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`}
        />
        <div className="flex flex-col object-contain w-full max-w-3xl gap-5 px-2 text-black whitespace-pre-wrap wrap customOverflowCode dark:text-white">
          <MDXRemote {...mdxSource} components={components} />
        </div>

        <div className="flex flex-col items-center w-full gap-8 px-8 py-10 my-6 text-center tablet:px-24 bg-Red">
          <p className="text-xl font-bold">
            Get the latest articles from OurWeb in your inbox.
          </p>
          <div className="flex flex-col w-full mobileL:flex-row">
            <input
              type="text"
              className="w-full px-4 py-3 text-sm font-semibold dark:text-black placeholder:text-sm "
              placeholder="Type your email here ..."
            />
            <button className="px-2 py-3 text-sm font-semibold text-white uppercase bg-black whites pace-nowrap">
              Send me Knowledge !
            </button>
          </div>
          <p className="text-sm text-white/70">
            No spam. Just new tutorials, course announcements, and updates from
            OurWeb.
          </p>
        </div>

        <div className="flex flex-col w-full gap-4 my-4">
          <SharePostComponent
            Title={frontMatter.title}
            Description={frontMatter.description}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}${slug}`}
          />
        </div>
      </div>
    </article>
  );
};

export default PostDetails;
