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
  updateUsername(event) {
    if (event.target.value.match(/^[a-zA-Z0-9_.-]+$/)) {
      this.setState({
        username: event.target.value,
      });
    }
  }

  makeLoginRequest() {
    axios.post('/login', {
      userName: this.state.password,
      password: this.state.username,
    }).then((response) => {
      console.log(response)
        .catch((err) => {
          console.log(err.message);
        });
    });
  }
  render() {
    return (
      <div className="Login-Container">
        <div className="Login-box">
          <h2 className="Login-heading">Login</h2>
          <div className="Login-fields">
            <input className="Login-input-field" type="text" value={this.state.username} placeholder="Username" />
          </div>
          <div className="Login-fields">
            <input className="Login-input-field" type="password" placeholder="Password" />
          </div>
          <div className="Login-fields">
            <button onClick={this.makeLoginRequest} className="Login-button">
              <span className="Login-button-label">Login</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
