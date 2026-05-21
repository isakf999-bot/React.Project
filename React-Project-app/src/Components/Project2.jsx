import "./Project.css"
import screenShoot from "../assets/hero.png?url"

function Project() {
    return (
    <div className="project-card">
        <h2 className="project-title">Project</h2>

       <img className="project-image" src={screenShoot} alt="Projectscreenshot"/>

       <a className="project-link" href=""> Github Repo </a>

       <h3 className="tech-title">Tech used</h3>

      <div className="tech-list">
        <span className="tech-tag">React</span>
        <span className="tech-tag">CSS</span>
        <span className="tech-tag">JavaScript</span>
      </div>

        <p className="project-description"> About the project</p>
   </div>
    )
 
 
}

export default Project