import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";

const PostDetails = ({ blogDetails }) => {
  const { Title, Description, Slug, Content, author, createdAt, CoverImage } =
    blogDetails;

  // const BlogImage = (props) => {
  //   return <img {...props} style={{ maxWidth: 275 }} />;
  // };
  const renderers = {
    p: (paragraph) => {
      const { node } = paragraph;
      // console.log(paragraph.node);

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, "");
        const isPriority = image.properties.alt
          ?.toLowerCase()
          .includes("{priority}");
        const metaWidth = image.properties.alt.match(/{([^}]+)x/);
        const metaHeight = image.properties.alt.match(/x([^}]+)}/);
        return (
          <div className="w-full my-2 ">
            {/* <div className=" w-[280px] my-2 h-auto mobileL:max-w-[500px]"> */}
            <img
              src={image.properties.src}
              // width="300"
              // height="300"
              className="object-cover w-full h-full shadow-lg"
              // className="object-cover  max-w-[280px] h-auto mobileL:w-[500px]"
              alt={alt}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        // <div className="w-full tablet:max-w-2xl mobileL:w-400px ">
        //   {/* <div className="flex justify-between p-2 mt-2 bg-green-700 rounded-t-lg">
        //     <p>Copy </p>
        //     <p>Dark</p>
        //   </div> */}
        //   <SyntaxHighlighter
        //     className="p-2 overflow-x-scroll whitespace-pre-wrap rounded-sm tablet:max-w-2xl"
        //     children={String(children).replace(/\n$/, "")}
        //     style={dracula}
        //     language={match[1]}
        //     PreTag="div"
        //     {...props}
        //   />
        // </div>
        <Highlight
          {...defaultProps}
          code={String(children)}
          language={match[1]}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            // <pre
            //   className={`${className}  whitespace-pre-wrap overflow-scroll break-all p-2 `}
            //   style={style}
            // >
            <pre
              className={`w-full my-[1em] p-[0.5em] text-left whitespace-pre-wrap break-all`}
              style={style}
            >
              {tokens.map((line, i) => (
                // <div className="flex overflow-scroll">
                // <p className="inline-block text-right min-w-[15px] whitespace-nowrap mr-[12px] opacity-50">
                //   {i + 1}
                // </p>
                <div className="table-row " {...getLineProps({ line, key: i })}>
                  <p className="whitespace-nowrap text-right pr-[1em] select-none table-cell opacity-50 text-sm">
                    {i + 1}
                  </p>
                  <div className="table-cell text-sm">
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                  {/* </div> */}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      ) : (
        <>
          <code
            className={`${className} bg-gray-700 text-white px-2 rounded-sm`}
            {...props}
          >
            {children}
          </code>
        </>
      );
    },
  };

  return (
    <div className="flex flex-col items-center justify-between object-contain w-full max-w-3xl gap-6 shadow-md bg-gray-200/30 dark:bg-gray-900/30 rounded-2xl">
      {/* <div className="flex justify-start w-full ">
        <p className="text-sm btn bg-Red hover:underline">#Productivity</p>
      </div> */}

      <img
        className="object-cover w-full shadow-lg h-80 "
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${CoverImage.data?.attributes?.formats.large?.url}`}
        // layout="fill"
        alt={CoverImage.data?.attributes?.alternativeText}
      />
      <div className="flex flex-col items-start gap-6 px-0 pt-6 mobileL:max-w-4xl tablet:px-8">
        <div className="flex flex-col w-full gap-4 ">
          <div className="flex flex-col mb-10">
            <h1 className="text-4xl font-bold text-left max-w-[80%] my-8">
              {Title}
            </h1>
            <div className="w-40 h-2 bg-Red"></div>
          </div>
          <div className="flex items-center justify-between w-full p-3 bg-Red">
            <p className="flex items-center gap-4 font-semibold">
              <FaShareAlt /> Share This Article
            </p>
            <div className="flex gap-4 font-semibold">
              <BsTwitter />
              <BsLinkedin />
              <BsWhatsapp />
              <BsFacebook />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-left text-gray-700 dark:text-gray-400">
            <span className="font-semibold text-black dark:text-white">
              {Description}
            </span>
          </p>
        </div>
        <div className="flex flex-col object-contain w-full max-w-4xl gap-6 px-2 whitespace-pre-wrap wrap">
          <ReactMarkdown
            children={Content}
            remarkPlugins={[remarkGfm, remarkBreaks]}
            components={renderers}
          />
        </div>

        <div className="flex flex-col items-center w-full gap-8 px-24 py-10 my-4 my-6 text-center bg-Red">
          <p className="text-xl font-bold">
            Get the latest articles from OurWeb in your inbox.
          </p>
          <div className="flex w-full">
            <input
              type="text"
              className="w-full px-4 py-3 text-sm font-semibold dark:text-black placeholder:text-sm "
              placeholder="Type your email here ..."
            />
            <button className="px-2 text-sm font-semibold uppercase bg-black whitespace-nowrap">
              Send me Knowledge !
            </button>
          </div>
          <p className="text-sm text-white/70">
            No spam. Just new tutorials, course announcements, and updates from
            OurWeb.
          </p>
        </div>

        <div className="flex flex-col w-full gap-4 my-4">
          <div className="flex items-center justify-between w-full p-3 bg-Red">
            <p className="flex items-center gap-4 font-semibold">
              <FaShareAlt /> Share This Article
            </p>
            <div className="flex gap-4 font-semibold">
              <BsTwitter />
              <BsLinkedin />
              <BsWhatsapp />
              <BsFacebook />
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <div className="w-40 h-2 bg-Red"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
