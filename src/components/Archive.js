import React, { useEffect } from "react";

import { IconContext } from "react-icons";
import { Container, Titles, Div1, Div2, Div3 } from "./styles/Archives.styled";
import { FiFolder } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { GoLinkExternal } from "react-icons/go";
import Media__links from "./Medias/Links";

import AOS from "aos";
import "aos/dist/aos.css";

const Archive = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <Container>
      <Titles>
        <h3 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          Note Worthy Projects
        </h3>

        <a
          href="/"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          view the archive
        </a>
      </Titles>

      <Div1>
        <Div2 data-aos="fade-up">
          <Div3>
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a
                href={Media__links.WhatsappNotifier_Github}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a
                href={Media__links.WhatsappNotifier}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </Div3>

          <h1>
            <a
              href={Media__links.WhatsappNotifier}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Reminder App
            </a>
          </h1>
          <p>
            A React app that helps you to set reminders and get the notification
            in their respective time on WhatsApp.
          </p>

          <ul>
            <li>React</li>
            <li>Twilio API</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </ul>
        </Div2>

        <Div2 className="Active" data-aos="fade-up" data-aos-duration="650">
          <Div3>
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a
                href={Media__links.DSA450Tracker_Github}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a
                href={Media__links.DSA450Tracker}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </Div3>

          <h1>
            <a href={Media__links.DSA450Tracker}>DSA 450 Tracker</a>
          </h1>

          <p>
            A web application for tracking the progress of the DSA 450 Important
            Question. Just like a digital library, this application allows users
            to find topic wise questions.
          </p>

          <ul>
            <li>React</li>
            <li>Github</li>
            <li>Local Storage</li>
            <li>Night Mode</li>
          </ul>
        </Div2>

        <Div2 className="Active" data-aos="fade-up" data-aos-duration="750">
          <Div3>
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a
                href={Media__links.AlgoVisualizer_Github}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a
                href={Media__links.AlgoVisualizer}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </Div3>

          <h1>
            <a
              href={Media__links.AlgoVisualizer}
              target="_blank"
              rel="noreferrer"
            >
              Sorting Algorithm Visualizer
            </a>
          </h1>

          <p>
            Using this app you can visualize the sorting algorithms. <br />
            (Merge Sort, Quick Sort, Heap Sort, Bubble Sort etc.. )
          </p>

          <ul>
            <li>React</li>
            <li>Selectors</li>
            <li>Algorithm</li>
            <li>Visualization</li>
          </ul>
        </Div2>

        <Div2 data-aos="fade-up">
          <Div3>
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a
                href={Media__links.TodoNative_Github}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a href={Media__links.TodoNative}>
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </Div3>

          <h1>
            <a href={Media__links.TodoNative}>Todo App React-Native(Expo)</a>
          </h1>

          <p>
            To-do App is a simple to-do app, Where users can add, edit and
            delete tasks in their mobile app.
          </p>

          <ul>
            <li>React-Native</li>
            <li>Expo Cli</li>
            <li>Persist</li>
            <li>IOS | Android</li>
          </ul>
        </Div2>

        <Div2 className="Active" data-aos="fade-up" data-aos-duration="650">
          <Div3>
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a
                href={Media__links.VSCodeExtension_Github}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a
                href={Media__links.VSCodeExtension}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </Div3>

          <h1>
            <a href={Media__links.VSCodeExtension}>VS Code Extension</a>
          </h1>

          <p>
            This extension is a simple extension that can help you to write less
            code in your VS. Code editor. <br /> (Just Use Snippets)
          </p>

          <ul>
            <li>Javscript</li>
            <li>JSON</li>
            <li>VS Code</li>
            <li>Snippets</li>
          </ul>
        </Div2>

        <Div2 className="Active" data-aos="fade-up" data-aos-duration="750">
          <Div3>
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a
                href={Media__links.NetflixClone_Github}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a
                href={Media__links.NetflixClone}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </Div3>

          <h1>
            <a
              href={Media__links.NetflixClone}
              target="_blank"
              rel="noreferrer"
            >
              Netflix Clone
            </a>
          </h1>

          <p>
            Netflix Clone is a web application that makes users feel like they
            are in the actual Netflix website with the same functionality and
            Same user experience.
          </p>

          <ul>
            <li>React</li>
            <li>The Movie Database API</li>
            <li>Firebase</li>
          </ul>
        </Div2>

        <Div2 className="Active" data-aos="fade-up" data-aos-duration="750">
          <Div3>
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a
                href={Media__links.MeenakshiPortfolio_Github}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a
                href={Media__links.MeenakshiPortfolio}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </Div3>

          <h1>
            <a
              href={Media__links.MeenakshiPortfolio}
              target="_blank"
              rel="noreferrer"
            >
              Meenakshi Portfolio
            </a>
          </h1>

          <p>
            This is my first freelance portfolio. I have a lot of fun creating
            it and I plan to add transitions and animations along the line.
          </p>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </Div2>
      </Div1>
    </Container>
  );
};

export default Archive;
