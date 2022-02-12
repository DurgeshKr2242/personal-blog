import React, { useState, useEffect } from "react";
import { getCategories, getSimilarPosts } from "../../Services";
import PostDetails from "./PostDetails";
import SingleRelatedPost from "./SingleRelatedPost";
const SinglePost = ({ slug, categories }) => {
  const [similarPosts, setSimilarPosts] = useState([]);
  const [displayCategories, setDisplayCategories] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      if (slug) {
        const res = await getSimilarPosts(slug, categories);
        setSimilarPosts(res);
      }
    };

    const getPostCategories = async () => {
      const res = await getCategories();
      setDisplayCategories(res);
    };
    getPosts();
    getPostCategories();
  }, [slug]);
  // console.log(displayCategories);

  return (
    <div className="flex gap-4">
      <PostDetails />

      <div className="flex flex-col max-w-[200px] ">
        {/* Realted post section */}

        <div className="flex flex-col gap-0 shadow-md bg-gray-200/30 dark:bg-gray-900/30 rounded-2xl">
          <div className="flex flex-col  gap-3 border-l-8 border-black pt-[1px] pb-3 pl-3 dark:border-white">
            <p className="font-bold">Related Posts</p>
          </div>
          {similarPosts.map((post, i) => {
            return <SingleRelatedPost key={i} />;
          })}
        </div>

        {/* Tags */}

        <div>
          {displayCategories.map((cat, i) => {
            return <p key={i}>{cat.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
