import { Link } from 'react-router-dom';
import React from 'react';
import './ResetPassword.css';
import TransparentInputField from '../TransparentInputField';

const Axios = require('axios');


class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPass1: '',
      newPass2: '',
      disabled: false,
      code: props.match.params.token,
    };
  }

  render() {
    const checkDisabled = () => {
      if (this.state.newPass1 === this.state.newPass2) {
        if (this.state.newPass1.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/) !== null) {
          this.setState({
            disabled: false,
          });
        } else {
          this.setState({
            disabled: true,
          });
        }
      } else {
        this.setState({
          disabled: true,
        });
      }
    };

    const onResetPassword = () => {
      Axios.post('/reset/password', { resetCode: this.state.code, newPassword: this.state.newPass1 }).then(() => {
        console.log('Password Reset successfull');
      });
    };

    const updateNewPassword1 = (event) => {
      this.setState({
        newPass1: event.target.value,
      });
    };
    const updateNewPassword2 = (event) => {
      this.setState({
        newPass2: event.target.value,
      }, () => {
        checkDisabled();
      });
    };

    return (
      <div className="change-password-container" >
        <TransparentInputField
          className="change-password-input-field-container"
          type="password"
          placeholder="Enter new password"
          value={this.state.newPass1}
          onChange={updateNewPassword1}
        />
        <TransparentInputField
          className="change-password-input-field-container"
          type="password"
          placeholder="Re-enter new password"
          value={this.state.newPass2}
          onChange={updateNewPassword2}
        />
        <div className="reset-password-button-container" >
          <button
            className="SignupContent-button"
            onClick={onResetPassword}
            disabled={this.state.disabled}
          >

            <span className="SignupContent-button-label">
                      Reset Password
            </span>
          </button>
        </div>
      </div>
    );
  }
}


export default ResetPassword;
