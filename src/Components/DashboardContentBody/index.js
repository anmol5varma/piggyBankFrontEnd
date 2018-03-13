import React from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import axios from 'axios';

class DashboardContentBody extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      amount: '',
      passowrd: '',
      incorrectPasswordError: '',
      incorrectUsernameError: '',
      incorrectAmountError: '',
      transactionError: '',
      screen: 1,
    };
  }
  render() {
    const sendMoneyButtonInBody = state => (
      <div className="Dashboardcontent-body-transfer-button-wrapper">
        <button
          className="Dashboardcontent-body-transfer-button"
          onClick={() => {
            state.setState({
              screen: 2,
            });
          }}
        >
          <span className="Dashboardcontent-body-transfer-button-label">
        Transfer money
          </span>
        </button>
      </div>
    );

    const transferMoney = (props) => {
      const data = {
        amount: this.state.amount,
        touserId: this.state.username,
        password: this.state.password,
      };
      const token = JSON.parse(localStorage.getItem('token'));
      console.log(token.token);
      const axiosConfig = {
        headers: {
          Authorization: token.token,
        },
      };
      console.log(data);
      axios.post('/transfer', data, axiosConfig)
        .then((response) => {
          console.log(response);
          if (response.data.status_code === 201) {
            alert('Transfer done successfully');
            props.updateBalance(response.data.balance);
            this.setState({
              screen: 1,
              username: '',
              amount: '',
            });
          } else if (response.data.message === 'Cannot transfer to your own account') {
            alert('Sorry,you cannot transfer to your own account');
            this.setState({
              transactionError: 'Sorry,you cannot transfer to your own account', screen: 1, username: '', amount: '',
            });
          } else if (response.data.status_code === 500) {
            this.setState({
              transactionError: 'Transaction failed due to some internal server error', screen: 1, username: '', amount: '',
            });
            alert(this.state.transactionError);
          } else if (response.data.status_code === 404) {
            this.setState({
              transactionError: 'Incorrect password', screen: 1, username: '', amount: '',
            });
            alert('Incorrect password');
          } else {
            this.setState({
              transactionError: 'Please check the input fields again', screen: 1, username: '', amount: '',
            });
            alert('Please check the input fields again');
          }
        })
        .catch((error) => {
          this.setState({
            transactionError: 'Please check the input fields again', screen: 1, username: '', amount: '',
          });
          alert('Please check the input fields again');
          console.log(error);
        });
    };

    const sendPasswordInBody = props => (
      <div className="Dashboardcontent-body-transfer-button-wrapper">
        <button
          className="Dashboardcontent-body-transfer-button"
          onClick={() => {
            transferMoney(props);
          }}
        >
          <span className="Dashboardcontent-body-transfer-button-label">
       Confirm Transfer
          </span>
        </button>
      </div>
    );

    const updatePassword = (event) => {
      this.setState({
        password: event.target.value,
        incorrectPasswordError: '',
        incorrectUsernameError: '',
      });
    };

    const passwordField = () => (
      <div className="Dashboardcontent-header-field">
        <input
          type="password"
          placeholder="Enter Password to Confirm Transfer`"
          className="Dashboardcontent-header-input-field"
          onChange={updatePassword}
          value={this.state.password}
        />
      </div>
    );

    const updateAmount = (event) => {
      this.setState({
        amount: event.target.value,
      });
    };

    const amountField = () => (
      <div className="Dashboardcontent-header-field">
        <input
          type="number"
          placeholder="Amount"
          className="Dashboardcontent-header-input-field"
          onChange={updateAmount}
          value={this.state.amount}
        />
      </div>
    );

    const updateUsername = (event) => {
      if (event.target.value.match(/^[a-zA-Z0-9_.-]*$/)) {
        this.setState({
          username: event.target.value,
          incorrectPasswordError: '',
          incorrectUsernameError: '',
        });
      }
    };

    const usernameField = () => (
      <div className="Dashboardcontent-header-field">
        <input
          type="text"
          placeholder="Username"
          className="Dashboardcontent-header-input-field"
          onChange={updateUsername}
          value={this.state.username}
        />
      </div>
    );

    if (this.state.screen === 2) {
      return (
        <div className="Dashboardcontent-body">
          <div className="Dashboardcontent-body-transfer-form">
            <div className="Dashboardcontent-body-form-transfer-form">
              <div className="Dashboardcontent-body-form-heading">
                <div className="Dashboardcontent-body-form-heading-label">Send money instantly</div>
              </div>
              <div className="Dashboardcontent-body-form-username">
                {usernameField(updateUsername)}
              </div>
              <div className="Dashboardcontent-body-form-amount">
                {amountField(updateAmount)}
              </div>

              <div className="Dashboardcontent-body-form-button">
                {sendMoneyButtonInBody(this)}
              </div>
              <div className="Dashboardcontent-body-form-amount">
                {passwordField(this.updatePassword, this)}
              </div>
              <div className="Dashboardcontent-body-form-button">
                {sendPasswordInBody(this.props)}
              </div>
              <div />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="Dashboardcontent-body">
        <div className="Dashboardcontent-body-transfer-form">
          <div className="Dashboardcontent-body-form-transfer-form">
            <div className="Dashboardcontent-body-form-heading">
              <div className="Dashboardcontent-body-form-heading-label">Send money instantly</div>
            </div>
            <div className="Dashboardcontent-body-form-username">
              {usernameField(this.updateUsername, this)}
            </div>
            <div className="Dashboardcontent-body-form-amount">
              {amountField(this.updateAmount, this)}
            </div>
            <div className="Dashboardcontent-body-form-button">
              {sendMoneyButtonInBody(this)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardContentBody;
