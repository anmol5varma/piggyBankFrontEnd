import React from 'react';
import './Homepage.css';
import LoginSide from '../LoginSide';
import SignupSide from '../SignupSide';
// import propTypes from prop-types;
class HomePage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="HomePage-Container">
        <div className="HomePage-signup"><SignupSide history={history} setScreen={this.props.setScreen} /></div>
        <div className="HomePage-login"><LoginSide history={history} /></div>
      </div>
    );
  }
}

export default HomePage;
