/* eslint-disable */

import axios from 'axios';
import React from 'react';
import './Signupform.css';
import LoginSideAfterRegister from '../LoginSideAfterRegister';
import QReader from '../QReader';
import helpers from '../../helpers/signUpFormHelpers'
const strftime = require('strftime');


class SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      noOfComponent:1,
      aadhaarNo:'123412341234',
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
  setComponent(component){
    this.setState({
      noOfComponent:component,
    })
  }
  onRegister() {
    axios.post('/users', {
      aadhaarNo: this.state.aadhaarNo,
      isVerified: this.state.isVerified,
      userName: this.state.username,
      password: this.state.password,
      eKYCResponse: JSON.stringify(this.state.eKYCResponse),
    }).then((response) => {
      console.log("Hello",response);
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

 scanAadhaarbuttonClicked(){ 
    this.setComponent(5);
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
      //aadhaarNo:'123412341234',
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
  setAadhaarNumber(context,result){
    context.setState({
      aadhaarNo:result,
    },()=>{
      context.sendOTPButtonClicked();
    })
  }
  detailsVerifiedButtonClicked() {
    this.setComponent(4);
    this.setState({
      isVerified: 'true',
     // noOfComponent: 4,
      notmydetailsOTPError: '',
    });
  }


  sendOTPButtonClicked() {
   console.log(this.state.aadhaarNo,'123412341234');
    axios.post('/otpToken', {
   //  aadhaarNo:'123412341234'
     aadhaarNo:this.state.aadhaarNo,
    }).then((response) => {
      console.log("Hello",response);
      if (response.data.statusCode === 200) {
       // this.setComponent(2);
        this.setState({
          otpError: '',
          otp: '',
          noOfComponent:2,
          aadhaarError:' ',
        });
      } else if (response.data.message === 'User already registered') {
        this.setState({
          aadhaarClass: 'error',
          aadhaarNo: '',
          aadhaarError: 'You already have an account. Try logging in',
          noOfComponent:1
        });
      } else if (response.data.statusCode === 204) {
        this.setState({
          aadhaarError: 'This aadhaar number doesnot exists',
          noOfComponent:1
        });
      } else {
        this.setState({
          aadhaarError: 'There is some server error. Please try after some time.',
          noOfComponent:1
        });
      }
    }).catch((err) => {
      console.log(err);
      if (err.response.status === 400) {
        this.setState({
          aadhaarError: 'Invalid aadhaar number',   
          noOfComponent:1,
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
              {helpers.progressBarHalf()}
              {helpers.sendOTP(this)}
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
              {helpers.sendOTP(this)}
            </div>
            <div className="Signupform-component">
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
              {helpers.sendOTP(this)}
            </div>
            <div className="Signupform-component">
              {helpers.progressBar()}
              {helpers.verifyOTP(this)}
            </div>
            <div className="Signupform-component">
              {helpers.progressBarHalf()}
              {helpers.getDetails(this)}
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.noOfComponent===5){
      return (
      <QReader context={this} setAadhaarNumber={this.setAadhaarNumber}/>
      );
    }
    return (
      <div className="Signupform-container">
        <div className="Signupform-box">
          <div className="Signupform-component">
            {helpers.progressBar()}
            {helpers.sendOTP(this)}
          </div>
          <div className="Signupform-component">
            {helpers.progressBar()}
            {helpers.verifyOTP(this)}
          </div>
          <div className="Signupform-component">
            {helpers.progressBar()}
            {helpers.getDetails(this)}
          </div>
          <div className="Signupform-component">
            {helpers.progressBarHalf()}
            {helpers.userRegister(this)}
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
