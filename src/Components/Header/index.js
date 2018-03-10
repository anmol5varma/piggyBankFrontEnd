import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = props => (
  <div className="Header-main">
    <div className="Header-logo">Piggy Bank</div>
    <div className="Header-user">
      <div className="Header-options">
        <div className="Header-logout">Logout</div>
      </div>
      <div className="Header-options">
        <div className="Header-change-password">Change password</div>
      </div>
      <div className="Header-options">
        <div className="Header-hello-user">Hello Anmol{props.username}</div>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
