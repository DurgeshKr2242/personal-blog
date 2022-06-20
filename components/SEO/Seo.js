import React from "react";
import Head from "next/head";
const Seo = (props) => {
  const {
    title,
    description,
    url,
    shareImage,
    keywords,
    author,
    createdAt,
    tag,
    date,
  } = props;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${url}`}
      />
      <meta name="description" content={description} key="description" />

      <meta
        name="keywords"
        content={keywords?.map((keyword) => `${keyword}`)}
      />
      {/* {keywords.map((keyword, i) => {
        return <meta key={i} name="keywords" content={keyword} />;
      })} */}

      <meta name="author" content={author} />

      {/* OpenGraph */}
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Our Web" />
      <meta property="og:url" content={url} key="og:url" />
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

      {/* <link rel="canonical" href="https://www.nytimes.com/interactive/2019/12/02/nyregion/nyc-subway-map.html">
// <meta name="description" content="The city has changed drastically over the past 40 years, yet the M.T.A. map designed in 1979 has largely endured.">
// <meta name="keywords" content="Subway, Map, Public Transit, Design, MTA, Massimo Vignelli, NYC, US Politics, Impeachment, NATO, London, Food, Poverty, Climate Change, Global Warming">
// <meta name="author" content="Jane Doe">
<meta name="copyright" content="© 2019 Jane Doe">
// <meta property="og:type" content="article">
// <meta property="og:site_name" content="The New York Times">
// <meta property="og:url" content="https://www.nytimes.com/interactive/2019/12/02/nyregion/nyc-subway-map.html">
// <meta property="og:title" content="The New York City Subway Map as You’ve Never Seen It Before">
// <meta property="og:description" content="The city has changed drastically over the past 40 years, yet the M.T.A. map designed in 1979 has largely endured.">
// <meta property="og:image" content="https://static01.nyt.com/images/2019/12/02/autossell/mta-promo-image/mta-crop-facebookJumbo.jpg">
// <meta property="og:image:alt" content="M.T.A. map designed in 1979">  
<meta property="og:image:width" content="1050">
<meta property="og:image:height" content="550">


// <meta property="article:published_time" content="2019-12-02T10:00:00.000Z">
// <meta property="article:modified_time" content="2019-12-03T19:13:00.000Z">
// <meta property="article:author" content="https://www.facebook.com/janedoe">
// <meta property="article:section" content="New York">
// <meta property="article:tag" content="Subway">
// <meta property="article:tag" content="Map">
// <meta property="article:tag" content="Public Transit">
// <meta property="article:tag" content="Design">
// <meta property="article:tag" content="MTA">
// <meta property="article:tag" content="Massimo Vignelli">
// <meta name="twitter:card" content="summary_large_image">
// <meta name="twitter:image" content="https://static01.nyt.com/images/2019/12/02/autossell/mta-promo-image/mta-crop-facebookJumbo.jpg">
// <meta name="twitter:image:alt" content="M.T.A. map designed in 1979">
<meta name="twitter:site" content="@nytimes">
<meta name="twitter:creator" content="@jane">
<meta name="twitter:label1" content="Posted in">
<meta name="twitter:data1" content="New York">
<meta name="twitter:label2" content="Reading time">
<meta name="twitter:data2" content="12 minutes"> */}
    </Head>
  );
};
export default Seo;
