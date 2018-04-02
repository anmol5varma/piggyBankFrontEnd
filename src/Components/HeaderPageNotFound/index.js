import { Link } from 'react-router-dom';
import React from 'react';
import './render.css';


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

    const dropdown = () => (
      <div className="Header-options">
        <div className="Header-options-dropdown">
          <button
            onClick={showDropDown}
            className="Header-options-dropdown-button"
          >
            {/* <i className="fas fa-bars header-dropdown" /> */}
            {/* <i className="fas fa-caret-down Header-options-dropdown-icon" /> */}
          </button>
        </div>
      </div>
    );

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
      </div>
    );
  }
}


export default Header;
