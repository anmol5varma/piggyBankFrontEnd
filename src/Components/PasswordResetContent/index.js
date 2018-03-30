import { Link } from 'react-router-dom';
import React from 'react';
import './PasswordResetContent.css';
import Language from '../Language';


class PasswordResetContent extends React.Component {
  render() {
    return (
      <div className="PasswordResetContent-container">
        <div className="PasswordResetContent-color-div">
          <div className="PasswordResetContent-box">
            <div className="Signupside-logo">
              <img src="/images/logo.png" className="Main-logo" alt="logo" />
              {/* <div className="Signupside-language"><Language /></div> */}
            </div>
            <div className="PasswordResetContent-welcome-message">
              <div className="PasswordResetContent-heading">Reset your password</div>
              <div className="PasswordResetContent-subbheading">
              Please enter your new password.
              </div>
              <div className="PasswordResetContent-content">
                Your password should have a minimum of 6 and a maximum of 16 characters.
                It must contain atleast one upparCase and a lowerCase alphabet, a digit and a special character.
              </div>
              <div className="PasswordResetContent-button-wrapper">

                <Link to="/login">
                  <button className="PasswordResetContent-button" >
                    <span className="PasswordResetContent-button-label">
                      Take me to login page
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

export default PasswordResetContent;
