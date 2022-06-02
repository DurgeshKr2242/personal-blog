import React from "react";
import SinglePost from "../../components/SinglePost/SinglePost";
import Seo from "../../components/SEO/Seo";
import Head from "next/head";
import { getAllBlogs, getBlogBySlug } from "../../Services/api";

const ShowPost = ({ blog }) => {
  console.log("POSTS ARE : ---> ", blog);
  return (
    <div className=" flex flex-col items-center w-full bg-gradient-to-r from-white1 to-white2 dark:text-white dark:from-[#000000] dark:to-[#130F40]">
      <Seo
        title={blog[0]?.attributes.Title}
        description={blog[0]?.attributes.Description}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${blog[0]?.attributes.Slug}`}
        shareImage={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog[0]?.attributes.CoverImage.data?.attributes?.formats.large?.url}`}
        keywords={blog[0]?.attributes.keywords}
      />
      {/* shareImage keywords */}
      <div className="flex flex-col items-center max-w-[1440px] px-0 mobileL:px-5 w-full pt-10 mb-10">
        <SinglePost blog={blog[0]?.attributes} />
      </div>
    </div>
  );
};

export default ShowPost;

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);

  console.log(blog);
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
