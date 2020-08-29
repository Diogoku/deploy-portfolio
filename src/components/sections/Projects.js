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
import ExpenseTrackerImage from "../../images/expense_tracker_logo.PNG";
import CustomLoginImage from "../../images/login_logo.PNG";

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
          projectLink={"https://diogoku.github.io/pokedex/"}
          projectImage={PokedexImage}
          projectDescription={
            "Search for a first generation Pokémon  by name, and see it's description"
          }
        />
        <ProjectCard
          projectLink={"https://diogoku.github.io/pokedex/"}
          projectImage={HangmanImage}
          projectDescription={
            "Discover the word your friend thought, before he d _ _ s"
          }
        />
        <ProjectCard
          projectLink={"https://diogoku.github.io/pokedex/"}
          projectImage={FusoesImage}
          projectDescription={"Fusões Academia, Karate Site"}
        />
        <ProjectCard
          projectLink={"https://diogoku.github.io/pokedex/"}
          projectImage={ExpenseTrackerImage}
          projectDescription={"Keep track of your cash flow"}
        />
        <ProjectCard
          projectLink={"https://diogoku.github.io/pokedex/"}
          projectImage={CustomLoginImage}
          projectDescription={
            "Default Login Form, with the possibility to change the color of the various elements"
          }
        />
      </div>
    </section>
  );
}

export default Projects;
