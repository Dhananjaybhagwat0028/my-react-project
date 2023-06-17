import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Perform validation
    let isValid = true;

    if (!email) {
      setEmailError("Please enter your email");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      isValid = false;
    }

    if (isValid) {
      // Perform login logic here
      console.log("Login successful!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${emailError && "is-invalid"}`}
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className={`form-control ${passwordError && "is-invalid"}`}
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <div className="invalid-feedback">{passwordError}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
