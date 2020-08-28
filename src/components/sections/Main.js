import React from "react";

// MOTION
import { motion } from "framer-motion";

// CSS
import "../../css/mainSection.css";

// IMAGE
import BackgroundImage from "../../images/background.png";

function Main() {
  return (
    <section className="intro-wrapper">
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
          <ul className="intro-presentation-list">
            <li className="intro-presentation-list-item">
              <a href="#" className="intro-presentation-link">
                View Portfolio
              </a>
            </li>
            <li className="intro-presentation-list-item">
              <a href="#" className="intro-presentation-link">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Main;
