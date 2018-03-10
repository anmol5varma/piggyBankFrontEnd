import React from 'react';
import './Signupform.css';

const getAadhaarForm = () => (
  <div>
    <input type="text" placeholder="12-digit aadhaar number" className="Login-input-field" />
  </div>
);

const verifyOTPForm = () => (
  <div>
    <input type="password" placeholder="_ _ _ _" className="Login-input-field" />
  </div>
);

const userRegisterForm = () => (
  <div>
    <input type="text" placeholder="Username" className="Login-input-field" />
    <input type="password" placeholder="Password" className="Login-input-field Signup-field" />
  </div>
);

const progressBar = () => (
  <div className="Signupform-progressbar">
    <div className="Signupform-progressbar-dot" />
    <div className="Signupform-progressbar-bar" />
  </div>
);
const sendOTP = () => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">Enter your aadhaar number</div>
    <div className="Signupform-content">
      {getAadhaarForm()}
    </div>
    <div className="Signupform-button-wrapper">
      <button className="Signupform-button">
        <span className="Signupform-button-label">
      Send otp
        </span>
      </button>
    </div>
  </div>
);

const verifyOTP = () => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">
    An otp has been sent on your registered mobile number
    </div>
    <div className="Signupform-content">
      {verifyOTPForm()}
    </div>
    <div className="Signupform-button-wrapper">
      <button className="Signupform-button">
        <span className="Signupform-button-label">
      Resend otp
        </span>
      </button>
      <button className="Signupform-button">
        <span className="Signupform-button-label">
      Verify otp
        </span>
      </button>
    </div>
  </div>
);

const getDetails = () => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">
    Verify your details
    </div>
    <div className="Signupform-content">
      <div className="Signupform-verify-details">
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Name
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Gender
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            DOB
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Guardian
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            House no.
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Street
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Locality
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Landmark
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Sub district
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            District
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Pincode
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            State
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
            Anmol Varma is a good boy
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="Signupform-button-wrapper">
      <button className="Signupform-button">
        <span className="Signupform-button-label">
      This is me
        </span>
      </button>
      <button className="Signupform-button">
        <span className="Signupform-button-label">
      This is someone else
        </span>
      </button>
    </div>
  </div>
);

const userRegister = () => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">Set username and password</div>
    <div className="Signupform-content">
      {userRegisterForm()}
    </div>
    <div className="Signupform-button-wrapper">
      <button className="Signupform-button">
        <span className="Signupform-button-label">
      Open account
        </span>
      </button>
    </div>
  </div>
);

class LoginSide extends React.Component {
  render() {
    return (
      <div className="Signupform-container">
        <div className="Signupform-box">
          <div className="Signupform-component">
            {progressBar()}
            {sendOTP()}
          </div>
          <div className="Signupform-component">
            {progressBar()}
            {verifyOTP()}
          </div>
          <div className="Signupform-component">
            {progressBar()}
            {getDetails()}
          </div>
          <div className="Signupform-component">
            {progressBar()}
            {userRegister()}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSide;
