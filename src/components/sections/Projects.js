import React, { useEffect } from "react";

// COMPONENTS
import ProjectCard from "../ProjectCard";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// CSS
import "../../css/projectsSection.css";

// IMAGES
import PokedexImage from "../../images/Pokédex_logo.PNG";
import HangmanImage from "../../images/hangman_project.PNG";
import FusoesImage from "../../images/fusoes_project.PNG";

function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="projects-section" className="projects-section">
      <p className="section-tittle" data-aos="fade-left">
        Projects
      </p>
      <div className="projects-wrapper">
        <ProjectCard
          projectImage={PokedexImage}
          projectDescription={
            "Search for a first generation Pokémon  by name, and see it's description"
          }
        />
        <ProjectCard
          projectImage={HangmanImage}
          projectDescription={
            "Discover the word your friend thought, before he d _ _ s"
          }
        />
        <ProjectCard
          projectImage={FusoesImage}
          projectDescription={"Fusões Academia, Karate Site"}
        />
      </div>
    </section>
  );
}

export default Projects;
