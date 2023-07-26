import React from "react";
import "../portfolio/portfolio.css";
import { motion } from "framer-motion";
import starSigns from "../../assets/starSigns.png";
import tastyBytes from "../../assets/tastyBytes.png";
import JATE from "../../assets/JATE.png";
import climavista from "../../assets/climavista.png";
import wds from "../../assets/wdSched.png";
import noteIt from "../../assets/noteIt.png";
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

          {/* CARD 2 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 0.8 },
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
                href="https://github.com/kemcclen"
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

          {/* CARD 3 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.1 },
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

          {/* CARD 4 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.4 },
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

          {/* CARD 5 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 1.7 },
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

          {/* CARD 6 */}
          <motion.div
            animate={{
              translateY: -40,
              transition: { duration: 2 },
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
          {/* END OF CARD SECTION */}
        </div>
      </section>
    </div>
  );
}
