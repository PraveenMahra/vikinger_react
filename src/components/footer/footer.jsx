import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-display">
        <ul>
          <img className="logo" src="img/logo.png" alt="logo img" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/testimonials"> Testimonials </Link>
          </li>
          <li>
            {" "}
            <Link to="/">Our Website </Link>
          </li>
          <li>
            <Link to="/"> Download</Link>
          </li>
        </ul>
        <div className="footer-social-link">
          <a href="#">
            <FaFacebook className="footer-link" />
          </a>
          <a href="#">
            <FaTwitter className="footer-link" />
          </a>
          <a href="#">
            <FaInstagram className="footer-link" />
          </a>
          <a href="#">
            <FaYoutube className="footer-link" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
