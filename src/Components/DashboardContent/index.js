import React from 'react';
import PropTypes from 'prop-types';
import './Dashboardcontent.css';
import DashboardContentBody from '../DashboardContentBody';
import MiniStatement from '../MiniStatement';

const axios = require('axios');

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: 2,
      balance: '',
      MiniStatement: [],
    };
  }
  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('token'));
    const axiosConfig = {
      headers: {
        Authorization: token.token,
      },
    };
    console.log(token.token);
    axios.post('/user/balance', null, axiosConfig).then(response => this.setState({
      balance: response.data.currentBalance,
    })).then(() => {
      console.log(this.state.balance, '%%%%%%%%%%%');
    }).catch((err) => {
      console.log(err, '?????????????');
    });
  }


  render() {
    const getTransactionDetails = () => {
      const token = JSON.parse(localStorage.getItem('token'));
      console.log(token.token);
      const axiosConfig = {
        headers: {
          Authorization: token.token,
        },
      };
      axios.get('/user/miniStatement', axiosConfig)
        .then((response) => {
          console.log(response);
          if (response.data.length === 0) {
            this.setState({
              showComponent: 1,
            });
          } else {
            this.setState({
              miniStatement: response.data,
              showComponent: 1,
            });
          }
        })
        .catch((error) => {
          alert(error);
        });
    };
    const setMiniStatement = (response) => {
      console.log('Setting data');
      this.setState({
        miniStatement: response.data,
      });
    };
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
            getTransactionDetails();
          }}
          className="Dashboardcontent-header-transfer-button"
        >
          <span className="Dashboardcontent-header-transfer-button-label">
        Account summary
          </span>
        </button>
      </div>
    );

    const header = () => (
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
            <MiniStatement miniStatement={this.state.miniStatement} />
          </div>
        </div>
      );
    } else if (this.state.showComponent === 3) {
      return (
        <div className="Dashboardcontent-container">
          <div className="Dashboardcontent-playcard">
            {header(this.props)}
            <span> You have no transactions yet! Make one transaction now!</span>
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
