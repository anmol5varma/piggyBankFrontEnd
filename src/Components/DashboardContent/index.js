import React from 'react';
import PropTypes from 'prop-types';
import './Dashboardcontent.css';
import DashboardContentBody from '../DashboardContentBody';
import MiniStatement from '../MiniStatement';

// const usernameField = () => (
//   <div className="Dashboardcontent-header-field">
//     <input type="text" placeholder="Username" className="Dashboardcontent-header-input-field" />
//   </div>
// );

// const sendMoneyButtonInBody = () => (
//   <div className="Dashboardcontent-body-transfer-button-wrapper">
//     <button
//       className="Dashboardcontent-body-transfer-button"
//     >
//       <span className="Dashboardcontent-body-transfer-button-label">
//     Transfer money
//       </span>
//     </button>
//   </div>
// );
//
// const amountField = () => (
//   <div className="Dashboardcontent-header-field">
//     <input type="number" placeholder="Amount" className="Dashboardcontent-header-input-field" />
//   </div>
// );

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: 2,
      balance: props.balance,
    };
  }
  render() {
    const sendMoneyButton = () => (
      <div className="Dashboardcontent-header-transfer-button-wrapper">
        <button
          onClick={() => {
            this.setState({
              showComponent: 2,
            });
          }}
          className="Dashboardcontent-header-transfer-button"
        >
          <span className="Dashboardcontent-header-transfer-button-label">
        Transfer money
          </span>
        </button>
      </div>
    );

    const changeBalance = (value) => {
      this.setState({
        balance: value,
      });
    };
    const miniStatementButton = () => (
      <div className="Dashboardcontent-header-transfer-button-wrapper">
        <button
          onClick={() => {
            this.setState({
              showComponent: 1,
            });
          }}
          className="Dashboardcontent-header-transfer-button"
        >
          <span className="Dashboardcontent-header-transfer-button-label">
        Account summary
          </span>
        </button>
      </div>
    );

    const header = props => (
      <div className="Dashboardcontent-header">
        <div className="Dashboardcontent-header-wrapper">
          <div className="Dashboardcontent-header-balance">
            <div className="Dashboardcontent-header-wallet">
              <i className="material-icons Dashboardcontent-header-wallet-icon">
          account_balance_wallet
              </i>
            </div>
          </div>
          <div className="Dashboardcontent-header-balance">
            <div className="Dashboardcontent-header-balance-line">Your balance is</div>
            <div className="Dashboardcontent-header-balance-value">
              <i className="fas fa-rupee-sign Dashboardcontent-header-balance-icon" />
              <span className=" Dashboardcontent-header-balance-amount">{this.state.balance}</span>
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
    );
    if (this.state.showComponent === 1) {
      return (
        <div className="Dashboardcontent-container">
          <div className="Dashboardcontent-playcard">
            {header(this.props)}
            <MiniStatement />
          </div>
        </div>
      );
    }
    return (
      <div className="Dashboardcontent-container">
        <div className="Dashboardcontent-playcard">
          {header(this.props)}
          <DashboardContentBody updateBalance={changeBalance} />
        </div>
      </div>
    );
  }
}

DashboardContent.propTypes = {
  balance: PropTypes.string.isRequired,
};
export default DashboardContent;
