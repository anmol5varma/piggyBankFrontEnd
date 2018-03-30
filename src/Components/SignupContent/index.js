import { Link } from 'react-router-dom';
import React from 'react';
// import googleInit from '../../helpers/googleTranslate';
import Language from '../Language';
import './Signupcontent.css';


class SignupContent extends React.Component {
  render() {
    // googleInit.googleTranslateElementInit();
    return (
      <div className="SignupContent-container">
        <div className="SignupContent-color-div">
          <div className="SignupContent-box">
            <div className="SignupContent-logo">
              <img src="/images/logo.png" className="Main-logo" alt="logo" />
              <div className="SignupContent-language"><Language /></div>
            </div>
            <div className="SignupContent-welcome-message">
              <div className="SignupContent-heading">Register</div>
              <div className="SignupContent-subbheading">
                Just four easy steps
              </div>
              <div className="SignupContent-content">
                <ul className="Signup-content-checklist">
                  <li className="Signup-content-checklist-item">
                    <div className="font-icons">
                      <i
                        className="far font-icons fa-check-circle"
                      />Scan QR or enter aadhaar number
                    </div>
                  </li>
                  <li className="Signup-content-checklist-item">
                    <div className="font-icons">
                      <i className="far font-icons fa-check-circle" />Complete eKYC
                    </div>
                  </li>
                  <li className="Signup-content-checklist-item">
                    <div className="font-icons">
                      <i className="far font-icons fa-check-circle" />Verify your details
                    </div>
                  </li>
                  <li className="Signup-content-checklist-item">
                    <div className="font-icons">
                      <i className="far font-icons fa-check-circle" />Enter login credentials
                    </div>
                  </li>
                </ul>
              </div>
              <div className="SignupContent-button-wrapper">
                <Link to="/">
                  <button className="SignupContent-button">

                    <span className="SignupContent-button-label">
                      I already have an account
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignupContent;
