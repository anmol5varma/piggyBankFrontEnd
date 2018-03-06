import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="Login-Container">
        <div className="Login-box">
          <h2 className="Login-heading">Login</h2>
          <div className="Login-fields">
            <input className="Login-input-field" type="text" placeholder="username" />
          </div>
          <div className="Login-fields">
            <input className="Login-input-field" type="password" placeholder="password" />
          </div>
          <div className="Login-fields">
            <button className="Login-button">
              <span className="Login-button-label">Login</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
