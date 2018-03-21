import { Link } from 'react-router-dom';
import React from 'react';
import './Signupcontent.css';


class SignupContent extends React.Component {
  render() {
    return (
      <div className="SignupContent-container">
        <div className="SignupContent-color-div">
          <div className="SignupContent-box">
            <div className="SignupContent-logo">Piggy Bank</div>
            <div className="SignupContent-welcome-message">
              <div className="SignupContent-heading">Register</div>
              <div className="SignupContent-subbheading">
                Just four easy steps
              </div>
              <div className="SignupContent-content">
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
