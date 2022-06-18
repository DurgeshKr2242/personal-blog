import React from "react";
import SingleCard from "../Single Card/SingleCard";
import SinglePost from "./SinglePost";

const RelatedPosts = ({ relatedPost }) => {
  return (
    <section className="px-0 pt-6 pb-8 mt-6 shadow-md mobileL:max-w-3xl tablet:px-8 bg-gray-200/30 dark:bg-gray-900/30 ">
      <header className="px-2 mb-4 text-2xl font-bold">
        Check These Posts as well
      </header>
      {/* <div className="flex-col items-start w-full">
        <textarea
          className="w-full rounded-lg bg-gray-400/30 dark:bg-gray-600/30"
          name="comment Section"
          id="commentSec"
        ></textarea>
        <button className="py-1 rounded-md btn">Post</button>
      </div> */}

      <div className="flex flex-wrap justify-center w-full gap-3 mt-5 tablet:justify-start">
        {relatedPost?.map((post, i) => {
          return (
            <SingleCard
              key={i}
              title={post.frontMatter.title}
              name={post.frontMatter.author}
              date={post.frontMatter.date}
              // description=" We will see how to implementing firebase storage in a react web app, but the concept is the same in any technology, including vanilla javascript, Vue.Js, AngularJs, our good old jQuery, and others."
              slug={post.slug}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedPosts;
