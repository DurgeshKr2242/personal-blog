import React, { useState, useEffect } from "react";

import PostDetails from "./PostDetails";
import SingleRelatedPost from "./SingleRelatedPost";
import Comment from "./Comment";
import { AiFillLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import LikeAndComment from "./LikeAndComment";
import RightPane from "./RightPane";

// TODO Complete the like comment and likes feature along with the right pane after the BETA release

const SinglePost = ({ frontMatter, slug, mdxSource }) => {
  // const [likes, setLikes] = useState(blog?.Likes);
  return (
    <div className="flex flex-col gap-4 tablet:flex-row">
      {/* <div className="flex gap-3"> */}
      {/* <LikeAndComment likes={blog.Likes} /> */}
      {/* <div> */}
      <PostDetails
        frontMatter={frontMatter}
        slug={slug}
        mdxSource={mdxSource}
      />
      {/* <Comment /> */}
      {/* </div> */}
      {/* <RightPane /> */}
    </div>
  );
};

export default SinglePost;
