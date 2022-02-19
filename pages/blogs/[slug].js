import React from "react";
import SinglePost from "../../components/SinglePost/SinglePost";

import { getAllBlogs, getBlogBySlug } from "../../Services/api";

const ShowPost = ({ blog }) => {
  // console.log(blog[0].attributes);
  return (
    <div className=" flex flex-col items-center w-full bg-gradient-to-r from-white1 to-white2 dark:text-white dark:from-[#000000] dark:to-[#130F40]">
      <div className="flex flex-col items-center max-w-[1440px] px-5 w-full pt-10 mb-10">
        <SinglePost blog={blog[0]?.attributes} />
      </div>
    </div>
  );
};

export default ShowPost;

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((blog) => ({
    params: { slug: blog.attributes.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
