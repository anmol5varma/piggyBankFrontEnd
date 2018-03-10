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

const progressBarHalf = () => (
  <div className="Signupform-progressbar">
    <div className="Signupform-progressbar-dot" />
    <div className="Signupform-progressbar-bar-unfilled" />
  </div>
);

const progressBarUnfilled = () => (
  <div className="Signupform-progressbar">
    <div className="Signupform-progressbar-dot-unfilled" />
    <div className="Signupform-progressbar-bar-unfilled" />
  </div>
);

const sendOTP = state => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">Enter your aadhaar number</div>
    <div className="Signupform-content">
      {getAadhaarForm()}
    </div>
    <div className="Signupform-button-wrapper">
      <button
        onClick={() => {
          state.sendOTPButtonClicked();
        }}
        className="Signupform-button"
      >
        <span className="Signupform-button-label">
      Send otp
        </span>
      </button>
    </div>
  </div>
);

const verifyOTP = state => (
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
      <button
        onClick={() => {
        state.verifyOTPButtonClicked();
      }}
        className="Signupform-button"
      >
        <span className="Signupform-button-label">
      Verify otp
        </span>
      </button>
    </div>
  </div>
);

const getDetails = state => (
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
    This is someone else
        </span>
      </button>
      <button
        onClick={() => {
        state.detailsVerifiedButtonClicked();
      }}
        className="Signupform-button"
      >
        <span className="Signupform-button-label">
      This is me
        </span>
      </button>

    </div>
  </div>
);

const userRegister = state => (
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
  constructor() {
    super();
    this.state = {
      noOfComponent: 1,
    };
  }

  verifyOTPButtonClicked() {
    this.setState({
      noOfComponent: 3,
    });
  }

  detailsVerifiedButtonClicked() {
    this.setState({
      noOfComponent: 4,
    });
  }

  sendOTPButtonClicked() {
    this.setState({
      noOfComponent: 2,
    });
  }

  render() {
    if (this.state.noOfComponent === 1) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <div className="Signupform-component">
              {progressBarHalf()}
              {sendOTP(this)}
            </div>
          </div>
        </div>
      );
    } else if (this.state.noOfComponent === 2) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <div className="Signupform-component">
              {progressBar()}
              {sendOTP(this)}
            </div>
            <div className="Signupform-component">
              {progressBarHalf()}
              {verifyOTP(this)}
            </div>
          </div>
        </div>
      );
    } else if (this.state.noOfComponent === 3) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <div className="Signupform-component">
              {progressBar()}
              {sendOTP(this)}
            </div>
            <div className="Signupform-component">
              {progressBar()}
              {verifyOTP(this)}
            </div>
            <div className="Signupform-component">
              {progressBarHalf()}
              {getDetails(this)}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="Signupform-container">
        <div className="Signupform-box">
          <div className="Signupform-component">
            {progressBar()}
            {sendOTP(this)}
          </div>
          <div className="Signupform-component">
            {progressBar()}
            {verifyOTP(this)}
          </div>
          <div className="Signupform-component">
            {progressBar()}
            {getDetails(this)}
          </div>
          <div className="Signupform-component">
            {progressBarHalf()}
            {userRegister(this)}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSide;
