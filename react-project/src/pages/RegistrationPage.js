import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };

  const handleAadharNoChange = (e) => {
    setAadharNo(e.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (!firstName || !lastName || !email || !contactNo || !aadharNo) {
      setError("Please fill in all fields");
      setShowModal(true);
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setShowModal(true);
    } else if (!validateContactNo(contactNo)) {
      setError("Please enter a valid contact number");
      setShowModal(true);
    } else if (!validateAadharNo(aadharNo)) {
      setError("Please enter a valid Aadhar card number");
      setShowModal(true);
    } else {
      // Perform registration logic here
      // You can make an API call to your backend server to save the user information
      setError("");
      setShowModal(true);
      console.log("Registration successful!");
    }
  };

  const validateEmail = (email) => {
    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContactNo = (contactNo) => {
    // Contact number validation using a regular expression
    const contactNoRegex = /^\d{10}$/;
    return contactNoRegex.test(contactNo);
  };

  const validateAadharNo = (aadharNo) => {
    // Aadhar card number validation using a regular expression
    const aadharNoRegex = /^\d{12}$/;
    return aadharNoRegex.test(aadharNo);
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            className={`form-control ${firstName ? "is-valid" : "is-invalid"}`}
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            className={`form-control ${lastName ? "is-valid" : "is-invalid"}`}
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${
              validateEmail(email) ? "is-valid" : "is-invalid"
            }`}
            value={email}
            onChange={handleEmailChange}
          />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Contact No:</label>
          <input
            type="text"
            className={`form-control ${
              validateContactNo(contactNo) ? "is-valid" : "is-invalid"
            }`}
            value={contactNo}
            onChange={handleContactNoChange}
          />
          <div className="invalid-feedback">
            Please enter a valid contact number.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Aadhar No:</label>
          <input
            type="text"
            className={`form-control ${
              validateAadharNo(aadharNo) ? "is-valid" : "is-invalid"
            }`}
            value={aadharNo}
            onChange={handleAadharNoChange}
          />
          <div className="invalid-feedback">
            Please enter a valid Aadhar card number.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <ModalBody>{error}</ModalBody>
        <ModalFooter>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RegistrationPage;
