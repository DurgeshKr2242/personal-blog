import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
