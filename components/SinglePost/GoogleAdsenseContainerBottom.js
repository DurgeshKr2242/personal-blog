// import styled from "styled-components";
import { useEffect } from "react";

const GoogleAdsenseContainerBottom = ({ slot }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  // const AdLabel = styled.span`
  //   font-size: 12px;
  // `;

  return (
    <>
      {/* <div style={{ textAlign: "left", overflow: "hidden" }}>
      <AdLabel>Advertisment</AdLabel>
      <ins
        className="adsbygoogle"
        data-ad-format="autorelaxed"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
        data-ad-slot={slot}
        data-full-width-responsive="true"
      ></ins>
    </div> */}

      <section className="px-0 pt-6 pb-8 mt-6 shadow-md bg-gray-200/30 dark:bg-gray-900/30 tablet:px-8 mobileL:max-w-3xl ">
        <header className="px-2 mb-4 text-2xl font-bold">Advertisment</header>

        <div className="flex flex-wrap justify-center w-full gap-3 mt-5 tablet:justify-start">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          {/* <ins
            className="adsbygoogle"
            data-ad-format="autorelaxed"
            style={{ display: "block" }}
            data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
            data-ad-slot={slot}
            data-full-width-responsive="true"
          ></ins> */}
        </div>
      </section>
    </>
  );
};

export default GoogleAdsenseContainerBottom;
