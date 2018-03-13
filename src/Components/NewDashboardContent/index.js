import React from 'react';
import MiniStatement from '../NewMiniStatement';
import './Newdashboardcontent.css';

class DashboardContent extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: '10000',
    };
  }
  render() {
    const inputField = (onChangeFunction, inputType, placeholder) => (
      <div className="Dashboardcontent-header-transfer-box-inputfield">
        <input
          type={inputType}
          placeholder={placeholder}
          onChange={onChangeFunction}
        />
      </div>
    );

    return (
      <div className="Dashboardcontent-container">
        <div className="Dashboardcontent-wrapper">
          <div className="Dashboardcontent-username">Hello Anmol</div>
          <div className="Dashboardcontent-header">
            <div className="Dashboardcontent-header-balance">
              <div className="Dashboardcontent-header-wallet-circle">
                <div className="Dashboardcontent-header-wallet">
                  <i className="material-icons Dashboardcontent-header-wallet-icon">
        account_balance_wallet
                  </i>
                </div>
              </div>
              <div className="Dashboardcontent-header-balance-label">
                <div className="Dashboardcontent-header-balance-title">Balance</div>
                <div className="Dashboardcontent-header-balance-value">
                  <i className="fas fa-rupee-sign Dashboardcontent-header-balance-icon" />
                  <span className="Dashboardcontent-header-balance-amount">
                    {this.state.balance}
                  </span>
                </div>
              </div>
            </div>
            <div className="Dashboardcontent-header-transfer">
              <div className="Dashboardcontent-header-transfer-box">
                <div className="Dashboardcontent-header-transfer-box-title">transfer money</div>
                <div className="Dashboardcontent-header-transfer-box-inputs">
                  {inputField(null, 'text', 'Username')}
                  {inputField(null, 'number', 'Amount')}
                </div>
              </div>
            </div>
            <div className="Dashboardcontent-header-transfer-button-container">
              <div className="Dashboardcontent-header-transfer-button-wrapper">
                <button className="Dashboardcontent-header-transfer-button">
                  <span className="Dashboardcontent-header-transfer-button-title">
                  Transfer money
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="Dashboardcontent-statement">
            <MiniStatement />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardContent;
