import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="tD25sMEwpvvFq8IAct2RlFq-csbxM3qEN-5RmH4_4Po"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Our Web</title>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta
          name="description"
          content="Technical blog website covering topics broadly related to web development."
          key="description"
        />
        <meta
          name="keywords"
          content="web development, web dev, web dev blog, web development blog, technical blog, firebase, next js blog"
        />
        <meta name="author" content="Durgesh Kumar" />

        
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Our Web" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_BASE_URL}
          key="og:url"
        />
        <meta property="og:title" content="Our Web" key="og:title" />


        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        <meta
          name="google-site-verification"
          content="tD25sMEwpvvFq8IAct2RlFq-csbxM3qEN-5RmH4_4Po"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
