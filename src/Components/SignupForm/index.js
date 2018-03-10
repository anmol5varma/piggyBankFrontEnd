import React from 'react';
import './Signupform.css';

const form = () => (
  <div>
    <input type="text" placeholder="12-digit aadhaar number" className="Login-input-field" />
  </div>
);

const form2 = () => (
  <div>
    <input type="password" placeholder="_ _ _ _" className="Login-input-field" />
  </div>
);

const LoginSide = () => (
  <div className="Signupform-container">
    <div className="Signupform-box">
      <div className="Signupform-welcome-message">
        <div className="Signupform-heading">Enter your aadhaar number</div>
        <div className="Signupform-content">
          {form()}
        </div>
        <div className="Signupform-button-wrapper">
          <button className="Signupform-button">
            <span className="Signupform-button-label">
          Send otp
            </span>
          </button>
        </div>
      </div>
      <div className="Signupform-welcome-message">
        <div className="Signupform-heading">
        An otp has been sent on your registered mobile number
        </div>
        <div className="Signupform-content">
          {form2()}
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
      <div className="Signupform-welcome-message">
        <div className="Signupform-heading">
        Verify your details
        </div>
        <div className="Signupform-content">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Anmol
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>ANMOL</td>
              </tr>
              <tr>
                <td>Dob</td>
                <td>ANMOL</td>
              </tr>
              <tr>
                <td>Guardian</td>
                <td>ANMOL</td>
              </tr>
              <tr>
                <td>House no.</td>
                <td>ANMOL</td>
              </tr>
              <tr>
                <td>Street</td>
                <td>ANMOL</td>
              </tr>
              <tr>
                <td>Locality</td>
                <td>ANMOL</td>
              </tr>
              <tr>
                <td>Landmark</td>
                <td>ANMOL</td>
              </tr>
              <tr>
                <td>Sub district</td>
                <td>ANMOL</td>
              </tr>
              <tr>
                <td>District</td>
                <td>ANMOL</td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td>ANMOL</td>
              </tr>
              <tr>
                <td>State</td>
                <td>ANMOL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Signupform-button-wrapper">
          <button className="Signupform-button">
            <span className="Signupform-button-label">
          I verify myself
            </span>
          </button>
          <button className="Signupform-button">
            <span className="Signupform-button-label">
          No this is someone else
            </span>
          </button>
        </div>
      </div>
      <div className="Signupform-welcome-message">
        <div className="Signupform-heading">Set username and password</div>
        <div className="Signupform-content">
          {form()}
        </div>
        <div className="Signupform-button-wrapper">
          <button className="Signupform-button">
            <span className="Signupform-button-label">
          Open account
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default LoginSide;
