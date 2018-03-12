import axios from 'axios';
import React from 'react';
import './Signupform.css';
import LoginSideAfterRegister from '../LoginSideAfterRegister';

const strftime = require('strftime');

const getAadhaarForm = state => (
  <div>
    <input
      type="text"
      placeholder="12-digit aadhaar number"
      className="Login-input-field1"
      value={state.state.aadhaarNo}
      onChange={(event) => {
        if (event.target.value.match(/^[0-9]{0,12}$/)) {
          state.setState({
          aadhaarNo: event.target.value,
          aadhaarError: '',
        });
      }
      }}
    />
    <div className="Error-message">{state.state.aadhaarError}</div>
  </div>
);

const verifyOTPForm = state => (
  <div>
    <input
      type="password"
      placeholder="_ _ _ _"
      value={state.state.otp}
      className="Login-input-field1"
      onChange={(event) => {
      if (event.target.value.match(/^[0-9]{0,4}$/)) {
        state.setState({
        otp: event.target.value,
        otpError: '',
      });
    }
    }}
    />
    <div className="Error-message">{state.state.otpError}</div>
  </div>
);

const userRegisterForm = state => (
  <div>
    <input
      type="text"
      placeholder="Username"
      className="Login-input-field1"
      value={state.state.username}
      onChange={(event) => {
      if (event.target.value.match(/^[-\w.$@*!]{0,15}$$/)) {
        state.setState({
          username: event.target.value,
          usernameError: '',
        });
      } else {
        this.setState({

        });
      }
    }}
    />
    <div className="Error-message">{state.state.usernameError}</div>
    <input
      type="password"
      placeholder="Password"
      className="Login-input-field1 Signup-field"
      value={state.state.password}
      onChange={(event) => {
      state.setState({
        password: event.target.value,
        passwordError: '',
      });
  }}
    />
    <div className="Error-message">{state.state.passwordError}</div>
  </div>
);

const progressBar = () => (
  <div className="Signupform-progressbar">
    <div className="Signupform-progressbar-dot" />
    <div className="Signupform-progressbar-bar" />
  </div>
);

const progressBarHalf = () => (
  <div className="Signupform-progressbar">
    <div className="Signupform-progressbar-dot" />
    <div className="Signupform-progressbar-bar-unfilled" />
  </div>
);

const progressBarUnfilled = () => (
  <div className="Signupform-progressbar">
    <div className="Signupform-progressbar-dot-unfilled" />
    <div className="Signupform-progressbar-bar-unfilled" />
  </div>
);

const sendOTP = state => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">Enter your aadhaar number</div>
    <div className="Signupform-content">
      {getAadhaarForm(state)}
    </div>
    <div className="Signupform-button-wrapper">
      <button
        onClick={() => {
          state.sendOTPButtonClicked();
        }}
        className="Signupform-button"
      >
        <span className="Signupform-button-label">
      Send otp
        </span>
      </button>
    </div>
  </div>
);

const verifyOTP = state => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">
    An otp has been sent on your registered mobile number
    </div>
    <div className="Signupform-content">
      {verifyOTPForm(state)}
    </div>
    <div className="Signupform-button-wrapper">
      <button
        className="Signupform-button"
        onClick={() => state.sendOTPButtonClicked()}
      >
        <span className="Signupform-button-label">
      Resend otp
        </span>
      </button>
      <button
        onClick={() => {
        state.verifyOTPButtonClicked();
      }}
        className="Signupform-button"
      >
        <span className="Signupform-button-label">
      Verify otp
        </span>
      </button>
    </div>
  </div>
);

const getDetails = state => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">
    Verify your details
    </div>
    <div className="Signupform-content">
      <div className="Signupform-verify-details">
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Name
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poi.Name}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Gender
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poi.Gender}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            DOB
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {strftime('%F', new Date(state.state.eKYCResponse.e_Kyc.Poi.Dob))}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Contact
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poi.contact}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Guardian
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.co}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            House no.
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.house}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Street
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.street}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Locality
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.lc}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Landmark
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.landmark}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Sub district
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.subdist}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            District
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.dist}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            Pincode
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.pc}
            </span>
          </div>
        </div>
        <div className="Signupform-each-entry">
          <div className="Signupform-table-label">
            <span className="Signupform-table-text">
            State.state
            </span>
          </div>
          <div className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.state}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="Signupform-button-wrapper">
      <button
        className="Signupform-button"
        onClick={() => {
          state.setState({
            notmydetailsOTPError: 'Please get your details verified from nearest aadhaar centre',
          });
      }}
      >
        <span className="Signupform-button-label">
    These are my wrong details
        </span>
      </button>

      <button
        onClick={() => {
        state.detailsVerifiedButtonClicked();
      }}
        className="Signupform-button"
      >
        <span className="Signupform-button-label">
      This is me
        </span>
      </button>
    </div>
    <div className="Error-message">{state.state.notmydetailsOTPError}</div>
  </div>
);

const userRegister = state => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">Set username and password</div>
    <div className="Signupform-content">
      {userRegisterForm(state)}
    </div>
    <div className="Signupform-button-wrapper">
      <button className="Signupform-button" onClick={() => { state.onRegister(); }}>
        <span className="Signupform-button-label">
      Open account
        </span>
      </button>
    </div>
  </div>
);

class SignupForm extends React.Component {
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
      usernameError: ' ',
      passwordError: ' ',
      notmydetailsOTPError: '',
    };
  }
  onRegister() {
    axios.post('/users', {
      aadhaarNo: this.state.aadhaarNo,
      isVerified: this.state.isVerified,
      userName: this.state.username,
      password: this.state.password,
      eKYCResponse: JSON.stringify(this.state.eKYCResponse),
    }).then((response) => {
      console.log(response);
      if (response.data.statusCode === 200) {
        this.setState({
          usernameError: ' ',
          passwordError: ' ',
          noOfComponent: 0,
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
  }

  verifyOTPButtonClicked() {
    axios.post('/otpVerify', {
      aadhaarNo: this.state.aadhaarNo,
      otp: this.state.otp,
    }).then((response) => {
      console.log('Hello', response.data.response, response.data.statusCode);
      if (response.data.statusCode === 200) {
        console.log(response.data.response);
        this.setState({
          noOfComponent: 3,
          eKYCResponse: response.data.response,
        }, () => {
          console.log('Hello', this.state.eKYCResponse);
        });
        console.log('aGAIN HELLO', this.state.eKYCResponse);
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
  }

  detailsVerifiedButtonClicked() {
    this.setState({
      isVerified: 'true',
      noOfComponent: 4,
      notmydetailsOTPError: '',
    });
  }


  sendOTPButtonClicked() {
    axios.post('/otpToken', {
      aadhaarNo: this.state.aadhaarNo,
    }).then((response) => {
      if (response.data.statusCode === 200) {
        this.setState({
          noOfComponent: 2,
          otpError: '',
          otp: '',
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
          aadhaarError: 'There is some server error. Please try after some time.',
        });
      }
    }).catch((err) => {
      if (err.response.status === 400) {
        this.setState({
          aadhaarError: 'Invalid aadhaar number',
        });
      }
    });
  }

  render() {
    if (this.state.noOfComponent === 0) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <div className="Signupform-component">
              <div className="Signupform-welcome-message">
                <div className="Signupform-heading">
                You are successfully registered!!!
                </div>
                <div className="Signupform-content">
                  <LoginSideAfterRegister history={this.props.history} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.noOfComponent === 1) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <div className="Signupform-component">
              {progressBarHalf()}
              {sendOTP(this)}
            </div>
          </div>
        </div>
      );
    } else if (this.state.noOfComponent === 2) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <div className="Signupform-component">
              {progressBar()}
              {sendOTP(this)}
            </div>
            <div className="Signupform-component">
              {progressBarHalf()}
              {verifyOTP(this)}
            </div>
          </div>
        </div>
      );
    } else if (this.state.noOfComponent === 3) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <div className="Signupform-component">
              {progressBar()}
              {sendOTP(this)}
            </div>
            <div className="Signupform-component">
              {progressBar()}
              {verifyOTP(this)}
            </div>
            <div className="Signupform-component">
              {progressBarHalf()}
              {getDetails(this)}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="Signupform-container">
        <div className="Signupform-box">
          <div className="Signupform-component">
            {progressBar()}
            {sendOTP(this)}
          </div>
          <div className="Signupform-component">
            {progressBar()}
            {verifyOTP(this)}
          </div>
          <div className="Signupform-component">
            {progressBar()}
            {getDetails(this)}
          </div>
          <div className="Signupform-component">
            {progressBarHalf()}
            {userRegister(this)}
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
