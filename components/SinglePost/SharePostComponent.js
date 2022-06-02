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
          <BsTwitter />
        </TwitterShareButton>

        <LinkedinShareButton
          title={Title}
          summary={Description}
          source="OurWeb"
          url={url}
        >
          <BsLinkedin />
        </LinkedinShareButton>

        <WhatsappShareButton url={url} title={Title} separator=":: ">
          <BsWhatsapp />
        </WhatsappShareButton>

        <FacebookShareButton url={url} quote={Title} hashtag={"#ourweb"}>
          <BsFacebook />
        </FacebookShareButton>
      </div>
    </div>
  );
};

export default SharePostComponent;
