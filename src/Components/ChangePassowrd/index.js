import React from 'react';

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

const resetButtonInBody = () => (
  <div className="Dashboardcontent-body-transfer-button-wrapper">
    <button
      className="Dashboardcontent-body-transfer-button"
    >
      <span className="Dashboardcontent-body-transfer-button-label">
    Reset
      </span>
    </button>
  </div>
);

const amountField = () => (
  <div className="Dashboardcontent-header-field">
    <input type="number" placeholder="Amount" className="Dashboardcontent-header-input-field" />
  </div>
);

const usernameField = () => (
  <div className="Dashboardcontent-header-field">
    <input type="text" placeholder="Username" className="Dashboardcontent-header-input-field" />
  </div>
);

const DashboardContentBody = () => (
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
          {resetButtonInBody()}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardContentBody;
