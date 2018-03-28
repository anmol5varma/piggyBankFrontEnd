import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAlert } from 'react-alert';

import './ChangePasswordForm.css';

import TransparentInputField from '../TransparentInputField';
import FormButton from '../FormButton';


class ChangePasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPassword: '',
      newPass1: '',
      newPass2: '',
      disabled: true,
      message: '',
    };
  }


  render() {
    const checkDisabled = () => {
      let message;
      if (this.state.currentPassword.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/) !== null) {
        if (this.state.newPass1 === this.state.newPass2) {
          if (this.state.newPass1.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/) !== null) {
            this.setState({
              disabled: false,
            });
            message = 'Password Change successful';
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
      } else {
        this.setState({
          disabled: true,
        });
        message = 'Your Current Password Is Incorrect!';
      }
      return message;
    };

    const updateCurrentPassword = (event) => {
      this.setState({
        currentPassword: event.target.value,
      }, () => {
        checkDisabled();
      });
    };
    const updateNewPassword1 = (event) => {
      this.setState({
        newPass1: event.target.value,
      }, () => {
        checkDisabled();
      });
    };
    const updateNewPassword2 = (event) => {
      this.setState({
        newPass2: event.target.value,
      }, () => {
        checkDisabled();
      });
    };

    const onChangePassword = () => {
      const message1 = checkDisabled();
      if (this.state.disabled) {
        // this.props.alert.error(message1);
        this.setState({
          message: message1,
        });
      } else {
        this.props.onSubmit(this.state.currentPassword, this.state.newPass1, this.state.newPass2).then(() => {
          this.props.alert.success(message1);
        });
        this.setState({
          currentPassword: '',
          newPass1: '',
          newPass2: '',
          disabled: false,
          message: '',
        });
      }
    };


    return (
      <div className="change-password-container" >
        <TransparentInputField
          className="change-password-input-field-container"
          type="password"
          placeholder="Enter current password"
          value={this.state.currentPassword}
          onChange={updateCurrentPassword}
        />
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
        <div className="password-message">
          {this.state.message}
        </div>
        <div className="reset-password-button-container" >
          <button
            className="SignupContent-button"
            onClick={onChangePassword}
            // disabled={this.state.disabled}
          >

            <span className="SignupContent-button-label">
                      Change Password
            </span>
          </button>
        </div>
      </div>
    );
  }
}

ChangePasswordForm.propTypes = {
  message: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,

};

ChangePasswordForm.defaultProps = {
  message: '',
};

export default withAlert(ChangePasswordForm);
