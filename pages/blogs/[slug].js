import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import SinglePost from "../../components/SinglePost/SinglePost";
import Seo from "../../components/SEO/Seo";
import Head from "next/head";
// import { getAllBlogs, getBlogBySlug } from "../../Services/api";
import { getAllBlogsForMdx } from "../../Services/mdx-api";
import { useEffect } from "react";
// import { getBlogFromSlugForMdx } from "../../Services/mdx-api";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import "highlight.js/styles/atom-one-dark.css";

const ShowPost = ({ frontMatter, slug, mdxSource, blogs, relatedPost }) => {
  // const ShowPost = ({ blog }) => {
  // console.log("POSTS ARE : ---> ", blog);
  // console.log(frontMatter);
  // console.log(frontMatter.keywords);
  useEffect(() => {
    localStorage.setItem("AllBlogsForOurWeb", JSON.stringify(blogs));
  }, []);
  return (
    <div className=" flex w-full flex-col items-center bg-gradient-to-r from-white1 to-white2 dark:from-[#000000] dark:to-[#130F40] dark:text-white">
      {/* {console.log(new Date(frontMatter.date))} */}
      <Seo
        title={frontMatter.title}
        description={frontMatter.description}
        // url={slug}
        shareImage={frontMatter.thumbnailUrl}
        author={frontMatter.author}
        keywords={frontMatter.keywords}
        tag={frontMatter.tags}
        date={frontMatter.date}
        canonicalUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`}
        ogUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`}
      />
      {/* shareImage keywords */}
      <div className="mb-10 flex w-full max-w-[1440px] flex-col items-center px-0 pt-10 tabletM:px-5">
        <SinglePost
          relatedPost={relatedPost}
          frontMatter={frontMatter}
          slug={slug}
          mdxSource={mdxSource}
        />
      </div>
    </div>
  );
};

export default ShowPost;

export async function getStaticPaths() {
  const blogs = getAllBlogsForMdx();
  // const paths = blogs?.map((blog) => ({
  //   params: { slug: blog.slug },
  // }));

  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: `${blog.slug}`,
        },
      };
    }),
    fallback: false,

    // paths,
    // fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogs = getAllBlogsForMdx();

  const slug = params.slug;
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeCodeTitles,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  const checkBlog = (blog) => {
    return frontMatter.relatedPosts.includes(blog.slug);
  };
  const relatedPost = blogs.filter(checkBlog);

  return {
    props: {
      blogs,
      frontMatter,
      slug,
      mdxSource,
      relatedPost,
    },
  };
}
