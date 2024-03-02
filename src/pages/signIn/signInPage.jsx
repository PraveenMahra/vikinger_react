import { useState } from "react";
import "./signInPage.css";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
    } else if (!password) {
      alert("Please enter your password");
    } else {
      alert("Login successful");

      window.location.href = "/";
    }
  };

  return (
    <div className="login-page">
      <h2 className="heading heading-login-page">Welcome!</h2>

      <form onSubmit={handleLogin}>
        <input
          className="input-email"
          type="email"
          id="user-name"
          placeholder="Username or Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-email"
          type="password"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="checkbox">
          <input type="checkbox" name="" id="checkbox" />
          <label htmlFor="checkbox"> Remember Me</label>
        </div>
        <button type="submit" id="login-btn">
          Log In
        </button>

        <Link to="/forgetPassword" className="forgot-password">
          Lost your Password?
        </Link>
      </form>
      <a className="go-to-home" href="/">
        ← Go to Vikinger
      </a>
    </div>
  );
}

export default SignIn;
