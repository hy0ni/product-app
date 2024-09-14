import { NavLink } from "react-router-dom";
import '../resource/css/App.min.css';

function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/ProductApp" className="nav-item">ProductApp</NavLink>
    </nav>
  )
}
export default Navigation;