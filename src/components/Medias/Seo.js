import React from "react";
import { Helmet } from "react-helmet";
import banner from "./Banner/banner.png";

const Seo = () => {
  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Shrikant Dewangan</title>
        <meta name="title" content="Shrikant Dewangan" />
        <meta
          name="description"
          content="A Web UI Front-End Developer.
                    I help companies and organizations build modern, resilient, and inclusive Web user interfaces with a strong focus on responsive design, performance, and accessibility."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://programmershri.web.app/" />
        <meta property="og:title" content="Shrikant Dewangan" />
        <meta
          property="og:description"
          content="As a Full Stack Software Engineer, my expertise lies in assisting companies and organizations in developing contemporary, robust, and inclusive web user interfaces. I prioritize responsive design, performance optimization, and accessibility to ensure a seamless user experience."
        />
        <meta property="og:image" content={banner} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://twitter.com/programmershri"
        />
        <meta property="twitter:title" content="Shrikant Dewangan" />
        <meta
          property="twitter:description"
          content="As a Full Stack Software Engineer, my expertise lies in assisting companies and organizations in developing contemporary, robust, and inclusive web user interfaces. I prioritize responsive design, performance optimization, and accessibility to ensure a seamless user experience."
        />
        <meta property="twitter:image" content={banner} />
      </Helmet>
    </>
  );
};

export default Seo;
