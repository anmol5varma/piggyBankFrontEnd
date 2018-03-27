import { Link } from 'react-router-dom';
import React from 'react';
import { withAlert } from 'react-alert';
import './ResetPassword.css';
// import TransparentInputField from '../TransparentInputField';

const Axios = require('axios');


class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPass1: '',
      newPass2: '',
      disabled: true,
      code: props.match.params.token,
    };
  }

  render() {
    console.log(this.state.disabled);

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
      // console.log(this.state.disabled);
      // Axios.post('/reset/password', { resetCode: this.state.code, newPassword: this.state.newPass1 }).then(() => {
      //   console.log('Password Reset successfull');
      //   const message1 = 'Password Reset successfull';
      //   this.props.alert.success(message1, { onClose: () => this.props.history.push('/login') });
      // });
      const message1 = checkDisabled();
      if (this.state.disabled) {
        // const message1 = 'Password galat hai';
        this.props.alert.error(message1);
      } else {
        Axios.post('/reset/password', { resetCode: this.state.code, newPassword: this.state.newPass1 }).then(() => {
          // console.log('Password Reset successfull');
          // const message1 = 'Password Reset successfull';
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

    return (
      <div className="Reset-Password-Outer-Container">
        <div className="Reset-Password-Inner-Container">
          <div className="Signupside-logo">DigiBank</div>
          <div className="Reset-Password-Content">
            Please Enter Your Current Password and Your New Password.
          </div>
          <div className="Reset-Password-Box">
            <input
              className="change-password-input-field-container"
              type="password"
              placeholder="Enter new password"
              value={this.state.newPass1}
              onChange={updateNewPassword1}
            />
            <input
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
              >

                <span className="SignupContent-button-label">
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


export default withAlert(ResetPassword);
