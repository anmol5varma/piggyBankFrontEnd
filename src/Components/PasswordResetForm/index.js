
import { withAlert } from 'react-alert';
import React from 'react';
import './PasswordResetForm.css';

const Axios = require('axios');


class PasswordResetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPass1: '',
      newPass2: '',
      disabled: true,
      code: props.token,
      errorMessage: '',
    };
  }

  render() {
    const checkDisabled = () => {
      let message;
      if (this.state.newPass1 === this.state.newPass2) {
        if (this.state.newPass1.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/) !== null) {
          this.setState({
            disabled: false,
          });
          message = 'Password Reset successfull';
        } else {
          this.setState({
            disabled: true,
          });
          message = 'Password must have minimum 6, maximum 16,and  atleast 1 upper case, 1 lower case,1 number and 1 special character ';
        }
      } else {
        this.setState({
          disabled: true,
        });
        message = 'Both Passwords dont match!';
      }
      return message;
    };


    const onResetPassword = () => {
      const message1 = checkDisabled();
      if (this.state.disabled) {
        this.props.alert.error(message1);
      } else {
        Axios.post('/reset/password', { resetCode: this.state.code, newPassword: this.state.newPass1 }).then(() => {
          this.props.alert.success(message1, { onClose: () => this.props.history.push('/login') });
        });
      }
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


    const form = (updateNewPassword1, updateNewPassword2, errorMessage) => (
      <div className="cont">
        <input
          type="password"
          placeholder="Enter new password"
          className="PasswordResetForm-input-field"
          value={this.state.userName}
          onChange={updateNewPassword1}
        />
        <input
          type="password"
          placeholder="Re-enter new password"
          className="PasswordResetForm-input-field"
          value={this.state.userName}
          onChange={updateNewPassword2}
        />

        <div className="Error-message">{errorMessage}</div>
      </div>
    );


    return (
      <div className="PasswordResetForm-container">
        <div className="PasswordResetForm-box">
          <div className="PasswordResetForm-welcome-message">
            <div className="PasswordResetForm-heading">Your User Name</div>
            <div className="PasswordResetForm-content">
              {form(
               updateNewPassword1,
               updateNewPassword2,
               this.state.errorMessage,
              )}
            </div>
            <div className="PasswordResetForm-button-wrapper">
              <button className="PasswordResetForm-button" onClick={() => onResetPassword()}>
                <span className="PasswordResetForm-button-label">
                Reset Password
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withAlert(PasswordResetForm);
