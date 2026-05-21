import { useState } from "react";
import "../Components/App.css";
import ProjectModal from "../Components/ProjectModal";
import "../Components/Modal.css";
import screenShoot from "../assets/typinggame.png";
import screenShoot2 from "../assets/Genesis.png";
import screenShoot3 from "../assets/booking.png";

function Portfolio() {

  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Typing game",
      image: screenShoot,
      repo: "https://github.com/isakf999-bot/TypingGame.JS",
      tech: "JavaScript, CSS, HTML",
      description: "This is my first project is a typing game built with JavaScript, HTML, and CSS. It features a timer and a word list for players to type.The game is designed to improve typing speed and accuracy. Ive learned a lot from this project and it was a great experience to create something fun and interactive while improving my coding skills. Ive came across a few challenges. I had an error in the code i did not see which made the timer, difficulty and to get points to not work. I found the fualt with the help of my teacher and fixed it."
    },
    {
      id: 2,
      name: "Portfolio project",
      image: screenShoot2,
      repo: "https://github.com/isakf999-bot/Genesis.Assignment",
      tech: "HTML, CSS, SCSS",
      description: "This project is a website we made focused on learning how to use SCSS and grid. I made a big photo gallery using grid. We also used grid in this project to move text making a good looking system. I learned a lot about grid and how to use it to make a good looking website. I also learned how to use SCSS to make the code more organized and easier to read. I had some challenges with the grid not being the right numbers."
    },
    {
      id: 3,
      name: "Booking Website",
      image: screenShoot3,
      repo: "https://github.com/isakf999-bot/Website.Test",
      tech: "SCSS, HTML, CSS",
      description: "This project is a booking website we made focused on learning how to use SCSS and Flexbox. This was a test in my course to end the HTML, CSS, SCSS course. We were going to use everything we learned in the course and use it in this project. I had 12 hours to finnish the project from first code written. I learned that i knew more than i acually thought. I had a lot of challanges with the flexbox because i was stressed and made a lot of small mistakes. I had problems with making things look good and some things looks little bit of in placemnt that i havent fixed yet."
    }
  ];

  return (
    <div className="projects-container">

      <h2>Portfolio</h2>

      <button
        className="toggle-button"
        onClick={() => setShowProjects(!showProjects)}
      >
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      {showProjects && (
        <div className="project-grid">

          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <h3>{project.name}</h3>
            </div>
          ))}

        </div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}

export default Portfolio;