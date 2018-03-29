import React from 'react';
import './Homepage.css';
import LoginSide from '../LoginSide';
import SignupSide from '../SignupSide';

class HomePage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="HomePage-Container">
        <div className="HomePage-signup"><SignupSide history={history} /></div>
        <div className="HomePage-login"><LoginSide history={history} message="Or login into your account" /></div>
      </div>
    );
  }
}

export default HomePage;

