import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="Header-main">
    <div className="Header-logo">Piggy Bank</div>
    <div className="Header-user">
      <div className="Header-options">
        <div className="Header-logout">
          <div className="Loginside-button-wrapper">
            <Link to="/user">
              {/* onClick={() => makeLoginRequest()} */}
              <button className="Header-button" >
                <span className="Header-button-label">
          logout
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="Header-options">
        <div className="Header-change-password">Change password</div>
      </div>
      <div className="Header-options">
        <div className="Header-hello-user">Hello {props.username}</div>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
