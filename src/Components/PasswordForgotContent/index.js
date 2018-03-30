import { Link } from 'react-router-dom';
import React from 'react';
import './ForgotPasswordContent.css';

class ForgotPasswordContent extends React.Component {
  render() {
    return (
      <div className="ForgotPasswordContent-container">
        <div className="ForgotPasswordContent-color-div">
          <div className="ForgotPasswordContent-box">
            <div className="ForgotPasswordContent-logo">Credence Bank</div>
            <div className="ForgotPasswordContent-welcome-message">
              <div className="ForgotPasswordContent-heading">Forgot your password?</div>
              <div className="ForgotPasswordContent-subbheading">
              No reason to worry!We got your back.
              </div>
              <div className="ForgotPasswordContent-content">
                An Email will be sent to your registered Email Id where you can reset your password if you are an authentic user.
              </div>
              <div className="ForgotPasswordContent-button-wrapper">

                <Link to="/login">
                  <button className="ForgotPasswordContent-button" >
                    <span className="ForgotPasswordContent-button-label">
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

export default ForgotPasswordContent;
