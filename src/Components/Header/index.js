import { Link } from 'react-router-dom';
import React from 'react';
import './header.css';

const headerButtonlogout = headerTitle => (
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
const headerButtonChangePassword = headerTitle => (
  <div className="Header-options">
    <button
      className="header-options-button"
    >
      <span className="Header-options-button-label">
        {headerTitle}
      </span>
    </button>
  </div>
);
const Header = () => (
  <div className="Header-main">
    <div className="Header-logo">Piggy Bank</div>
    <div className="Header-user">
      <div className="Header-logout">{headerButtonlogout('Logout')}</div>
      <div className="Header-change-password">{headerButtonChangePassword('Change password')}</div>
      <div className="Header-options" />
    </div>
  </div>
);


export default Header;
