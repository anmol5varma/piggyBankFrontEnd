import React from 'react';
import './Signuppage.css';

const axios = require('axios');

class SignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      noOfComponent: 1,
      aadhaarNo: '',
      aadhaarClass: '',
    };
  }
  render() {
    const aadhaarField = (
      <div className="Signup-aadhaar-box Signup-Component-box">
        <div className="Signup-fields-wrapper">
          <div className="Signup-page-title Signup-box-field">Enter Aadhaar number</div>
          <div className="Signup-box-field">
            <input
              className="Signup-input-field"
              type="text"
              placeholder="Enter 12 digit aadhaar number"
            />
          </div>
          <div className="Signup-box-field">
            <button className="Signup-page-button">
              <span className="Signup-page-label">Send OTP</span>
            </button>
          </div>
        </div>
      </div>
    );

    const otpField = (
      <div className="Signup-otp-box Signup-Component-box">
        <div className="Signup-fields-wrapper">
          <div className="Signup-page-title Signup-box-field">Enter OTP</div>
          <div className="Signup-box-field">
            <input className="Signup-input-field" type="text" placeholder="Verify OTP" />
          </div>
          <div className="Signup-box-field">
            <button className="Signup-page-button">
              <span className="Signup-page-label">Verify OTP</span>
            </button>
          </div>
        </div>
      </div>
    );

    const showDetails = () => (
      <div className="Signup-details-table Signup-Component-box">
        <div className="Signup-fields-wrapper">
          <table>
            <thead>
              <tr><th colSpan="2">Verify your details</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1</td>
                <td>My name is anmol</td>
              </tr>
              <tr>
                <td>Row 2</td>
                <td>I am a good boy</td>
              </tr>
              <tr>
                <td>Row 3</td>
                <td>I am intelligent also</td>
              </tr>
              <tr>
                <td>Row 3</td>
                <td>I love mckinsey</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );

    const signupField = () => (
      <div className="Signup-otp-box Signup-Component-box">
        <div className="Signup-fields-wrapper">
          <div className="Signup-page-title Signup-box-field">Username</div>
          <div className="Signup-box-field">
            <input className="Signup-input-field" type="text" placeholder="New username" />
          </div>
          <div className="Signup-page-title Signup-box-field">Password</div>
          <div className="Signup-box-field">
            <input className="Signup-input-field" type="password" placeholder="password" />
          </div>
          <div className="Signup-box-field">
            <button className="Signup-page-button">
              <span className="Signup-page-label">Open my account</span>
            </button>
          </div>
        </div>
      </div>
    );

    if (this.state.noOfComponent === 1) {
      return (
        <div>
          {aadhaarField}
        </div>);
    } else if (this.state.noOfComponent === 2) {
      return (
        <div>
          {aadhaarField}
          {otpField}
        </div>);
    } else if (this.state.noOfComponent === 3) {
      return (
        <div>
          {aadhaarField}
          {otpField}
          {showDetails()}
        </div>);
    }
    return (
      <div className="Signup-wrapper">
        {aadhaarField}
        {otpField}
        {showDetails()}
        {signupField()}
      </div>);
  }
}

export default SignUpPage;
