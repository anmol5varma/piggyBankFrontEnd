import { Link } from 'react-router-dom';
import React from 'react';
import './Signupside.css';


class SignUpSide extends React.Component {
  render() {
    return (
      <div className="Signupside-container">
        <div className="Signupside-color-div">
          <div className="Signupside-box">
            <div className="Signupside-logo">DigiBank</div>
            <div className="Signupside-welcome-message">
              <div className="Signupside-heading">Welcome</div>
              <div className="Signupside-subbheading">
              No need to go to the bank. We will come to you
              </div>
              <div className="Signupside-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do dhgf dhjfgejh dfjhgsdjf
              </div>
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
