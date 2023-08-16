import React from "react";
import "../portfolio/portfolio.css";
import { motion } from "framer-motion";
import starSigns from "../../assets/starSigns.png";
import tastyBytes from "../../assets/tastyBytes.png";
import JATE from "../../assets/JATE.png";
import climavista from "../../assets/climavista.png";
import wds from "../../assets/wdSched.png";
import noteIt from "../../assets/noteIt.png";
import comCore from "../../assets/ComCore.png";
import workFlow from "../../assets/WorkFlow.png";
import twf from "../../assets/TWF.png";
import cadence from "../../assets/Cadence.png";
import booklook from "../../assets/BookLook.png";
import technet from "../../assets/TechNet.png";

import github from "../../assets/github.png";
import link from "../../assets/link.png";

export default function Portfolio() {
  return (
    <div>
      <section className="portfolioContainer">
        <div className="container">
          {/* CARD 1 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 0.5 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img
                src={cadence}
                alt="home page with search bar and playlist length selection"
              />
            </div>
            <div className="workContent">
              <h2>CADENCE</h2>
              <p>AI powered playlist creator</p>
              <a
                href="https://cadence-music-8f49c24828dd.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it website (opens in a new window)"
              >
                <img className="logo" src={link} alt="link logo" />
              </a>
              <a
                href="https://github.com/kemcclen/Cadence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it Github (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 0.8 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img
                src={technet}
                alt="home page with two blogposts titled '1' and '2'"
              />
            </div>
            <div className="workContent">
              <h2>TECH NET</h2>
              <p>MVC Wordpress style blog</p>
              <a
                href="https://technet-0016a9aebc4f.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it website (opens in a new window)"
              >
                <img className="logo" src={link} alt="link logo" />
              </a>
              <a
                href="https://github.com/kemcclen/TechNet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it Github (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>
          {/* CARD 3 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.1 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img
                src={booklook}
                alt="home page with search option for books"
              />
            </div>
            <div className="workContent">
              <h2>BOOK LOOK</h2>
              <p>MERN + React Book search</p>
              <a
                href="https://booklooksearch-2a41b6963e2e.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it website (opens in a new window)"
              >
                <img className="logo" src={link} alt="link logo" />
              </a>
              <a
                href="https://github.com/kemcclen/Book-Look/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it Github (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>
          {/* CARD 4*/}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.5 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img
                src={starSigns}
                alt="website loading page with form for birthdate info"
              />
            </div>
            <div className="workContent">
              <h2>STAR SIGNS </h2>
              <p>Where astrology, astronomy and tarot meet</p>
              <a
                href=" https://kemcclen.github.io/StarSigns/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Star Signs website (opens in a new window)"
              >
                <img className="logo" src={link} alt="link logo" />
              </a>
              <a
                href="https://github.com/kemcclen/StarSigns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Star Signs GitHub (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>
          {/* CARD 5 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.5 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img src={tastyBytes} alt="loading page for cooking website" />
            </div>
            <div className="workContent">
              <h2>TASTY BYTES</h2>
              <p>Full stack recipe sharing platform</p>
              <a
                href="https://tastybyts-1e5618d2a801.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Tasty Bytes website (opens in a new window)"
              >
                <img className="logo" src={link} alt="link logo" />
              </a>
              <a
                href="https://github.com/kemcclen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Tasty Bytes Github (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>

          {/* CARD 6 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.5 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img src={JATE} alt="text editor loading page with nav bar" />
            </div>
            <div className="workContent">
              <h2>JATE</h2>
              <p>Progressive Web Application Text Editor</p>
              <a
                href="https://jate-the-great-54ad32f67b8f.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the JATE website (opens in a new window)"
              >
                <img className="logo" src={link} alt="link logo" />
              </a>
              <a
                href="https://github.com/kemcclen/JATETextEditor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the JATE GitHub (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>
          {/* CARD 7 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.5 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img
                src={climavista}
                alt="search bar, todays weather and 5 day forcast for selected city"
              />
            </div>
            <div className="workContent">
              <h2>CLIMA VISTA </h2>
              <p>Weather dashboard using openweathermap API</p>
              <a
                href="https://kemcclen.github.io/ClimaVista/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Clima Vista website (opens in a new window)"
              >
                <img className="logo" src={link} alt="link logo" />
              </a>
              <a
                href="https://github.com/kemcclen/ClimaVista"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Clima Vista GitHub (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>

          {/* CARD 8 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.5 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img
                src={wds}
                alt="app title, date and colour coded day hours indicating past, present and future"
              />
            </div>
            <div className="workContent">
              <h2>WORK DAY SCHEDULER</h2>
              <p>Keep track of your tasks</p>
              <a
                href="https://kemcclen.github.io/Work-Day-Scheduler/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Word day scheduler website (opens in a new window)"
              >
                <img className="logo" src={link} alt="link logo" />
              </a>
              <a
                href="https://github.com/kemcclen/Work-Day-Scheduler"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the work day scheduler GitHub (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>

          {/* CARD 9 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.5 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img
                src={noteIt}
                alt="home page with get started button and note list section"
              />
            </div>
            <div className="workContent">
              <h2>NOTE IT</h2>
              <p>Save and retrieve note data from a JSON file</p>
              <a
                href="https://note-it-kemcclen.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it website (opens in a new window)"
              >
                <img className="logo" src={link} alt="link logo" />
              </a>
              <a
                href="https://github.com/kemcclen/Note-It"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it Github (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>

          {/* CARD 10 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.5 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img
                src={twf}
                alt="user data with empty friends and thought fields"
              />
            </div>
            <div className="workContent">
              <h2>TWF</h2>
              <p>Back end of an API for a Social Network App</p>
              <a
                href="https://github.com/kemcclen/ThoughtsWithFriends"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it Github (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>
          {/* CARD 11 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.5 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img src={comCore} alt="data for shirts" />
            </div>
            <div className="workContent">
              <h2>ComCore</h2>
              <p>Back end of an e-commerce database</p>
              <a
                href="https://github.com/kemcclen/ComCore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it Github (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>
          {/* CARD 12 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.5 },
            }}
            className="workCard"
          >
            <div className="imgBox">
              <img
                src={workFlow}
                alt="employee info including name, role and salary"
              />
            </div>
            <div className="workContent">
              <h2>Work Flow</h2>
              <p>Back end of a company database manager</p>
              <a
                href="https://github.com/kemcclen/WorkFlow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the note it Github (opens in a new window)"
              >
                <img className="logo" src={github} alt="github logo" />
              </a>
            </div>
          </motion.div>
          {/* END OF CARD SECTION */}
        </div>
      </section>
    </div>
  );
}
