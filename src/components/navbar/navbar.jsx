import { Link } from "react-router-dom";
import Button from "../button/button";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="company-logo">
        <img className="c-logo" src="img/logo.png" alt="logo img" />
        <h3 className="logo-name">VIKINGER</h3>
      </div>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/testimonials">
          <li>Testimonials</li>
        </Link>
        <li>Our Website</li>
        <li>Download</li>
      </ul>

      <Link to="/signIn">
        <Button className="primary-btn" value="Sign in!" />
      </Link>
    </nav>
  );
}

export default Navbar;
