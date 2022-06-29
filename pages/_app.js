import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { pageview, event } from "../Services/googleAnalytics";
// import pageVie from "../Services/googleAnalytics"
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="relative" id="appId">
      {/* <div className="flex flex-col items-center w-screen ">
       */}
      {/* <div className="overflow-x-hidden"> */}
      <Navbar />
      <Component {...pageProps} />
      {/* </div>
       */}
      {/* </div> */}
    </div>
  );
}

export default MyApp;
