import React from 'react';
import './Signuppage.css';

const axios = require('axios');
const strftime = require('strftime');

class SignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      noOfComponent: 1,
      aadhaarNo: '',
      otp: '',
      aadhaarError: '',
      otpError: '',
      aadhaarClass: '',
      otpClass: '',
      eKYCResponse: '',
      username: '',
      password: '',
      isVerified: false,
    };
  }
  render() {
    const aadhaarField = (
      <div className="Signup-aadhaar-box Signup-Component-box">
        <div className="Signup-fields-wrapper">
          <div className="Signup-page-title Signup-box-field">Enter Aadhaar number</div>
          <div className="Signup-box-field">
            <input
              onChange={(event) => {
                if (event.target.value.match(/^[0-9]{0,12}$/)) {
                  this.setState({
                  aadhaarNo: event.target.value,
                  aadhaarError: '',
                });
              }
              }}
              className={`Signup-input-field ${this.state.aadhaarClass}`}
              type="text"
              value={this.state.aadhaarNo}
              placeholder="Enter 12 digit aadhaar number"
            />
            <div className="Error-message">{this.state.aadhaarError}</div>
          </div>
          <div className="Signup-box-field">
            <button
              onClick={() => {
                axios.post('/otpToken', {
                  aadhaarNo: this.state.aadhaarNo,
                }).then((response) => {
                  if (response.data.statusCode === 200) {
                    this.setState({
                      noOfComponent: 2,
                    });
                  } else if (response.data.message === 'User already registered') {
                    this.setState({
                      aadhaarClass: 'error',
                      aadhaarNo: '',
                      aadhaarError: 'You already have an account. Try logging in',
                    });
                  } else if (response.data.statusCode === 204) {
                    this.setState({
                      aadhaarError: 'This aadhaar number doesnot exists',
                    });
                  } else {
                    this.setState({
                      aadhaarError: 'There was some server error. Please try after some time.',
                    });
                  }
                }).catch((err) => {
                  if (err.response.status === 400) {
                    this.setState({
                      aadhaarError: 'Invalid aadhaar number',
                    });
                  }
                });
              }}
              className="Signup-page-button"
            >
              <span className="Signup-page-label">Send OTP</span>
            </button>
          </div>
        </div>
      </div>
    );

    const otpField = (
      <div className="Signup-otp-box Signup-Component-box">
        <div className="Signup-fields-wrapper">
          <div
            className="Signup-page-title Signup-box-field"
          >An OTP has been sent to your registered number
          </div>
          <div className="Signup-box-field">
            <input
              onChange={(event) => {
                if (event.target.value.match(/^[0-9]{0,4}$/)) {
                  this.setState({
                  otp: event.target.value,
                });
              }
              }}
              className={`Signup-input-field ${this.state.otpClass}`}
              type="password"
              value={this.state.otp}
              placeholder="_ _ _ _"
            />
            <div className="Error-message">{this.state.otpError}</div>
          </div>
          <div className="Signup-box-field">
            <button
              onClick={() => {
                axios.post('/otpVerify', {
                  aadhaarNo: this.state.aadhaarNo,
                  otp: this.state.otp,
                }).then((response) => {
                  // console.log(response);
                  if (response.data.statusCode === 200) {
                    this.setState({
                      noOfComponent: 3,
                      eKYCResponse: response.data.response,
                      otpError: '',
                    }, () => {
                      // console.log(this.state.eKYCResponse);
                    });
                  } else if (response.data.message === 'Authentication failed') {
                    this.setState({
                      otpClass: 'error',
                      otpError: 'Incorrect otp',
                    });
                  } else {
                    this.setState({
                      otpError: 'There was some server error. Please try after some time.',
                    });
                  }
                }).catch((err) => {
                  if (err.response.status === 400) {
                    this.setState({
                      otpError: 'Invalid otp or aadhaar number',
                    });
                  }
                });
              }}
              className="Signup-page-button"
            >
              <span className="Signup-page-label">Verify OTP</span>
            </button>
          </div>
        </div>
      </div>
    );

    const showDetails = () => (
      <div className="Signup-details-table Signup-Component-box">
        <div className="Signup-fields-wrapper">
          <table>
            <thead>
              <tr><th colSpan="2">Verify your details</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poi.Name}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poi.Gender}</td>
              </tr>
              <tr>
                <td>Dob</td>
                <td>{strftime('%F', new Date(this.state.eKYCResponse.e_Kyc.Poi.Dob))}</td>
              </tr>
              <tr>
                <td>Guardian</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poa.co}</td>
              </tr>
              <tr>
                <td>House no.</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poa.house}</td>
              </tr>
              <tr>
                <td>Street</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poa.street}</td>
              </tr>
              <tr>
                <td>Locality</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poa.lc}</td>
              </tr>
              <tr>
                <td>Landmark</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poa.landmark}</td>
              </tr>
              <tr>
                <td>Sub district</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poa.subdist}</td>
              </tr>
              <tr>
                <td>District</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poa.dist}</td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poa.pc}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{this.state.eKYCResponse.e_Kyc.Poa.state}</td>
              </tr>
            </tbody>
          </table>
          <div className="Signup-box-field">
            <button
              onClick={() => {
                this.setState({
                  isVerified: 'true',
                  noOfComponent: 4,
                });
              }}
              className="Signup-page-button"
            >
              <span className="Signup-page-label">Yes, this is me</span>
            </button>
          </div>
        </div>
      </div>
    );

    const signupField = () => (
      <div className="Signup-otp-box Signup-Component-box">
        <div className="Signup-fields-wrapper">
          <div className="Signup-page-title Signup-box-field">Username</div>
          <div className="Signup-box-field">
            <input
              onChange={(event) => {
                if (event.target.value.match(/^[-\w.$@*!]{0,15}$$/)) {
                  this.setState({
                    username: event.target.value,
                  });
                }
              }}
              value={this.state.username}
              className="Signup-input-field"
              type="text"
              placeholder="New username"
            />
            <div className="Error-message">{this.state.usernameError}</div>
          </div>
          <div className="Signup-page-title Signup-box-field">Password</div>
          <div className="Signup-box-field">
            <input
              onChange={(event) => {
                  this.setState({
                    password: event.target.value,
                  });
              }}
              value={this.state.password}
              className="Signup-input-field"
              type="password"
              placeholder="password"
            />
            <div className="Error-message">{this.state.passwordError}</div>
          </div>
          <div className="Signup-box-field">
            <button
              onClick={() => {
              axios.post('/users', {
                aadhaarNo: this.state.aadhaarNo,
                isVerified: this.state.isVerified,
                userName: this.state.username,
                password: this.state.password,
              }).then((response) => {
                console.log(response);
                if (response.data.statusCode === 200) {
                  this.setState({
                    usernameError: '',
                    passwordError: '',
                  });
                  console.log(`Account created${response.data}`);
                } else if (response.data.statusCode === 400) {
                  this.setState({
                    usernameError: 'Username is already taken. Try some other username',
                  });
                } else {
                  this.setState({
                    passwordError: 'There was some server error. Please try after some time.',
                  });
                }
              }).catch((err) => {
                if (err.response.status === 400) {
                  if (err.response.data.validation.keys[0] === 'password') {
                    this.setState({
                    passwordError: 'Password must have atleast one number, one special character and one capital letter',
                  });
                } else if (err.response.data.validation.keys[0] === 'userName') {
                  this.setState({
                  usernameError: 'Username can contain only characters, numbers and .-_$@*!',
                });
                }
                }
              });
            }}
              className="Signup-page-button"
            >
              <span className="Signup-page-label">Open my account</span>
            </button>
          </div>
        </div>
      </div>
    );

    if (this.state.noOfComponent === 1) {
      return (
        <div>
          {aadhaarField}
        </div>);
    } else if (this.state.noOfComponent === 2) {
      return (
        <div>
          {aadhaarField}
          {otpField}
        </div>);
    } else if (this.state.noOfComponent === 3) {
      return (
        <div>
          {aadhaarField}
          {otpField}
          {showDetails()}
        </div>);
    }
    return (
      <div className="Signup-wrapper">
        {aadhaarField}
        {otpField}
        {showDetails()}
        {signupField()}
      </div>);
  }
}

export default SignUpPage;
