import React, { useEffect } from "react";

// REACT ROUTER
import { Link } from "react-router-dom";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// MOTION
import { motion } from "framer-motion";

// CSS
import "../css/projectsSection.css";

function ProjectCard({ projectImage, projectDescription }) {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  return (
    <Link
      to="#"
      className="project-card link"
      data-aos="zoom-in"
      data-aos-duration="0.5s"
    >
      <img src={projectImage} alt="qq" className="project-card-image" />
      <motion.div
        className="project-card-description"
        whileHover={{ scale: 1.01 }}
      >
        <p>{projectDescription}</p>
      </motion.div>
    </Link>
  );
}

export default ProjectCard;
