import React from 'react';
import './Login.css';

const axios = require('axios');

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    const makeLoginRequest = () => {
      axios.post('/login', {
        userName: this.state.username,
        password: this.state.password,
      }).then((response) => {
        console.log(response);
      }).catch((err) => {
        console.log('error', err.message);
      });
    };
    const updateUsername = (event) => {
      if (event.target.value.match(/^[a-zA-Z0-9_.-]*$/)) {
        this.setState({
          username: event.target.value,
        });
      }
    };

    const updatePassword = (event) => {
      this.setState({
        password: event.target.value,
      });
    };
    return (
      <div className="Login-Container">
        <div className="Login-box">
          <h2 className="Login-heading">Login</h2>
          <div className="Login-fields">
            <input
              className="Login-input-field"
              type="text"
              onChange={updateUsername}
              value={this.state.username}
              placeholder="Username"
            />
          </div>
          <div className="Login-fields">
            <input
              onChange={updatePassword}
              className="Login-input-field"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="Login-fields">
            <button onClick={makeLoginRequest} className="Login-button">
              <span className="Login-button-label">Login</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
