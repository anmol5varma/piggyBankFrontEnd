import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const headerButton = headerTitle => (
  <div className="Header-options">
    <Link to="/login">
      <button
        onClick={() => {
         localStorage.clear();
      }}
        className="header-options-button"
      >
        <span className="Header-options-button-label">
          {headerTitle}
        </span>
      </button>
    </Link>
  </div>
);

const Header = props => (
  <div className="Header-main">
    <div className="Header-logo">Piggy Bank</div>
    <div className="Header-user">
      <div className="Header-logout">{headerButton('Logout')}</div>
      <div className="Header-change-password">{headerButton('Change password')}</div>
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
