import {Link} from "react-router-dom";
import "./Components/Navbar.css"

function Navbar() {
    return (
      <>
         <nav className="nav-container">
               <ul className="nav-card">
                   <li className="nav-item"><Link to="/">Home</Link></li>
                   <li className="nav-item"><Link to="/about">About</Link></li>
                   <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
               </ul>
         </nav>
      </>
    )
};

export default Navbar