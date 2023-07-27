import React from "react";
import "../resume/resume.css";
import { motion } from "framer-motion";
import resume from "../resume/KMResume.pdf";
import download from "../../assets/downloading.png";

export default function Resume() {
  return (
    <div className="resumePage">
      {/* title and download button */}
      <h1 className="resumeTitle">
        Resume
        <a className="resumeDownload" href={resume} download>
          <img className="downloadImg" src={download} alt="download logo" />
        </a>
      </h1>

      <motion.body
        className="resumeBody"
        animate={{
          translateY: -40,
          transition: { duration: 0.5 },
        }}
      >
        {/* front end */}
        <div className="frontEnd">
          <h2 className="resumeSubtitle">Front-end Proficiencies</h2>
          <ul classname="resumeList">
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>JavaScript E6+</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>Accessible Design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
          </ul>
        </div>
        {/* back end */}
        <div className="backEnd">
          <h2 className="resumeSubtitle">Back-end Proficiencies</h2>
          <ul classname="resumeList">
            <li>SQL</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
            <li> APIs</li>
            <li>REST</li>
            <li>Node</li>
            <li>Express</li>
          </ul>
        </div>
      </motion.body>
    </div>
  );
}
