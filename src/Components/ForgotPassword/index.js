import { Link } from 'react-router-dom';
import React from 'react';
import './ForgotPassword.css';
import TransparentInputField from '../TransparentInputField';

const Axios = require('axios');


class ResetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount() {
    Axios.post('/forgot/password', { userName: 'Anmol' });
  }


  render() {
    return (
      <div className="change-password-container" >
           An email has been sent to your Registered Email Id.Please visit your inbox to reset your password.
      </div>
    );
  }
}


export default ResetPassword;
