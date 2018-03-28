
import { withAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import React from 'react';
import './PasswordForgotForm.css';

const Axios = require('axios');

const form = (updateUserName, incorrectUsernameError) => (
  <div className="cont">
    <input
      type="text"
      placeholder="UserName"
      className="PasswordForgotForm-input-field"
      // value={this.state.userName}
      onChange={updateUserName}
    />
    <div className="Error-message">{incorrectUsernameError}</div>
  </div>
);

class PasswordForgotForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      incorrectUsernameError: '',
    };
  }
  render() {
    const onForgotPassword = () => {
      Axios.post('/forgot/password', { username: this.state.userName }).then(() => {
        const message = 'An email has been sent to your Registered Email Id.Please visit your inbox to reset your password.';
        const promise = Promise.resolve(message);
        promise.then((message1) => {
          this.props.alert.success(message1, { onClose: () => this.props.history.push('/login') });
        });
      });
      // axios.post('/login', {
      //   userName: this.state.username,
      //   password: this.state.password,
      // }).then((response) => {
      //   if (window.localStorage) {
      //     localStorage.setItem('token', JSON.stringify({ token: response.headers.token }));
      //   }
      //   this.props.history.push('/user');
      // }).catch((err) => {
      //   if (err.response.data.message === 'Please check password') {
      //     this.setState({
      //       incorrectPasswordError: 'Please enter correct password',
      //     });
      //   } else if (err.response.data.message === 'Please check user name') {
      //     this.setState({ incorrectUsernameError: 'Incorrect Username' });
      //   } else {
      //     this.setState({ incorrectUsernameError: 'Invaid Username' });
      //   }
      // });
    };
    const updateUserName = (event) => {
      if (event.target.value.match(/^[a-zA-Z0-9_.-]*$/)) {
        this.setState({
          userName: event.target.value,
          incorrectUsernameError: '',
        });
      }
    };

    return (
      <div className="PasswordForgotForm-container">
        <div className="PasswordForgotForm-box">
          <div className="PasswordForgotForm-welcome-message">
            <div className="PasswordForgotForm-heading">Your User Name</div>
            <div className="PasswordForgotForm-content">
              {form(
               updateUserName,
                this.state.incorrectUsernameError,
              )}
            </div>
            <div className="PasswordForgotForm-button-wrapper">
              <button className="PasswordForgotForm-button" onClick={() => onForgotPassword()}>
                <span className="PasswordForgotForm-button-label">
                Send E-Mail
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withAlert(PasswordForgotForm);
