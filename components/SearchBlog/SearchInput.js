import React, { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import Fuse from "fuse.js";

import SearchResult from "./SearchResult";

import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// import { getSearchBlogsFormdx } from "../../Services/mdx-api";
const SearchInput = () => {
  const [foundBlogs, setFoundBlogs] = useState([]);

  const cancelHandler = () => {
    if (foundBlogs) {
      setFoundBlogs([]);
    }
  };

  const searchBlogs = (query) => {
    if (!query) return setFoundBlogs([]);

    const searchBlogs = JSON.parse(localStorage.getItem("AllBlogsForOurWeb"));
    console.log("LOCALLL", searchBlogs);

    const options = {
      includeScore: true,
      shouldSort: true,
      threshold: 0.5,
      keys: ["frontMatter.title"],
    };
    const fuse = new Fuse(searchBlogs, options);
    const result = fuse.search(query);
    setFoundBlogs(result);
    // console.log(result);
  };

  return (
    <div className="relative">
      <DebounceInput
        className=" border-b-2 outline-none bg-transparent border-black/70 dark:border-white/70 py-2 pr-[70px] pl-2 text-lg placeholder:text-lg placeholder:tracking-widest dark:placeholder:text-gray-300/30 placeholder:text-gray-800/50"
        placeholder="search here..."
        minLength={1}
        debounceTimeout={500}
        onChange={(e) => searchBlogs(e.target.value)}
      />

      <button
        onClick={cancelHandler}
        className="absolute right-0 px-5 py-2 text-lg font-semibold text-white bg-black dark:bg-white dark:text-black top-1 rounded-xl"
      >
        {foundBlogs.length > 0 ? <ImCross /> : <FaSearch />}
      </button>
      {foundBlogs.length > 0 && <SearchResult foundBlogs={foundBlogs} />}
    </div>
  );
};

export default SearchInput;
