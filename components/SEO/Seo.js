import React from "react";
import Head from "next/head";
const Seo = (props) => {
  const { title, description, url, shareImage, keywords } = props;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} />

      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:image" content={shareImage} key="og:image" />
      <link rel="canonical" href={url} />
    </Head>
  );
};
export default Seo;
