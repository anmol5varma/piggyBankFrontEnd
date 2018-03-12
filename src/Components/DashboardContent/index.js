import React from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import './Dashboardcontent.css';
import axios from 'axios';

const usernameField = (updateUsername,state) => (
  <div className="Dashboardcontent-header-field">
    <input
      type="text"
      placeholder="Username"
      className="Dashboardcontent-header-input-field"
      onChange={updateUsername}
    // value = {state.state.username}
    />
  </div>
);

const sendMoneyButton = (state) => (
  <div className="Dashboardcontent-header-transfer-button-wrapper">
    <button
      className="Dashboardcontent-header-transfer-button"
     
    >
      <span className="Dashboardcontent-header-transfer-button-label">
    Transfer money
      </span>
    </button>
  </div>
);

const miniStatementButton = () => (
  <div className="Dashboardcontent-header-transfer-button-wrapper">
    <button
      className="Dashboardcontent-header-transfer-button"
    >
      <span className="Dashboardcontent-header-transfer-button-label">
    Account summary
      </span>
    </button>
  </div>
);

const sendMoneyButtonInBody = (state) => (
  <div className="Dashboardcontent-body-transfer-button-wrapper">
    <button
      className="Dashboardcontent-body-transfer-button"   onClick = {()=>{
        state.setState({
          screen:2,
        })
      }}
    >
      <span className="Dashboardcontent-body-transfer-button-label">
    Transfer money
      </span>
    </button>
  </div>
);
const sendPasswordInBody = (state) => (
  <div className="Dashboardcontent-body-transfer-button-wrapper">
    <button
      className="Dashboardcontent-body-transfer-button"   onClick = {()=>{
        state.setState({
          screen:2,
          username: '',
          amount: '',
        })
      }}
    >
      <span className="Dashboardcontent-body-transfer-button-label">
   Confirm Transfer
      </span>
    </button>
  </div>
);
const amountField = (updateAmount,state) => (
  <div className="Dashboardcontent-header-field">
    <input
      type="number"
      placeholder="Amount"
      className="Dashboardcontent-header-input-field"
      onChange={updateAmount}
    //  value={state.state.amount}
    />
  </div>
);

const passwordField = (updatePassword,state) => (
  <div className="Dashboardcontent-header-field">
    <input
      type="password"
      placeholder="Enter Password to Confirm Transfer`"
      className="Dashboardcontent-header-input-field"
      onChange={updatePassword}
   //   value = {state.state.passowrd}
    />
  </div>
);

class DashboardContent extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      amount: '',
      passowrd: '',
      incorrectPasswordError:'',
      incorrectUsernameError:'',
      incorrectAmountError:'',
      screen:1,
    };
  }
  updateUsername = (event) => {
    if (event.target.value.match(/^[a-zA-Z0-9_.-]*$/)) {
      this.setState({
        username: event.target.value,
        incorrectPasswordError: '',
        incorrectUsernameError: '',
      });
    }
  };

 updatePassword = (event) => {
    this.setState({
      password: event.target.value,
      incorrectPasswordError: '',
      incorrectUsernameError: '',
    });
  };
  render() {
    if(this.state.screen===2){
      return (
        <div className="Dashboardcontent-container">
          <div className="Dashboardcontent-playcard">
            <div className="Dashboardcontent-header">
  
              <div className="Dashboardcontent-header-wrapper">
                <div className="Dashboardcontent-header-balance">
                  <div className="Dashboardcontent-header-balance-line">Your balance is</div>
                  <div className="Dashboardcontent-header-balance-value">
                    <i className="fas fa-rupee-sign Dashboardcontent-header-balance-icon" />
                    <span className=" Dashboardcontent-header-balance-amount">{this.props.balance}</span>
                  </div>
                </div>
              </div>
  
              <div className="Dashboardcontent-header-wrapper">
                <div className="Dashboardcontent-header-transfer-button-container">
                  {sendMoneyButton(this)}
                </div>
              </div>
  
              <div className="Dashboardcontent-header-wrapper">
                <div className="Dashboardcontent-header-transfer-button-container">
                  {miniStatementButton(this)}
                </div>
              </div>
            </div>
            <div className="Dashboardcontent-body">
              <div className="Dashboardcontent-body-transfer-form">
                <div className="Dashboardcontent-body-form-transfer-form">
                  <div className="Dashboardcontent-body-form-heading">
                    <div className="Dashboardcontent-body-form-heading-label">Send money instantly</div>
                  </div>
                  <div className="Dashboardcontent-body-form-username">
                    {usernameField(this.updateUsername,this)}
                  </div>
                  <div className="Dashboardcontent-body-form-amount">
                    {amountField(this.updateAmount,this)}
                  </div>
                  
                  <div className="Dashboardcontent-body-form-button">
                    {sendMoneyButtonInBody(this)}
                  </div>
                  <div className="Dashboardcontent-body-form-amount">
                    {passwordField(this.updatePassword,this)}
                  </div>
                  <div className="Dashboardcontent-body-form-button">
                    {sendPasswordInBody(this)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="Dashboardcontent-container">
        <div className="Dashboardcontent-playcard">
          <div className="Dashboardcontent-header">

            <div className="Dashboardcontent-header-wrapper">
              <div className="Dashboardcontent-header-balance">
                <div className="Dashboardcontent-header-balance-line">Your balance is</div>
                <div className="Dashboardcontent-header-balance-value">
                  <i className="fas fa-rupee-sign Dashboardcontent-header-balance-icon" />
                  <span className=" Dashboardcontent-header-balance-amount">{this.props.balance}</span>
                </div>
              </div>
            </div>

            <div className="Dashboardcontent-header-wrapper">
              <div className="Dashboardcontent-header-transfer-button-container">
                {sendMoneyButton(this)}
              </div>
            </div>

            <div className="Dashboardcontent-header-wrapper">
              <div className="Dashboardcontent-header-transfer-button-container">
                {miniStatementButton(this)}
              </div>
            </div>
          </div>
          <div className="Dashboardcontent-body">
            <div className="Dashboardcontent-body-transfer-form">
              <div className="Dashboardcontent-body-form-transfer-form">
                <div className="Dashboardcontent-body-form-heading">
                  <div className="Dashboardcontent-body-form-heading-label">Send money instantly</div>
                </div>
                <div className="Dashboardcontent-body-form-username">
                  {usernameField(this.updateUsername)}
                </div>
                <div className="Dashboardcontent-body-form-amount">
                  {amountField(this.updateAmount)}
                </div>
                <div className="Dashboardcontent-body-form-button">
                  {sendMoneyButtonInBody(this)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DashboardContent.propTypes = {
  balance: PropTypes.string.isRequired,
};
export default DashboardContent;
