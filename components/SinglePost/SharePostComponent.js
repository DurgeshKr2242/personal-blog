import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";

import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";

const SharePostComponent = ({ Title, Description, url }) => {
  return (
    <div className="flex items-center justify-between w-full p-3 text-white bg-Red">
      <p className="flex items-center gap-4 font-semibold">
        <FaShareAlt /> Share This Article
      </p>
      <div className="flex gap-4 font-semibold">
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

        <WhatsappShareButton url={url} title={Title} separator=":: ">
          <BsWhatsapp className=" hover:text-green-400" />
        </WhatsappShareButton>

        <FacebookShareButton url={url} quote={Title} hashtag={"#ourweb"}>
          <BsFacebook className="hover:text-blue-400 hover:bg-white hover:rounded-full" />
        </FacebookShareButton>
      </div>
    </div>
  );
};

export default SharePostComponent;
