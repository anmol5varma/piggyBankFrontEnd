import React from 'react';
import './Loginside.css';

const form = () => (
  <div>
    <input type="text" placeholder="Username" className="Login-input-field" />
    <input type="password" placeholder="Password" className="Login-input-field" />
  </div>
);

const LoginSide = () => (
  <div className="Loginside-container">
    <div className="Loginside-box">
      <div className="Loginside-welcome-message">
        <div className="Loginside-heading">or login into your account</div>
        <div className="Loginside-content">
          {form()}
        </div>
        <div className="Loginside-button-wrapper">
          <button className="Loginside-button">
            <span className="Loginside-button-label">
          open account
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default LoginSide;
