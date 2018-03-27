import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    };
  }


  render() {
    const checkDisabled = () => {
      if (this.state.currentPassword.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/) !== null) {
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
      } else {
        this.setState({
          disabled: true,
        });
      }
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
      this.props.onSubmit(this.state.currentPassword, this.state.newPass1, this.state.newPass2);
      this.setState({
        currentPassword: '',
        newPass1: '',
        newPass2: '',
        disabled: true,
      });
    };


    return (
      <div className="change-password-container" >
        <TransparentInputField className="change-password-input-field-container" type="password" placeholder="Enter current password" value={this.state.currentPassword} onChange={updateCurrentPassword} />
        <TransparentInputField className="change-password-input-field-container" type="password" placeholder="Enter new password" value={this.state.newPass1} onChange={updateNewPassword1} />
        <TransparentInputField className="change-password-input-field-container" type="password" placeholder="Re-enter new password" value={this.state.newPass2} onChange={updateNewPassword2} />
        <div className="password-message">
          {this.props.message}
        </div>
        {/* <FormButton buttonClassName="change-password-button" value="Change Password" disabled={this.state.disabled} onClick={onChangePassword} /> */}
        <div className="reset-password-button-container" >
          <button
            className="SignupContent-button"
            onClick={onChangePassword}
            disabled={this.state.disabled}
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
export default ChangePasswordForm;
