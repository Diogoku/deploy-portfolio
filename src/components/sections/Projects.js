import React, { useEffect } from "react";

// COMPONENTS
import ProjectCard from "../ProjectCard";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// CSS
import "../../css/projectsSection.css";

// IMAGES
import GoogleBooksAPIImage from "../../images/google-books_logo.PNG";
import HangmanImage from "../../images/hangman_project.PNG";
import FusoesImage from "../../images/fusoes_project.PNG";
import ExpenseTrackerImage from "../../images/expense_tracker_logo.PNG";
import WhatsAppGroupImage from "../../images/whatsapp_logo.PNG";
import NetflixImage from "../../images/netflix_logo.PNG";
import Teste from "../../images/teste.JPG";

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
          projectLink={"https://diogoku.github.io/googleBooksAPI/"}
          projectImage={GoogleBooksAPIImage}
          projectDescription={
            "Google Books has a mission to digitize the world's book content and make it more discoverable on the Web. "
          }
        />
        <ProjectCard
          projectLink={"https://diogoku.github.io/hangman/"}
          projectImage={HangmanImage}
          projectDescription={
            "Discover the word your friend thought, before he d _ _ s"
          }
        />
        <ProjectCard
          projectLink={"https://diogoku.github.io/fusoesAcademia/"}
          projectImage={FusoesImage}
          projectDescription={"Fusões Academia, Karate Site"}
        />
        <ProjectCard
          projectLink={"https://diogoku.github.io/expenseTracker/"}
          projectImage={ExpenseTrackerImage}
          projectDescription={"Keep track of your cash flow"}
        />
        <ProjectCard
          projectLink={"https://whatsapp-mern-849a1.web.app/"}
          projectImage={WhatsAppGroupImage}
          projectDescription={"WhatsApp Group - MERN"}
        />
        <ProjectCard
          projectLink={"https://netflix-clone-1bb45.firebaseapp.com/"}
          projectImage={NetflixImage}
          projectDescription={"Netflix Dashboard"}
        />
        <img className="teste" src={Teste} alt="netflix" />
      </div>
    </section>
  );
}

export default Projects;
