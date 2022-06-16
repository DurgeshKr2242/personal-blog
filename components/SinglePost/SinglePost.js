import React, { useState, useEffect } from "react";

import PostDetails from "./PostDetails";
import SingleRelatedPost from "./SingleRelatedPost";
import RelatedPosts from "./RelatedPosts";
import { AiFillLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import LikeAndComment from "./LikeAndComment";
import RightPane from "./RightPane";

// TODO Complete the like comment and likes feature along with the right pane after the BETA release

const SinglePost = ({ frontMatter, slug, mdxSource, relatedPost }) => {
  // const [likes, setLikes] = useState(blog?.Likes);

  return (
    <main className="flex flex-col gap-4 ">
      {/* <div className="flex gap-3"> */}
      {/* <LikeAndComment likes={blog.Likes} /> */}
      {/* <div> */}
      <PostDetails
        frontMatter={frontMatter}
        slug={slug}
        mdxSource={mdxSource}
      />
      {relatedPost.length > 0 && <RelatedPosts relatedPost={relatedPost} />}
      {/* </div> */}
      {/* <RightPane /> */}
    </main>
  );
};

export default SinglePost;
