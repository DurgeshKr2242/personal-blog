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
      console.log(url);
      pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
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
