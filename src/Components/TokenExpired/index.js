import { Link } from 'react-router-dom';
import React from 'react';
import './TokenExpired.css';
import Language from '../Language';


class TokenExpired extends React.Component {
  render() {
    return (
      <div className="TokenExpired-container">
        <div className="TokenExpired-color-div">
          <div className="TokenExpired-box">
            <img src="/images/logo.png" className="Main-logo token-logo" alt="logo" />
            <div className="Signupside-language token-lang"><Language /></div>
            <div className="TokenExpired-welcome-message">
              <div className="TokenExpired-heading">Token Expired!!</div>
              <div className="TokenExpired-subbheading">
              Your reset password link has expired.
              </div>
              <div className="TokenExpired-content">

              If you still want to reset your password, please click on {"'Forgot password'"} again from the login section.
              </div>
              <div className="TokenExpired-button-wrapper">

                <Link to="/login">
                  <button className="TokenExpired-button" >
                    <span className="TokenExpired-button-label">
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

export default TokenExpired;
