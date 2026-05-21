import { useState } from "react";
import "../Components/App.css";
import Project from "../Components/Project";
import Project2 from "../Components/Project2";
import Project3 from "../Components/Project3";

function Portfolio() {

  const [showProjects, setShowProjects] = useState(false);

  return (
    <div>
      <div className="projects-container">

        <h2>Portfolio</h2>

        <button className="toggle-button" onClick={() => setShowProjects(!showProjects)}>
          {showProjects ? "Hide Projects" : "Show Projects"}
        </button>

        {showProjects && (
          <>
            <Project />
            <Project2 />
            <Project3 />
          </>
        )}

      </div>
    </div>
  );
}

export default Portfolio;