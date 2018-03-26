import { Link } from 'react-router-dom';
import React from 'react';
import './Signupside.css';


class SignUpSide extends React.Component {
  render() {
    return (
      <div className="Signupside-container">
        <div className="Signupside-color-div">
          <div className="Signupside-box">
            <div className="Signupside-logo">Credence Bank</div>
            <div className="Signupside-welcome-message">
              <div className="Signupside-heading">Welcome</div>
              <div className="Signupside-subbheading">
             Let's make money simple and digitize your banking experience
              </div>
              <div className="Signupside-content">
                {/* Wealth management in an easy way-
              because your interest comes first */}
                {/* <i className="fa fa-id-badge" />Helloo
                {/* <i className="far font-icons fa-check-circle" />D */}

                {/* <ul>
                  <li>
                    Digitize your banking experience
                  </li>
                  <li>
                   Save Time
                  </li>
                </ul> */}
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
