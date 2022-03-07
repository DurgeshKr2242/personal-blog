import React from "react";
import { useRouter } from "next/router";
const SearchResult = ({ foundBlogs }) => {
  const router = useRouter();
  return (
    <ul className="absolute flex flex-col w-full gap-3 px-2 pt-4 max-h-[600px] overflow-auto text-sm rounded-b-lg shadow-lg bg-white1/100 ">
      {foundBlogs.map((item) => {
        return (
          <li
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
