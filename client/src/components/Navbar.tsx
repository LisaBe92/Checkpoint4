import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.jpg";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/about">A propos</Link>
          </li>
          <li>
            <Link to="/">
              <div className="logo">
                <img src={Logo} alt="SweetShare Logo" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
