import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { likeHandler } from "../../Services/api";
const LikeAndComment = ({ likes }) => {
  const [totalLikes, setTotalLikes] = useState(likes);

  const likeHandler = async () => {};
  return (
    <div className=" translate-y-[35vh]">
      <div className="sticky top-0 flex flex-col items-center gap-5 ">
        <button className="flex flex-col items-center gap-1">
          <AiFillLike className="text-2xl" />
          <p className="text-sm font-light">{totalLikes || 0}</p>
        </button>

        <div className="flex flex-col items-center gap-1">
          <BiCommentDots className="text-2xl" />
          <p className="text-sm font-light">4</p>
        </div>
      </div>
    </div>
  );
};

export default LikeAndComment;
