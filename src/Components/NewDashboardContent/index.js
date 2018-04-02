import React from 'react';
import { withAlert } from 'react-alert';
import Pusher from 'pusher-js';
import axios from 'axios';
import PropTypes from 'prop-types';
import MiniStatement from '../MiniStatement';
import './Newdashboardcontent.css';


class DashboardContent extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      username: '',
      usernameError: 'hello',
      amountError: 'hello',
      showComponent: 1,
      password: '',
      transactionError: '',
      amount: '',
      miniStatement: [],
      suggestions: [],

    };
  }

  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('token'));
    const axiosConfig = {
      headers: {
        Authorization: token.token,
      },
    };
    axios.post('/user/balance', null, axiosConfig).then((response) => {
      this.setState({
        balance: response.data.currentBalance,
      });
      return response;
    }).then((response) => {
      this.getTransactionDetails();
      Pusher.logToConsole = true;
      const pusher = new Pusher('a96a1aff13cc3d3aa6e8', {
        cluster: 'us2',
        encrypted: true,
      });
      const channel = pusher.subscribe('transfer-channel');
      channel.bind('transfer-event', (data) => {
        const message = `Congratulations! ${data.name} sent you ${data.amount} rupees`;
        if (response.data.userId === data.to) {
          this.props.alert.success(message, {
            onClose: () => { this.getTransactionDetails(); },
          });
        }
      });
    }).catch(() => {
      this.props.alert.error('Internal server error in fetching your balance');
    });
  }
  getTransactionDetails() {
    const token = JSON.parse(localStorage.getItem('token'));
    const data = {
      transactionsCount: this.state.transactionsCount,
    };
    const axiosConfig = {
      headers: {
        Authorization: token.token,
      },
    };
    axios.post('/user/miniStatement', data, axiosConfig)
      .then((response) => {
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
  }

  render() {
    const sugg = this.state.suggestions;
    let suggestionList = '';
    if (sugg === [] || sugg === undefined) {
    } else {
      suggestionList = sugg.map(step =>
        (
          <div
            className="dropdown-suggestion-item"
            onClick={() => setUserName(step.userName)}
          >

            <div
              className="suggestion-dropdown-elements"
              eventKey={step.userId}
            >
              <div className="Transfer-Money_User-Name">{step.userName}</div> <div className="Transfer-Money-Full-Name">{step.name}</div>
            </div>
          </div>
        ));
    }

    const updatePassword = (event) => {
      this.setState({
        password: event.target.value,
      });
    };
    const inputField = (onChangeFunction, inputType, placeholder, error, value) => {
      if (placeholder === 'Username') {
        return (
          <div className="Dashboardcontent-header-transfer-box-inputfield">
            <input
              type={inputType}
              placeholder={placeholder}
              onChange={onChangeFunction}
              value={value}
            />
            <div className={(this.state.suggestions === [] || this.state.suggestions === null) ? 'displaySuggestions' : 'hideSuggestions'} >{suggestionList}</div>
          </div>
        );
      }
      return (
        <div className="Dashboardcontent-header-transfer-box-inputfield">
          <input
            type={inputType}
            placeholder={placeholder}
            onChange={onChangeFunction}
            value={value}
          />
        </div>
      );
    };
    const showSuccessAlert = (message) => {
      this.props.alert.success(message, {
        onClose: () => {
          this.getTransactionDetails();
          this.props.updateHeaderBalance(this.state.amount);
          this.setState({
            amount: '',
            username: '',
            password: '',
          });
        },
      });
    };
    const setComponent = (component) => {
      this.setState({
        showComponent: component,
      });
    };
    const showErrorAlert = (message) => {
      this.props.alert.error(message);
    };

    const setUserNameAndAmount = (userNameError, amountError, transactionError) => {
      this.setState({
        usernameError: userNameError,
        amountError,
        transactionError,
      });
    };
    const updateBalance = (balance) => {
      this.setState({
        balance,
      });
    };
    const setTransactionNumber = (count) => {
      this.setState({ transactionsCount: count }, () => {
        this.getTransactionDetails();
      });
    };
    const confirmPasswordAndTransfer = () => {
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
      axios.post('/transfer', data, axiosConfig)
        .then((response) => {
          if (response.data.status_code === 201) {
            showSuccessAlert('Transfer Done');
            updateBalance(response.data.balance);
            setComponent(1);
            setUserNameAndAmount('', '', '');
          } else if (response.data.status_code === 500) {
            showErrorAlert('Transaction failed due to internal server error!');
            setComponent(1);
            setUserNameAndAmount('', '', 'Transaction failed due to internal server error!');
          } else if (response.data.status_code === 404) {
            showErrorAlert('Incorrect password');
            setComponent(1);
            setUserNameAndAmount('', '', '');
          } else {
            showErrorAlert('Check input fields again');
            setComponent(1);
            setUserNameAndAmount('', '', 'Check input fields again');
          }
        })
        .catch((error) => {
          showErrorAlert(error.message);
          setComponent(1);
          setUserNameAndAmount('', '', error.message);
        });
    };
    const showPasswordField = () => {
      this.setState({
        showComponent: 2,
      });
    };
    const showErrors = (response) => {
      if (this.state.amount < 100 || this.state.amount > 20000) {
        showErrorAlert('Please check amount, min amount amount you can transfer is 100 and maximum amount is 20,000');
        setUserNameAndAmount('', 'Please check amount', '');
      } else if (this.state.amount > this.state.balance) {
        showErrorAlert('Oops,you cannot transfer more than your account balance');
        setUserNameAndAmount('', 'Cannot transfer money more than account balance', '');
      } else if (response.data.message === 'The username does not exist') {
        showErrorAlert('Please check username');
        setUserNameAndAmount('Check username', '', '');
      } else if (this.state.username === this.props.username) {
        showErrorAlert('Oops, you cannot tranfer money to your own account');
        setUserNameAndAmount('Cannot transfer money to your own account', '', '');
      } else {
        showPasswordField();
      }
    };
    const updateAmount = (event) => {
      this.setState({
        amount: event.target.value,
      });
    };
    const confirmTransfer = () => {
      if (this.state.password !== '') {
        confirmPasswordAndTransfer();
      } else {
        showErrorAlert('Enter password please');
      }
    };

    const transferMoney = () => {
      const token = JSON.parse(localStorage.getItem('token'));
      const axiosConfig = {
        headers: {
          Authorization: token.token,
        },
      };
      const data = {
        username: this.state.username,
      };
      axios.post('/usernames', data, axiosConfig).then((response) => {
        console.log(response);
        showErrors(response);
      });
    };
    const updateUsername = (event) => {
      const userName = event.target.value;
      if (event.target.value.match(/^[a-zA-Z0-9_.-]*$/)) {
        this.setState({
          username: event.target.value,
        }, () => {
          const token = JSON.parse(localStorage.getItem('token'));
          const axiosConfig = {
            headers: {
              Authorization: token.token,
            },
          };
          console.log(token.token, '88');

          axios.get(`/search/${userName}`, axiosConfig)
            .then((selectedOption) => {
              const resultArray = selectedOption.data;
              return resultArray;
            })
            .then((data) => {
              if (data !== undefined) {
                this.setState({
                  suggestions: data.data,
                });
              }
              return data;
            }).catch(() => {
              this.setState({
                suggestions: [],
              });
            });
        });
      }
    };

    const setUserName = (name) => {
      this.setState({
        username: name,
        suggestions: [],
      });
    };


    //  console.log(this.state.miniStatement);
    return (
      <div className="Dashboardcontent-container">
        <div className="Dashboardcontent-wrapper">
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

                  {inputField(updateUsername, 'text', 'Username', this.state.usernameError, this.state.username)}
                  {inputField(updateAmount, 'number', 'Amount', this.state.amountError, this.state.amount)}
                  {this.state.showComponent === 2 ?
                   (inputField(updatePassword, 'password', 'Password', this.state.passwordError, this.state.password))
                  : (<div />)
                  }
                </div>
              </div>
            </div>
            <div className="Dashboardcontent-header-transfer-button-container">
              {this.state.showComponent === 1 ?
                (<div className="Dashboardcontent-header-transfer-button-wrapper">
                  <button
                    className="Dashboardcontent-header-transfer-button"
                    onClick={() => {
                    transferMoney();
                 }}
                  >
                    <span className="Dashboardcontent-header-transfer-button-title">
                  Transfer money
                    </span>
                  </button>
                </div>
              ) :
              (
                <div className="Dashboardcontent-header-transfer-button-wrapper">
                  <button
                    className="Dashboardcontent-header-transfer-button"
                    onClick={() => {
                    confirmTransfer();
                 }}
                  >
                    <span className="Dashboardcontent-header-transfer-button-title">
                  Confirm Transfer
                    </span>
                  </button>
                </div>)}

            </div>
          </div>
          <div className="Dashboardcontent-statement">
            <MiniStatement setTransactionNumber={setTransactionNumber} transactionsCount={this.state.transactionsCount} miniStatement={this.state.miniStatement} />
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert(DashboardContent);

DashboardContent.propTypes = {
  username: PropTypes.string.isRequired,
  updateHeaderBalance: PropTypes.func.isRequired,
};
