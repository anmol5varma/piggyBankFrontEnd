import React from 'react';
import PropTypes from 'prop-types';
import './Homepage.css';
import LoginSide from '../LoginSide';
import SignupSide from '../SignupSide';

class HomePage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="HomePage-Container">
        <div className="HomePage-signup"><SignupSide
          welcomeMessage="Welcome"
          history={history}
          tagLine="Let's make money simple and digitize your banking experience"
          buttonMessage="register here"
        />
        </div>
        <div className="HomePage-login"><LoginSide history={history} message="Or login into your account" /></div>
      </div>
    );
  }
}

export default HomePage;
HomePage.propTypes = {
  history: PropTypes.shape.isRequired,
};
