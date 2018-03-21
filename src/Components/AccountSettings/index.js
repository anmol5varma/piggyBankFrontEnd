import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';

import './AccountSettings.css';

import VerticalTabs from '../VerticalTabs';
import ChangePasswordForm from '../ChangePasswordForm';

class AccountSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordMessage: '',
    };
  }
  render() {
    const onChangePassword = (currPassword, newPass1, newPass2) => {
      const token = JSON.parse(localStorage.getItem('token'));
      const axiosConfig = {
        headers: {
          Authorization: token.token,
        },
      };
      Axios.post('/users/password', { currentpassword: currPassword, newpassword: newPass1, retypepassword: newPass2  }, axiosConfig).then((response) => {
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
        <ChangePasswordForm onSubmit={onChangePassword} message={this.state.passwordMessage} />
      </div>
    );
  }
}

// AccountSettings.propTypes = {
//   username: PropTypes.string.isRequired,

// };


export default AccountSettings;

