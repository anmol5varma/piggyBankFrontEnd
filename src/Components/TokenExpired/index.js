import { Link } from 'react-router-dom';
import React from 'react';
import './TokenExpired.css';


class TokenExpired extends React.Component {
  render() {
    return (
      <div className="TokenExpired-container">
        <div className="TokenExpired-color-div">
          <div className="TokenExpired-box">
            <div className="TokenExpired-logo">Credence Bank</div>
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
