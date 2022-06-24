import React from "react";
import Head from "next/head";
const Seo = (props) => {
  const {
    title,
    description,
    // url,
    shareImage,
    keywords,
    author,
    tag,
    date,
    canonicalUrl,
    ogUrl,
  } = props;

  // TODO: url is not behaving as expected. For indexjs and slug[] the cannonical and ogurl is diff;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} key="description" />
      <meta
        name="keywords"
        content={keywords?.map((keyword) => `${keyword}`)}
      />
      <meta name="author" content={author} />

      {/* OpenGraph */}
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Our Web" />
      <meta property="og:url" content={ogUrl} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      {/* <meta property="og:image" content={shareImage} key="og:image" /> */}
      {/* <meta property="og:image:alt" content={title} /> */}

      {/* Article */}
      <meta property="article:published_time" content={new Date(date)} />
      <meta
        property="article:author"
        content="https://www.linkedin.com/in/durgesh-kr/"
      />
      <meta property="article:section" content={tag && tag[0]} />
      {keywords?.map((keyword, i) => {
        return <meta key={i} property="article:tag" content={keyword} />;
      })}

      {/* TWITTER */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta name="twitter:image" content={shareImage} /> */}
      {/* <meta name="twitter:image:alt" content={title} /> */}
    </Head>
  );
};
export default Seo;
