import { Link } from 'react-router-dom';
import React from 'react';
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
        // console.log('Password Reset successfull');
      });
    };
    if (this.state.noOfComponents === 0) {
      return (
        <div>
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
      );
    }
    return (
      <div>
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
        <div className="change-password-container" >
         An email has been sent to your Registered Email Id.Please visit your inbox to reset your password.
        </div>
      </div>
    );
  }
}


export default ResetPassword;
