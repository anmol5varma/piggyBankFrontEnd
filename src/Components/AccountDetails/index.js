import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AccountDetails.css';

class AccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    this.props.getUserDetails().then((response) => {
      this.setState({
        details: response.data.detailsObject,
      });
    });
  }
  render() {
    // if (this.state.noOfComponent === 0) {
    return (
      <div className="account-details-outer-container">
        <div className="account-details-inner-container">
          <div className="account-details-image-container">
            <img className="bankUser-image" src="/images/bankUser.png" alt="" />
          </div>
          <div className="account-details-detail-container">
            <table className="account-details-table">
              <tr> <td><b>NAME</b></td>      <td> {this.state.details.name}</td></tr>
              <tr> <td><b>GENDER</b></td>    <td> {this.state.details.gender}</td></tr>
              <tr> <td><b>ADDRESS</b></td>   <td> {this.state.details.address}</td></tr>
              <tr> <td><b>AADHAR</b></td>    <td> {this.state.details.aadharNumber}</td></tr>
              <tr> <td><b>CONTACT</b></td>   <td> {this.state.details.contact}</td></tr>
              <tr> <td><b>GUARDIAN</b></td>  <td> {this.state.details.guardian}</td></tr>
            </table>
          </div>
        </div>
        <div className="change-password-button-container" >
          <button
            className="SignupContent-button"
            onClick={this.props.changeComponent}
          >

            <span className="SignupContent-button-label">
                      Change Password
            </span>
          </button>
        </div>
      </div>
    );
  }
  // }
}

AccountDetails.propTypes = {
  getUserDetails: PropTypes.func.isRequired,

};

export default AccountDetails;
