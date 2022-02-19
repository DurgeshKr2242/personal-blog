import axios from "axios";
import QueryString from "qs";
const query = QueryString.stringify(
  { populate: "*" },
  { encodeValuesOnly: true },
  { fields: ["authors"] }
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
