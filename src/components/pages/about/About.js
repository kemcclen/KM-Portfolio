import React from "react";
import "../about/about.css";
import { motion } from "framer-motion";
import butterfly2 from "../../assets/blue-butterfly.gif";
import selfie from "../../assets/dovPhoto.png";

export default function About() {
  return (
    <section>
      <div className="aboutInfo">
        {/* Intro words  */}
        <motion.h1
          animate={{
            translateY: -40,
            transition: { duration: 0.5 },
          }}
          style={{
            fontSize: "48px",
          }}
        >
          NICE TO MEET YOU{" "}
        </motion.h1>

        <motion.h2
          animate={{
            translateY: -30,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          style={{
            marginTop: "20px",
          }}
        >
          Let's build something beautiful together
        </motion.h2>

        <motion.p
          animate={{
            translateY: -20,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          style={{
            marginTop: "20px",
          }}
        >
          I'm a passionate software engineer with a unique background in special
          education. In a previous life, I was a dedicated ballet dancer and
          that artistic spirit has seamlessly merged with my love for
          technology. With a keen eye for aesthetics and an unwavering
          commitment to accessibility, I create digital experiences that not
          only perform flawlessly but also captivate the senses. My mission is
          to leverage technology to empower and uplift, and I'm thrilled to
          collaborate with clients who share a vision for innovation and
          inclusivity.
        </motion.p>
      </div>

      <div className="card">
        {/* butterfly image and functionality for flying */}
        <motion.img
          initial={{
            translateX: "-55%",
            translateY: "-55%",
            rotateY: 0,
          }}
          animate={{
            translateX: "55%",
            translateY: "55%",
            rotateY: 180,
          }}
          transition={{
            ease: "easeIn",
            duration: 3,
          }}
          style={{
            width: "100px",
            height: "auto",
            backgroundColor: "transparent",
          }}
          className="butterfly"
          src={butterfly2}
          alt="butterfly"
        />

        {/* developer photo */}
        <img
          className="selfie"
          src={selfie}
          style={{
            width: "400px",
            height: "auto",
          }}
          alt="selfie"
        />
      </div>
    </section>
  );
}
