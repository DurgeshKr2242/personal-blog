import React from "react";
import { useRouter } from "next/router";

const SearchResult = ({ foundBlogs }) => {
  const router = useRouter();

  return (
    <ul className="absolute flex flex-col w-full max-h-[600px] overflow-auto text-sm rounded-b-lg shadow-lg bg-white1/100    dark:bg-black1">
      {foundBlogs.map((item, i) => {
        return (
          <li
            key={i}
            onClick={() => router.replace(`/blogs/${item.item.slug}`)}
            className="border-b-[1px] border-gray-300 px-2 py-2 dark:border-gray-800 pb-2 cursor-pointer dark:hover:bg-black/20 hover:bg-gray-200"
          >
            {item.item.frontMatter.title}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResult;
