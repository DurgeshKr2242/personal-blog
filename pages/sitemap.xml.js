import React, { useEffect } from "react";
import * as fs from "fs";

import { getAllBlogsForMdx } from "../Services/mdx-api";

const Sitemap = () => {
  //   useEffect(() => {
  //     const dynamicPaths = [];
  //     const foo = async () => {
  //       const allBlogs = await getAllBlogs();
  //       console.log(allBlogs);
  //     };
  //     foo();
  //   }, []);

  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "blogs",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  //   const dynamicPaths = [`${BASE_URL}/product/1`, `${BASE_URL}/product/2`];
  const dynamicPaths = [];

  const allBlogs = getAllBlogsForMdx();
  // console.log(allBlogs);

  allBlogs.map((blog) => {
    dynamicPaths.push(`${BASE_URL}/blogs/${blog.slug}`);
  });

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
