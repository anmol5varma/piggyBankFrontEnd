
import { withAlert } from 'react-alert';
import React from 'react';
import './PasswordForgotForm.css';

const Axios = require('axios');


class PasswordForgotForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      incorrectUsernameError: '',
    };
  }

  render() {
    const form = (updateUserName, incorrectUsernameError) => (
      <div className="cont">
        <input
          type="text"
          placeholder="UserName"
          className="PasswordForgotForm-input-field"
          value={this.state.userName}
          onChange={updateUserName}
        />
        <div className="Error-message">{incorrectUsernameError}</div>
      </div>
    );
    const onForgotPassword = () => {
      Axios.post('/forgot/password', { username: this.state.userName }).then(() => {
        const message = 'An email has been sent to your Registered Email Id.Please visit your inbox to reset your password.';
        const promise = Promise.resolve(message);
        promise.then((message1) => {
          this.props.alert.success(message1, { onClose: () => this.props.history.push('/login') });
        });
      }).catch((err) => {
        if (err.response.data.message === 'Please enter correct UserName as no such User Exists!') {
          this.setState({
            incorrectUsernameError: 'Please enter correct UserName as no such User Exists!',
          });
        }
      });
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
