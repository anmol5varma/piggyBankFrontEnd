import { Link } from 'react-router-dom';
import React from 'react';
import './Signupside.css';


class SignUpSide extends React.Component {
  render() {
    return (
      <div className="Signupside-container">
        <div className="Signupside-color-div">
          <div className="Signupside-box">
            <div className="Signupside-logo">Piggy Bank</div>
            <div className="Signupside-welcome-message">
              <div className="Signupside-heading">Welcome</div>
              <div className="Signupside-subbheading">No need to go to the bank. We will come to you</div>
              <div className="Signupside-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Neque convallis a cras semper. Sollicitudin ac orci
                phasellus egestas tellus. Vel facilisis volutpat est velit egestas
                dui id ornare arcu. Adipiscing tristique risus nec feugiat in.
                Platea dictumst quisque sagittis purus sit amet. Nulla facilisi
                etiam dignissim diam quis. Quam viverra orci sagittis eu volutpat
                odio facilisis mauris. Facilisi cras fermentum odio eu feugiat pretium.
                Elementum nibh tellus molestie nunc. Tempor orci eu lobortis elementum
                nibh tellus molestie nunc.
              </div>
              <div className="Signupside-button-wrapper">

                <Link to="/signup">
                  <button className="Signupside-button" >
                    <span className="Signupside-button-label">
                      open account
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
