import axios from "axios";
import Fuse from "fuse.js";
import QueryString from "qs";

const query = QueryString.stringify(
  { populate: "*" },
  { encodeValuesOnly: true },
  { fields: ["authors", "Seo"] }
);
export const getAllBlogs = async () => {
  const res = await axios.get(`http://localhost:1337/api/blogs?${query}`);
  return res.data.data;
};

export const getBlogBySlug = async (slug) => {
  const res = await axios.get(
    `http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&${query}`
  );
  return res.data.data;
};

export const getRecentBlogs = async () => {
  const res = await axios.get(
    `http://localhost:1337/api/blogs?sort[0]=createdAt:desc&${query}`
  );
  return res.data.data.slice(0, 3);
};

export const likeHandler = async (likes) => {
  const res = await axios.put(`http://localhost:1337/api/blogs/1`, {
    data: {
      likes,
    },
  });
  return res.data.data.slice(0, 3);
};

export const getSearchBlogs = async (q) => {
  const query = QueryString.stringify(
    {
      fields: ["title", "description", "slug"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const options = {
    includeScore: true,
    shouldSort: true,
    threshold: 0.5,
    keys: ["attributes.Title"],
  };

  const res = await axios.get(`http://localhost:1337/api/blogs?${query}`);
  const fuse = new Fuse(res.data.data, options);
  const result = fuse.search(q);
  return result;
};
