import { Link } from 'react-router-dom';
import React from 'react';
import Language from '../Language';
import './Signupside.css';


class SignUpSide extends React.Component {
  render() {
    return (
      <div className="Signupside-container">
        <div className="Signupside-color-div">
          <div className="Signupside-box">
            <div className="Signupside-logo">
              <img src="/images/logo.png" className="Main-logo" alt="logo" />
              <div className="Signupside-language"><Language /></div>
            </div>
            <div className="Signupside-welcome-message">
              <div className="Signupside-heading">Welcome</div>
              <div className="Signupside-subbheading">
                Let's make money simple and digitize your banking experience
              </div>
              <div className="Signupside-content" />
              <div className="Signupside-button-wrapper">

                <Link to="/signup">
                  <button className="Signupside-button" >
                    <span className="Signupside-button-label">
                      register here
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

export default SignUpSide;
