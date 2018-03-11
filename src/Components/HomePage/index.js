import React from 'react';
import './HomePage.css';
import LoginSide from '../LoginSide';
import SignupSide from '../SignupSide';
// import propTypes from prop-types;
class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage-Container">
        <div className="HomePage-signup"><SignupSide setScreen={this.props.setScreen} /></div>
        <div className="HomePage-login"><LoginSide /></div>
      </div>
    );
  }
}

export default HomePage;
