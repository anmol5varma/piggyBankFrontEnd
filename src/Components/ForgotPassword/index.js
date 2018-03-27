import { Link } from 'react-router-dom';
import React from 'react';
import { withAlert } from 'react-alert';
import './ForgotPassword.css';
import TransparentInputField from '../TransparentInputField';

const Axios = require('axios');


class ResetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      noOfComponents: 0,
      userName: '',
    };
  }


  render() {
    const updateUserName = (event) => {
      this.setState({
        userName: event.target.value,
      });
    };
    const changeComponent = () => {
      this.setState({
        noOfComponents: 1,
      });
    };
    const onForgotPassword = () => {
      Axios.post('/forgot/password', { username: this.state.userName }).then(() => {
        changeComponent();
        const message = 'An email has been sent to your Registered Email Id';
        // .Please visit your inbox to reset your password';
        const promise = Promise.resolve(message);
        promise.then((message1) => {
          this.props.alert.success(message1, { onClose: () => this.props.history.push('/login') });
        });
      });
    };
    if (this.state.noOfComponents === 0) {
      return (
        <div className="Reset-Password-Outer-Container">
          <div className="Reset-Password-Inner-Container">
            <div className="Reset-Password-Box">
              <div className="username-container">
                <TransparentInputField
                  className="change-password-input-field-container"
                  type="text"
                  placeholder="Enter your userName"
                  value={this.state.userName}
                  onChange={updateUserName}
                />
              </div>
              <div className="reset-password-button-container" >
                <button
                  className="SignupContent-button"
                  onClick={onForgotPassword}
                  disabled={this.state.disabled}
                >

                  <span className="SignupContent-button-label">
                    Send E-Mail with Reset Password Link
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="Reset-Password-Outer-Container">
        <div className="Reset-Password-Inner-Container">
          <div className="Reset-Password-Box">
            <div className="username-container">
              <TransparentInputField
                className="input-username"
                type="text"
                placeholder="Enter your userName"
                value={this.state.userName}
                onChange={updateUserName}
              />
            </div>
            <div className="reset-password-button-container" >
              <button
                className="SignupContent-button"
                onClick={onForgotPassword}
                disabled={this.state.disabled}
              >

                <span className="SignupContent-button-label">
                  Send E-Mail
                </span>
              </button>
            </div>
            <div className="change-password-container" >
              An email has been sent to your Registered Email Id.Please visit your inbox to reset your password.
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withAlert(ResetPassword);
