import React from 'react';
import './PasswordReset.css';
import PasswordResetForm from '../PasswordResetForm';
import PasswordResetContent from '../PasswordResetContent';
// import PropTypes from 'prop-types';

class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.match.params.token,
    };
  }
  render() {
    const { history } = this.props;
    return (
      <div className="PasswordReset-Container">
        <div className="PasswordReset-signup"><PasswordResetContent history={history} /></div>
        <div className="PasswordReset-login"><PasswordResetForm history={history} token={this.state.code} /></div>
      </div>
    );
  }
}

export default PasswordReset;

