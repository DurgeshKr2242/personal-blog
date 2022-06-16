import React from "react";
import SingleCard from "../Single Card/SingleCard";
import SinglePost from "./SinglePost";

const RelatedPosts = ({ relatedPost }) => {
  return (
    <div className="w-full max-w-3xl px-10 py-6 mt-6 shadow-md bg-gray-200/30 dark:bg-gray-900/30 ">
      <p className="mb-4 text-2xl font-bold">Check These Posts as well</p>
      {/* <div className="flex-col items-start w-full">
        <textarea
          className="w-full rounded-lg bg-gray-400/30 dark:bg-gray-600/30"
          name="comment Section"
          id="commentSec"
        ></textarea>
        <button className="py-1 rounded-md btn">Post</button>
      </div> */}

      <div className="flex flex-col gap-3 mt-5">
        {relatedPost?.map((post, i) => {
          return (
            <SingleCard
              key={i}
              title={post.frontMatter.title}
              name={post.frontMatter.author}
              date={post.frontMatter.date}
              // description=" We will see how to implementing firebase storage in a react web app, but the concept is the same in any technology, including vanilla javascript, Vue.Js, AngularJs, our good old jQuery, and others."
              slug={post.slug}
              // image="data:image/png;base64,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"
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPosts;
