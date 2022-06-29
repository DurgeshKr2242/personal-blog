import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "v8";
import Fuse from "fuse.js";

// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemote } from "next-mdx-remote";

export const getAllBlogsForMdx = () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  // if (window) {
  //   localStorage.setItem("AllBlogsForOurWeb", posts);
  // }
  posts.sort((x, y) => {
    return new Date(x.frontMatter.date) < new Date(y.frontMatter.date) ? 1 : -1;
  });

  return posts;
};

export const getRecentBlogsForMdx = () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  posts.sort((x, y) => {
    return new Date(x.frontMatter.date) < new Date(y.frontMatter.date) ? 1 : -1;
  });

  return posts;
};

// export const getBlogFromSlugForMdx = async (slug) => {
//   //   console.log(slug);
//   const markdownWithMeta = fs.readFileSync(
//     path.join("posts", slug + ".mdx"),
//     "utf-8"
//   );

//   const { data: frontMatter, content } = matter(markdownWithMeta);
//   const mdxSource = await serialize(content);

//   //   console.log(mdxSource);

//   return [
//     {
//       props: {
//         frontMatter,
//         slug,
//         mdxSource,
//       },
//     },
//   ];
// };

export const getSearchBlogsFormdx = (q) => {
  // const query = QueryString.stringify(
  //   {
  //     fields: ["title", "description", "slug"],
  //   },
  //   {
  //     encodeValuesOnly: true,
  //   }
  // );
  const blogsss = localStorage.getItem("AllBlogsForOurWeb");
  // console.log("LOCALLL", blogsss);
  const searchBlogs = [{ title: "what" }];

  const options = {
    includeScore: true,
    shouldSort: true,
    threshold: 0.5,
    keys: ["title"],
  };

  // const res = await axios.get(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?${query}`
  // );

  const fuse = new Fuse(searchBlogs, options);
  const result = fuse.search(q);
  return result;
};
