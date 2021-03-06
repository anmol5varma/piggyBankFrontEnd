import React from 'react';
import './Signuppage.css';
import SignupContent from '../SignupContent';
import SignupForm from '../SignupForm';

class SignupPage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="Signuppage-Container">
        <div className="Signuppage-signup"><SignupContent /></div>
        <div className="Signuppage-login"><SignupForm history={history} /></div>
      </div>
    );
  }
}

export default SignupPage;
