import React from "react";
import { useEffect } from "react";
import Media__links from "./Medias/Links";
import { AboutBlock, Bloger } from "./styles/Blog.styled";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLinkExternal } from "react-icons/bi";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <Bloger id="Blog">
      <AboutBlock>
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          Read My Blog{" "}
          <a href={Media__links.Blog} target="_blank" rel="noreferrer">
            <BiLinkExternal />
          </a>
        </h1>

        <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          Hey there! I'm a blogger, too.
          <br /> <br />
          Thanks for checking out my profile! I write blogs about coding,
          design, and technology and I think you might find them interesting and
          helpful.
          <br /> <br />
          I'm always on the lookout for new and interesting blogs to read, so
          please feel free to add me as a friend or follow me on social media. I
          promise you won't be disappointed!
        </p>
      </AboutBlock>
    </Bloger>
  );
};

export default Blog;
