import { useState } from "react";

function Login() {
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  function validateEmail(e) {
    const eMailRegexPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}/;
    if (!eMailRegexPattern.test(e.target.value)) {
      setEmailError("Invalid email address...");
    } else {
      setEmailError("");
    }
  }

  function validatePassword(e) {
    const passWordRegexPattern = /^[a-zA-Z0-9!@#$%^&*()-=_+`~./,<>?]{7,}/;
    if (!passWordRegexPattern.test(e.target.value)) {
      setPasswordError("Password must be more than 7 characters");
    } else {
      setPasswordError("");
    }
  }

  return (
    <div className="d-flex  justify-content-center align-items-center vh-100">
      <form className="col-3">
        <h3 className="form-label">Login Form</h3>
        <br />
        <div className="mb-3">
          <label for="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email here..."
            onChange={validateEmail}
          />
          <p className="text-danger">{emailError}</p>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password here..."
            onChange={validatePassword}
          />
          <p className="text-danger">{passwordError}</p>
        </div>
        <button type="submit" className="btn btn-warning">
          Login
        </button>
        <br />
        <br />
        <a href="/" className="link-underline-warning me-3">
          Home
        </a>
        <a href="/signup" className="link-underline-warning m-3">
          Signup
        </a>
      </form>
    </div>
  );
}

export default Login;
