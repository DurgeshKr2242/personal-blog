import React from "react";
import theme from "prism-react-renderer/themes/nightOwl";
import { useRouter } from "next/router";
import SharePostComponent from "./SharePostComponent";
import { MDXRemote } from "next-mdx-remote";

const PostDetails = ({ frontMatter, slug, mdxSource }) => {
  const components = {
    pre: (props) => (
      <pre
        // className={`w-full my-[1em] p-[0.5em] text-left overflow-scroll max-w-sm relative`} //For scroll
        className={`w-full my-[1em]  text-left whitespace-pre-wrap break-all relative`} //For wrap
      >
        {props.children}
      </pre>
    ),
  };

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between object-contain w-full max-w-5xl gap-6 shadow-md bg-gray-200/30 dark:bg-gray-900/30 ">
      {/* <div className="flex justify-start w-full ">
        <p className="text-sm btn bg-Red hover:underline">#Productivity</p>
      </div> */}

      <img
        className="object-cover w-full shadow-lg h-80 "
        src={frontMatter.thumbnailUrl}
        // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${CoverImage.data?.attributes?.formats.large?.url}`}
        // layout="fill"
        // alt={CoverImage.data?.attributes?.alternativeText}
      />
      <div className="flex flex-col items-start gap-6 px-2 pt-6 mobileL:max-w-5xl tablet:px-8">
        <div className="flex flex-col w-full gap-4 ">
          <div className="flex flex-col mb-10">
            <h1 className="text-4xl font-bold text-left max-w-[80%] mb-8">
              {frontMatter.title}
            </h1>
            <div className="w-40 h-2 bg-Red"></div>
          </div>
          <SharePostComponent
            Title={frontMatter.title}
            Description={frontMatter.description}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-left text-gray-700 dark:text-gray-400">
            <span className="font-semibold text-black dark:text-white">
              {frontMatter.description}
            </span>
          </p>
        </div>
        <div className="flex flex-col object-contain w-full max-w-5xl gap-5 px-2 whitespace-pre-wrap wrap customOverflowCode">
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
            <button className="px-2 py-3 text-sm font-semibold text-white uppercase bg-black whitespace-nowrap">
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
    </div>
  );
};

export default PostDetails;
