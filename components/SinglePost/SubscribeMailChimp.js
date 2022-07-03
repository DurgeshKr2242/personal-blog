import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { event } from "../../Services/googleAnalytics";
const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [localStorageStatus, setLocalStorageStatus] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    const initialStatus = JSON.parse(
      localStorage.getItem("OurWebBlogSubscribeEmail")
    );
    if (initialStatus?.status === "subscribed") {
      setLocalStorageStatus("subscribed");
    }
    if (status === "success") {
      localStorage.setItem(
        "OurWebBlogSubscribeEmail",
        JSON.stringify({
          email,
          status: "subscribed",
        })
      );
      clearFields();
    }
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  return (
    <>
      {localStorageStatus === "subscribed" ? (
        <div className="flex flex-col items-center w-full gap-8 px-6 py-10 my-6 text-center bg-Red tablet:px-20">
          <div className="flex flex-col gap-3 text-xl font-bold">
            <p className="text-xl font-bold text-white">
              Thankyou for subscribing!
            </p>

            <p className="text-sm text-white/90">
              You will be recieving knowledge straight to your inbox.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full gap-8 px-6 py-10 my-6 text-center bg-Red tablet:px-20">
          {status === "success" ? (
            <div className="flex flex-col gap-3 text-xl font-bold">
              {/* <p>Thankyou for Subscribing!</p> */}
              <p className="text-xl font-bold text-white">{message}</p>
              <p className="text-sm text-white/90">
                You will be recieving knowledge straight to your inbox.
              </p>
            </div>
          ) : status == "error" ? (
            <div>
              <p className="text-xl font-bold text-white">
                HEY! Something weny wrong
              </p>
              <p className="text-sm text-white/90">{message}</p>
            </div>
          ) : (
            <p className="text-xl font-bold text-white">
              {" "}
              Get the latest articles from OurWeb in your inbox.
            </p>
          )}

          {status != "success" && (
            <>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col items-center w-full tabletM:flex-row"
              >
                <input
                  type="text"
                  className="flex-1 w-full px-4 py-2 text-sm font-semibold placeholder:text-sm dark:text-black "
                  placeholder="Type your email here ..."
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <button
                  //   onClick={(e) => handleSubmit(e)}
                  type="submit"
                  disabled={status === "sending" ? true : false}
                  className={`flex-1/4 whites pace-nowrap flex min-w-[225.84px]  items-center justify-center gap-2 bg-black px-2 py-2.5 text-xs font-semibold uppercase text-white disabled:bg-black/80`}
                >
                  {status === "sending" ? (
                    <div className="w-4 h-4 bg-transparent border-t-2 border-l-2 border-white rounded-full animate-spin"></div>
                  ) : (
                    "Send me Knowledge !"
                  )}
                </button>
              </form>

              <p className="text-sm text-white/90">
                No spam. Just new tutorials, course announcements, and updates
                from OurWeb.
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};

const SubscribeMailChimp = () => {
  const postUrl = `https://gmail.us10.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => {
            console.log(formData);
            event({
              action: "newsletter_subscribe",
              category: "Newsletter",
              label: formData.EMAIL,
            });
            subscribe(formData);
          }}
        />
      )}
    />
  );
};

export default SubscribeMailChimp;
