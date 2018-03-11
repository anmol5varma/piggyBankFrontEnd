import React from 'react';
import PropTypes from 'prop-types';
import './Dashboardcontent.css';


const usernameField = () => (
  <div className="Dashboardcontent-header-field">
    <input type="text" placeholder="Username" className="Dashboardcontent-header-input-field" />
  </div>
);

const sendMoneyButton = () => (
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

const sendMoneyButtonInBody = () => (
  <div className="Dashboardcontent-body-transfer-button-wrapper">
    <button
      className="Dashboardcontent-body-transfer-button"
    >
      <span className="Dashboardcontent-body-transfer-button-label">
    Transfer money
      </span>
    </button>
  </div>
);

const amountField = () => (
  <div className="Dashboardcontent-header-field">
    <input type="number" placeholder="Amount" className="Dashboardcontent-header-input-field" />
  </div>
);

const DashboardContent = props => (
  <div className="Dashboardcontent-container">
    <div className="Dashboardcontent-playcard">
      <div className="Dashboardcontent-header">

        <div className="Dashboardcontent-header-wrapper">
          <div className="Dashboardcontent-header-balance">
            <div className="Dashboardcontent-header-balance-line">Your balance is</div>
            <div className="Dashboardcontent-header-balance-value">
              <i className="fas fa-rupee-sign Dashboardcontent-header-balance-icon" />
              <span className=" Dashboardcontent-header-balance-amount">{props.balance}</span>
            </div>
          </div>
        </div>

        <div className="Dashboardcontent-header-wrapper">
          <div className="Dashboardcontent-header-transfer-button-container">
            {sendMoneyButton()}
          </div>
        </div>

        <div className="Dashboardcontent-header-wrapper">
          <div className="Dashboardcontent-header-transfer-button-container">
            {miniStatementButton()}
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
              {usernameField()}
            </div>
            <div className="Dashboardcontent-body-form-amount">
              {amountField()}
            </div>
            <div className="Dashboardcontent-body-form-button">
              {sendMoneyButtonInBody()}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

DashboardContent.propTypes = {
  balance: PropTypes.string.isRequired,
};
export default DashboardContent;
