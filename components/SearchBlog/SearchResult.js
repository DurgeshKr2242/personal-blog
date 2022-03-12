import React from "react";
import { useRouter } from "next/router";

const SearchResult = ({ foundBlogs }) => {
  const router = useRouter();

  // 1. This situation should never have existed
  // 2. I sound so stupid bro. 2 saal baad you send a hello and after 2 hours you said your side of storiey and then I am deciding weather to choose you or my friends.
  // 3. it doesnt work like this. you cant just approach a guy after 2 years and tell him about your feelings and expect him to tell his decission right then and there.

  return (
    <ul className="absolute flex flex-col w-full gap-3 px-2 pt-4 max-h-[600px] overflow-auto text-sm rounded-b-lg shadow-lg bg-white1/100 ">
      {foundBlogs.map((item, i) => {
        return (
          <li
            key={i}
            onClick={() =>
              router.replace(`/blogs/${item.item.attributes.Slug}`)
            }
            className="border-b-[1px] pb-2"
          >
            {item.item.attributes.Title}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResult;
