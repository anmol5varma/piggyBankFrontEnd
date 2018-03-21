import React from 'react';
import strftime from 'strftime';

const getAadhaarForm = state => (
  <div>
    <input
      type="text"
      placeholder="Enter 12-digit aadhaar number"
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
const takeAadhaarNumber = state => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">Give Aadhaar Number</div>
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
      Send OTP
        </span>
      </button>
    </div>
    <div className="Error-message">{state.state.aadhaarError}</div>
  </div>
);
const takeAadhaar = state => (
  <div className="Signupform-welcome-message">
    <div className="Signupform-heading">Give Aadhaar Number</div>
    <div className="Signupform-content">
      {getAadhaarForm(state)}
    </div>

    <div className="Signupform-button-wrapper">
      <button
        onClick={() => {
        state.scanAadhaarbuttonClicked();
        }}
        className="Signupform-button"
      >
        <span className="Signupform-button-label">
      Scan Aadhaar Card
        </span>
      </button>
      <button
        onClick={() => {
        state.sendOTPButtonClicked();
        }}
        className="Signupform-button"
      >
        <span className="Signupform-button-label">
       Send OTP
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
      <table className="Signupform-verify-details">
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            Name
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poi.Name}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            Gender
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poi.Gender}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            DOB
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {strftime('%F', new Date(state.state.eKYCResponse.e_Kyc.Poi.Dob))}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            Contact
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poi.contact}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            Guardian
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.co}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            House no.
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.house}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            Street
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.street}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            Locality
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.lc}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            Landmark
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.landmark}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            Sub district
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.subdist}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            District
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.dist}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            Pincode
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.pc}
            </span>
          </td>
        </tr>
        <tr className="Signupform-each-entry">
          <td className="Signupform-table-label">
            <span className="Signupform-table-text">
            State
            </span>
          </td>
          <td className="Signupform-table-value">
            <span className="Signupform-table-text">
              {state.state.eKYCResponse.e_Kyc.Poa.state}
            </span>
          </td>
        </tr>
      </table>
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
   This is not me
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


export default {
  getAadhaarForm,
  userRegister,
  getDetails,
  verifyOTP,
  progressBar,
  progressBarHalf,
  takeAadhaarNumber,
  takeAadhaar,
};
