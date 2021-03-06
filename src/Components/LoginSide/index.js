import axios from 'axios';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './Loginside.css';

const form = (updateUsername, updatePassword, incorrectPasswordError, incorrectUsernameError,_handleKeyPress) => (
  <div>
    <input
      type="text"
      placeholder="Username"
      className="Login-input-field"
      onChange={updateUsername}
      
    />
    <div className="Error-message">{incorrectUsernameError}</div>
    <input type="password" placeholder="Password" className="Login-input-field" onChange={updatePassword} onKeyPress={_handleKeyPress}/>
    <div className="Error-message">{incorrectPasswordError}</div>
    <div className="Forgot-Password">
      <Link to="/forgotPassword"><a>Forgot password?</a></Link>
    </div>
  </div>
);

class LoginSide extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      incorrectPasswordError: '',
      incorrectUsernameError: '',
    };
  }


  makeLoginRequest = () => {
    axios.post('/login', {
      userName: this.state.username,
      password: this.state.password,
    }).then((response) => {
      if (window.localStorage) {
        localStorage.setItem('token', JSON.stringify({ token: response.headers.token }));
      }
      this.props.history.push('/user');
    }).catch((err) => {
      if (err.response.data.message === 'Please check password') {
        this.setState({
          incorrectPasswordError: 'Please enter correct password',
        });
      } else if (err.response.data.message === 'Please check user name') {
        this.setState({ incorrectUsernameError: 'Incorrect Username' });
      } else {
        this.setState({ incorrectUsernameError: 'Invaid Username' });
      }
    });
  };
  updateUsername = (event) => {
    if (event.target.value.match(/^[a-zA-Z0-9_.-]*$/)) {
      this.setState({
        username: event.target.value,
        incorrectPasswordError: '',
        incorrectUsernameError: '',
      });
    }
  };

  updatePassword = (event) => {
    this.setState({
      password: event.target.value,
      incorrectPasswordError: '',
      incorrectUsernameError: '',
    });
  };
  render() {
    return (
      <div className="Loginside-container">
        <div className="Loginside-box">
          <div className="Loginside-welcome-message">
            <div className="Loginside-heading">{this.props.message}</div>
            <div className="Loginside-content">
              {form(
               this.updateUsername,
                this.updatePassword,
                this.state.incorrectPasswordError,
                this.state.incorrectUsernameError,
                this._handleKeyPress,
              )}
            </div>
            <div className="Loginside-button-wrapper">
              {/* <Link to={{ pathname: '/user', search: `?balance=${this.state.balance}` }}> */}
              <button className="Loginside-button" onClick={() => this.makeLoginRequest()}>
                <span className="Loginside-button-label">
          login
                </span>
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div id="google_translate_element" className="translate-button" />
      </div>
    );
  }
}

export default LoginSide;
LoginSide.propTypes = {
  history: PropTypes.shape.isRequired,
  message: PropTypes.string,
};
