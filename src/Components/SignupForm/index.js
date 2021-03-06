import axios from 'axios';
import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import './Signupform.css';
import LoginSide from '../LoginSide';
import QReader from '../QReader';
import helpers from '../../helpers/signUpFormHelpers/signUpFormHelpers';


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
      console.log('Hello', response);
      if (response.data.statusCode === 200) {
        this.setState({
          usernameError: ' ',
          passwordError: ' ',
        });
        this.setComponent(0);
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
  setComponent(component) {
    this.setState({
      noOfComponent: component,
    });
  }

  takeAadhaarNumberbuttonClicked() {
    this.setState({
      aadhaarNo: '',
    });
    this.setComponent(6);
  }
  useStateError() {
    console.log(
      this.state.aadhaarError,
      this.state.otpClass,
      this.state.passwordError,
      this.state.otpError,
      this.state.otpClass,
    );
  }
  verifyOTPButtonClicked() {
    axios.post('/otpVerify', {
      aadhaarNo: this.state.aadhaarNo,
      // aadhaarNo:'123412341234',
      otp: this.state.otp,
    }).then((response) => {
      if (response.data.statusCode === 200) {
        this.setState({
          noOfComponent: 3,
          eKYCResponse: response.data.response,
        }, () => {
          scrollToComponent(this.DetailsElement, {
            offset: 0, align: 'top', duration: 500, ease: 'inCirc',
          });
        });
      } else if (response.data.message === 'Authentication failed') {
        this.setState({
          otpClass: 'error',
          otpError: 'Incorrect otp',
        }, () => {
          console.log('In scroll');
          scrollToComponent(this.DetailsElement, {
            offset: 0, align: 'top', duration: 500, ease: 'inCirc',
          });
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
  setAadhaarNumber(context, result) {
    context.setState({
      aadhaarNo: result,
    }, () => {
      context.sendOTPButtonClicked();
    });
  }
  scanAadhaarbuttonClicked() {
    this.setState({
      aadhaarNo: '',
    });
    this.setComponent(5);
  }
  detailsVerifiedButtonClicked() {
    this.setComponent(4);
    this.setState({
      isVerified: 'true',
      // noOfComponent: 4,
      notmydetailsOTPError: '',
    }, () => {
      scrollToComponent(this.loginForm, {
        offset: 0, align: 'top', duration: 500, ease: 'inCirc',
      });
    });
  }


  sendOTPButtonClicked() {
    console.log(this.state.aadhaarNo, '123412341234');
    axios.post('/otpToken', {
      //  aadhaarNo:'123412341234'
      aadhaarNo: this.state.aadhaarNo,
    }).then((response) => {
      console.log('Hello', response);
      if (response.data.statusCode === 200) {
        this.setState({
          otpError: '',
          otp: '',
          noOfComponent: 2,
          aadhaarError: ' ',
        }, () => {
          scrollToComponent(this.enterOTP, {
            offset: 0, align: 'top', duration: 500, ease: 'inCirc',
          });
        });
      } else if (response.data.message === 'User already registered') {
        this.setState({
          aadhaarClass: 'error',
          aadhaarNo: '',
          aadhaarError: 'You already have an account. Try logging in',
          noOfComponent: 1,
        });
      } else if (response.data.statusCode === 204) {
        this.setState({
          aadhaarError: 'This aadhaar number doesnot exists',
          noOfComponent: 1,
        });
      } else {
        this.setState({
          aadhaarError: 'There is some server error. Please try after some time.',
          noOfComponent: 1,
        });
      }
    }).catch((err) => {
      console.log(err);
      if (err.response.status === 400) {
        this.setState({
          aadhaarError: 'Invalid aadhaar number',
          noOfComponent: 1,
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
                  <LoginSide history={this.props.history} message="Please, login to use your money safely." />
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
              {helpers.progressBarHalf()}
              {helpers.takeAadhaar(this)}
            </div>
          </div>
        </div>
      );
    } else if (this.state.noOfComponent === 2) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <div className="Signupform-component">
              {helpers.progressBar()}
              {helpers.takeAadhaar(this)}
            </div>
            <div className="Signupform-component" ref={(div) => { this.enterOTP = div; }}>
              {helpers.progressBarHalf()}
              {helpers.verifyOTP(this)}
            </div>
          </div>
        </div>
      );
    } else if (this.state.noOfComponent === 3) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <div className="Signupform-component">
              {helpers.progressBar()}
              {helpers.takeAadhaar(this)}
            </div>
            <div className="Signupform-component">
              {helpers.progressBar()}
              {helpers.verifyOTP(this)}
            </div>
            <div className="Signupform-component" ref={(div) => { this.DetailsElement = div; }}>
              {helpers.progressBarHalf()}
              {helpers.getDetails(this)}
            </div>
          </div>
        </div>
      );
    } else if (this.state.noOfComponent === 5) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <QReader
              context={this}
              setAadhaarNumber={this.setAadhaarNumber}
              setComponent={() => this.setComponent(1)}
            />
          </div>
        </div>
      );
    } else if (this.state.noOfComponent === 6) {
      return (
        <div className="Signupform-container">
          <div className="Signupform-box">
            <div className="Signupform-component">
              {helpers.progressBarHalf()}
              {helpers.takeAadhaarNumber(this)}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="Signupform-container">
        <div className="Signupform-box">
          <div className="Signupform-component">
            {helpers.progressBar()}
            {helpers.takeAadhaar(this)}
          </div>
          <div className="Signupform-component">
            {helpers.progressBar()}
            {helpers.verifyOTP(this)}
          </div>
          <div className="Signupform-component">
            {helpers.progressBar()}
            {helpers.getDetails(this)}
          </div>
          <div className="Signupform-component" ref={(div) => { this.loginForm = div; }}>
            {helpers.progressBarHalf()}
            {helpers.userRegister(this)}
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
