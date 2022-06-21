import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from "react-share";

import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";

const SharePostComponent = ({ Title, Description, url }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-4 p-2 text-white bg-Red mobileL:flex-row">
      <p className="flex items-center gap-4 font-semibold">
        <FaShareAlt /> Share This Article
      </p>
      <div className="flex gap-6 font-semibold">
        <TwitterShareButton
          url={url}
          title={Title}
          via="OurWeb"
          hashtags={["#ourweb"]}
        >
          <BsTwitter className="hover:text-blue-400" />
        </TwitterShareButton>

        <LinkedinShareButton
          title={Title}
          summary={Description}
          source="OurWeb"
          url={url}
        >
          <BsLinkedin className="hover:bg-white hover:text-blue-400" />
        </LinkedinShareButton>

        <RedditShareButton url={url} title={Title}>
          <BsReddit className="text-xl rounded-full hover:bg-white hover:text-red-500" />
        </RedditShareButton>

        <WhatsappShareButton url={url} title={Title} separator=":: ">
          <BsWhatsapp className=" hover:text-green-400" />
        </WhatsappShareButton>

        <FacebookShareButton url={url} quote={Title} hashtag={"#ourweb"}>
          <BsFacebook className="hover:rounded-full hover:bg-white hover:text-blue-400" />
        </FacebookShareButton>
      </div>
    </div>
  );
};

export default SharePostComponent;
