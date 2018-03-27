import React from 'react';
import './PasswordForgot.css';
import LoginSide from '../LoginSide';
import SignupSide from '../SignupSide';
import PropTypes from 'prop-types';

class HomePage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="HomePage-Container">
        <div className="HomePage-signup"><SignupSide history={history} /></div>
        <div className="HomePage-login"><LoginSide history={history} /></div>
      </div>
    );
  }
}

export default HomePage;

