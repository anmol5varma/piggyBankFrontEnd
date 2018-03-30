import React from 'react';
import PropTypes from 'prop-types';
import './PasswordForgot.css';
import PasswordForgotForm from '../PasswordForgotForm';
import PasswordForgotContent from '../PasswordForgotContent';


class PasswordForgot extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="PasswordForgot-Container">
        <div className="PasswordForgot-signup"><PasswordForgotContent history={history} /></div>
        <div className="PasswordForgot-login"><PasswordForgotForm history={history} /></div>
      </div>
    );
  }
}

export default PasswordForgot;

PasswordForgot.propTypes = {
  history: PropTypes.shape.isRequired,
};
