import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';

import './AccountSettings.css';
import ChangePasswordForm from '../ChangePasswordForm';
import SettingsCard from '../SettingsCard';
import AccountDetails from '../AccountDetails';

class AccountSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordMessage: '',
      noOfComponents: 0,
    };
  }

  render() {
    const getUserDetails = () => {
      const token = JSON.parse(localStorage.getItem('token'));
      const axiosConfig = {
        headers: {
          Authorization: token.token,
        },
      };
      return Axios.get('/user/details', axiosConfig).then(response => response);
    };
    const changeComponent = () => {
      this.setState({
        noOfComponents: 1,
      });
    };
    const onChangePassword = (currPassword, newPass1, newPass2) => {
      const token = JSON.parse(localStorage.getItem('token'));
      const axiosConfig = {
        headers: {
          Authorization: token.token,
        },
      };
      Axios.post('/users/password', { currentpassword: currPassword, newpassword: newPass1, retypepassword: newPass2 }, axiosConfig).then((response) => {
        this.setState({
          passwordMessage: response.data.message,
        });
      }).catch((err) => {
        this.setState({
          passwordMessage: err.response.data.message,
        });
      });
    };
    if (this.state.noOfComponents === 0) {
      return (
        <div className="account-settings-container">
          <div className="Account-Profile" >
            <div className="account-details-image-container">
              <img className="BankUser-image" src="/images/bankUser.png" alt="" />
            </div>
          </div>
          <div className="account-tab-container">
            <SettingsCard title="Account Details" >
              <AccountDetails
                noOfComponents={this.state.noOfComponents}
                changeComponent={changeComponent}
                getUserDetails={getUserDetails}
              />
            </SettingsCard>
          </div>
        </div>
      );
    }
    return (
      <div className="account-settings-container">
        <div className="Account-Profile" >
          <div className="account-details-image-container">
            <img className="BankUser-image" src="/images/bankUser.png" alt="" />
          </div>
        </div>
        <div className="account-tab-container">
          <SettingsCard title="Account Details" >
            <AccountDetails
              noOfComponents={this.state.noOfComponents}
              changeComponent={changeComponent}
              getUserDetails={getUserDetails}
            />
          </SettingsCard>
          <SettingsCard title="Change Password">
            <ChangePasswordForm onSubmit={onChangePassword} message={this.state.passwordMessage} />
          </SettingsCard>
        </div>
      </div>
    );
  }
}


export default AccountSettings;

