import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showDropDown: false,
      mouseLeave: false,
    };
  }
  render() {
    const headerButtonlogout = headerTitle => (
      <div className="Header-dropdown-list-item">
        <Link to="/login">
          <button
            onClick={() => {
             localStorage.clear();
          }}
            className="header-options-button"
          >
            <span className="Header-options-button-label">
              {headerTitle}
            </span>
          </button>
        </Link>
      </div>
    );

    const headerButtonChangePassword = headerTitle => (
      <div className="Header-dropdown-list-item">
        <Link to="/accountSettings">
          <button
            onClick={() => {

        }}
            className="header-options-button"
          >
            <span className="Header-options-button-label">
              {headerTitle}
            </span>
          </button>
        </Link>
      </div>
    );

    const showDropDown = () => {
      this.setState({
        showDropDown: !this.state.showDropDown,
        mouseLeave: false,
      });
    };
    const mouseLeaving = () => {
      this.setState({
        mouseLeave: true,
        showDropDown: !this.state.showDropDown,
      });
    };

    const dropdownList = () => (
      <div className={this.state.mouseLeave ? 'Header-dropdown-list-none' : 'Header-dropdown-list'} onMouseLeave={mouseLeaving}>
        <div className="Header-dropdown-changepassword">
          {headerButtonChangePassword('Settings')}
        </div>
        <div>
          {headerButtonlogout('Logout')}
        </div>
      </div>
    );

    const userCircle = () => (
      <div className="Header-options" onMouseOver={showDropDown} onFocus={showDropDown}>
        <div className="Header-user-icon-box" onMouseOver={showDropDown} onFocus={showDropDown}>
          <i className="fas fa-user Header-user-icon" onMouseOver={showDropDown} onFocus={showDropDown} />
        </div>
      </div>
    );
    return (
      <div className="Header-main">
        <div className="Header-logo">
          <Link to="/login">
            <a>
              <img src="/images/logo.png" className="Main-logo" alt="logo" />
            </a>
          </Link>
        </div>
        <div className="Header-user">
          <div className="Header-wallet">
            <div className="Header-wallet-icon">
              <i className="material-icons Dashboardcontent-header-wallet-icon Wallet-icon-name">
             account_balance_wallet
              </i>&nbsp;
            </div>
            <div className="Header-balance-info">
              <div className="Header-statement" >
                <span>Your balance</span>
              </div>
              <div className="Header-show-balance">
                <div className="Header-rupee">
                  <i className="fas fa-rupee-sign Dashboardcontent-header-balance-icon Wallet-icon-size" />
                </div>
                <div className="Header-balance">
                  <span>{this.props.balance}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
              </div>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p>Hello {this.props.username}</p>

          {userCircle()}
          {this.state.showDropDown ? dropdownList() : ''}
        </div>
      </div>
    );
  }
}


export default Header;
Header.propTypes = {
  username: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};
