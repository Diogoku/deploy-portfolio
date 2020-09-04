import React, { useEffect } from "react";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// MOTION
import { motion } from "framer-motion";

// CSS
import "../../css/aboutMeSection.css";

// IMAGE
import BackgroundImage from "../../images/backgroundAboutMe.jpg";
import JSLogo from "../../images/js_logo.PNG";
import NodeLogo from "../../images/node_logo.PNG";
import ReactLogo from "../../images/react_logo.PNG";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="about-me-section" className="about-me-section">
      <img src={BackgroundImage} className="background-image"></img>
      <div className="about-me-section-body">
        <p className="section-tittle about-me-tittle" data-aos="fade-left">
          About Me
        </p>
        <div
          className="focused-areas"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="motivation-container">
            <div className="motivation-container-extension">
              <p className="motivation-tittle">Motivated To Produce Results</p>
              <p className="motivation-text">
                As a self-taught programmer, I use continuos iterations to
                produce results quickly and continuously improve products If you
                want to know more about me, check my{" "}
                <a
                  href="https://europa.eu/!gj47Xp"
                  target="_blank"
                  className="curriculum-link"
                >
                  curriculum
                </a>
              </p>
            </div>
            <div className="motivation-container-extension">
              <p className="motivation-tittle">Focus</p>
              <p className="motivation-text">
                I focused more on Frontend development, but I have experience in
                Fullstack development
              </p>
            </div>
          </div>
          <div className="logo-container">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={JSLogo}
              alt="Javascript Logo"
              className="logo-languages"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={NodeLogo}
              alt="Node Logo"
              className="logo-languages"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={ReactLogo}
              alt="React Logo"
              className="logo-languages"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
