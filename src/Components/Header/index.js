import { Link } from 'react-router-dom';
import React from 'react';
import './header.css';


class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showDropDown: false,
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
        <button
          className="header-options-button"
        >
          <span className="Header-options-button-label">
            {headerTitle}
          </span>
        </button>
      </div>
    );

    const showDropDown = () => {
      this.setState({
        showDropDown: !this.state.showDropDown,
      });
    };

    const dropdown = () => (
      <div className="Header-options">
        <div className="Header-options-dropdown">
          <button
            onClick={showDropDown}
            className="Header-options-dropdown-button"
          >
            <i className="fas fa-caret-down Header-options-dropdown-icon" />
          </button>
        </div>
      </div>
    );

    const dropdownList = () => (
      <div className="Header-dropdown-list">
        <div className="Header-dropdown-changepassword">
          {headerButtonChangePassword('Change password')}
        </div>
        <div>
          {headerButtonlogout('Logout')}
        </div>
      </div>
    );

    const userCircle = () => (
      <div className="Header-options">
        <div className="Header-user-icon-box">
          <i className="fas fa-user Header-user-icon" />
        </div>
      </div>
    );

    if (this.state.showDropDown) {
      return (
        <div className="Header-main">
          <div className="Header-logo">Piggy Bank</div>
          <div className="Header-user">
            {dropdown()}
            {userCircle()}
            {dropdownList()}
          </div>
        </div>
      );
    }
    return (
      <div className="Header-main">
        <div className="Header-logo">Piggy Bank</div>
        <div className="Header-user">
          {dropdown()}
          {userCircle()}
        </div>
      </div>
    );
  }
}


export default Header;
