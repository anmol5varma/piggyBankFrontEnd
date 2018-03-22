import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';

import './AccountSettings.css';

import VerticalTabs from '../VerticalTabs';
import ChangePasswordForm from '../ChangePasswordForm';
import SettingsCard from '../SettingsCard';
import AccountDetails from '../AccountDetails';

class AccountSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordMessage: '',
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
    return (
      <div className="account-settings-container">
        <VerticalTabs className="account-vertical-tabs" />
        <div className="account-tab-container">
          <SettingsCard title="Account Details" >
            <AccountDetails getUserDetails={getUserDetails} />
          </SettingsCard>
          <SettingsCard title="Notification Settings">
            <label>
              <input type="checkbox" value="I want notifications" /> I want notifications
            </label>
          </SettingsCard>
          <SettingsCard title="Change Password">
            <ChangePasswordForm onSubmit={onChangePassword} message={this.state.passwordMessage} />
          </SettingsCard>
        </div>
      </div>
    );
  }
}

// AccountSettings.propTypes = {
//   username: PropTypes.string.isRequired,

// };


export default AccountSettings;

