import React from "react";
import "./styles/footer.css";
import github from "./assets/github.png";
import linkedIn from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";
import konan from "./assets/konan.png";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://kristenavery.pixieset.com/zappa/?pid=6119444776&id=13&h=MzQzODYwODQ3MA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit photos of my furry companion (opens in a new window)"
      >
        <img className="konan" src={konan} alt="cutest dog ever" />
      </a>
      <div className="socials">
        <a
          href="https://github.com/kemcclen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Github (opens in a new window)"
        >
          <img className="logo" src={github} alt="github logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/katharine-m-144b33271/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my linked in (opens in a new window)"
        >
          <img className="logo" src={linkedIn} alt="linkedin logo" />
        </a>
        <a
          href="https://www.instagram.com/bigdogkonan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my instagram (opens in a new window)"
        >
          <img className="logo" src={instagram} alt="instagram logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
