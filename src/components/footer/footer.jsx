import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-display">
        <ul>
          <img className="logo" src="img/logo.png" alt="logo img" />
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/testimonial.html">Testimonials</a>
          </li>
          <li>
            <a href="#">Our Website</a>
          </li>
          <li>
            <a href="#">Download</a>
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
