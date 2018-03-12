import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './header.css';


const Header = props => (
  <div className="Header-main">
    <div className="Header-logo">Piggy Bank</div>
    <div className="Header-user">
      <div className="Header-options">
        <div className="Header-logout">
          <Link to="/login">
            <button
              className="Loginside-button"
              onClick={() => {
             localStorage.clear();
          }}
            >
              <span className="Loginside-button-label">
          logout
              </span>
            </button>
          </Link>
        </div>
        <div className="Header-options">
          <div className="Header-change-password">
            <Link to="/login">
              <button className="Loginside-button">
                <span className="Loginside-button-label">
          Change password
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="Header-options">
          <div className="Header-hello-user">Welcome, {props.username} !</div>
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
