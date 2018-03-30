import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
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
              <div className="Signupside-heading">{this.props.welcomeMessage}</div>
              <div className="Signupside-subbheading">
                {this.props.tagLine}
              </div>
              <div className="Signupside-content" />
              <div className="Signupside-button-wrapper">
                <Link to="/signup">
                  <button className="Signupside-button" >
                    <span className="Signupside-button-label">
                      {this.props.buttonMessage}
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
SignUpSide.propTypes = {
  welcomeMessage: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired,
  buttonMessage: PropTypes.string.isRequired,
};

