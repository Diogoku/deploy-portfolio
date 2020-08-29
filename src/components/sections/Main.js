import React from "react";

// REACT SMOOTH SCROLLBAR
import { Link } from "react-scroll";

// MOTION
import { motion } from "framer-motion";

// CSS
import "../../css/mainSection.css";

// IMAGE
import BackgroundImage from "../../images/background.PNG";

function Main() {
  return (
    <section id="intro-wrapper" className="intro-wrapper">
      <img src={BackgroundImage} className="background-image"></img>
      <div className="intro-presentation-wrapper">
        <motion.div
          className="intro"
          initial={{ x: "-200vh" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, stiffness: 100, duration: 0.5 }}
        >
          <h1 className="intro-presentation">Diogo Ribeiro</h1>
          <h2 className="intro-presentation">
            Nice to meet you! I'm a Frontend Web Developer.
          </h2>
          <div className="intro-presentation-list">
            <div className="intro-presentation-link">
              <Link to="projects-section" smooth={true} duration={500}>
                View Portfolio
              </Link>
            </div>
            <div className="intro-presentation-link">
              <Link to="contact-section" smooth={true} duration={500}>
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Main;
