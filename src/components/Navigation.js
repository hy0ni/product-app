import { NavLink } from "react-router-dom";
import '../css/Navigation.css';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/ProductApp" className="nav-item">ProductApp</NavLink>
    </nav>
  )
}
export default Navigation;