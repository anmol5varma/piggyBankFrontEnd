import axios from 'axios';
import { Link } from 'react-router-dom';
import React from 'react';
import './PasswordForgotForm.css';

const form = (updateUsername, updatePassword, incorrectPasswordError, incorrectUsernameError) => (
  <div className="cont">
    <input
      type="text"
      placeholder="Username"
      className="Login-input-field"
      onChange={updateUsername}
    />
    <div className="Error-message">{incorrectUsernameError}</div>
    <input
      type="password"
      placeholder="Password"
      className="Login-input-field"
      onChange={updatePassword}
    />
    <div className="Error-message">{incorrectPasswordError}</div>
    <div className="Forgot-Password">
      <Link to="/forgotPassword"><a>Forgot password?</a></Link>
    </div>
  </div>
);

class PasswordForgotForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      incorrectPasswordError: '',
      incorrectUsernameError: '',
    };
  }
  render() {
    const makeLoginRequest = () => {
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
    const updateUsername = (event) => {
      if (event.target.value.match(/^[a-zA-Z0-9_.-]*$/)) {
        this.setState({
          username: event.target.value,
          incorrectPasswordError: '',
          incorrectUsernameError: '',
        });
      }
    };

    const updatePassword = (event) => {
      this.setState({
        password: event.target.value,
        incorrectPasswordError: '',
        incorrectUsernameError: '',
      });
    };
    return (
      <div className="PasswordForgotForm-container">
        <div className="PasswordForgotForm-box">
          <div className="PasswordForgotForm-welcome-message">
            <div className="PasswordForgotForm-heading">Your User Name</div>
            <div className="PasswordForgotForm-content">
              {form(
               updateUsername,
                updatePassword,
                this.state.incorrectPasswordError,
                this.state.incorrectUsernameError,
              )}
            </div>
            <div className="PasswordForgotForm-button-wrapper">
              <button className="PasswordForgotForm-button" onClick={() => makeLoginRequest()}>
                <span className="PasswordForgotForm-button-label">
          login
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PasswordForgotForm;
