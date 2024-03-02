import { useState } from "react";
import "./forgetPassword.css";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleForgetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
    } else {
      alert("Password sent to your email");

      window.location.href = "/";
    }
  };

  return (
    <div className="forget-password-page">
      <h2 className="heading heading-forget-pass-page">Welcome!</h2>

      <p className="reset-message">
        <i className="icon-message fa-solid fa-exclamation"></i>
        Please enter your username or email address. You will receive an email
        message with instructions on how to reset your password.
      </p>

      <form onSubmit={handleForgetPassword}>
        <input
          className="forget-password-page-email"
          type="email"
          id="user-name"
          placeholder="Username or Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="new-pass-btn">Get New Password</button>

        <Link to="/signIn" className="go-to-log-in">
          Log in
        </Link>
      </form>
      <a className="go-to-home" href="/">
        ← Go to Vikinger
      </a>
    </div>
  );
}

export default ForgetPassword;
