import "./Components/App.css"
import Project from "./Components/project"
import Project2 from "./Components/Project2"
import Project3 from "./Components/Project3"

function App() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <Project />
      <Project2 />
      <Project3 />
    </div>
  )
 
}

export default App
