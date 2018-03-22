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
    return (
      <div className="account-details-container">
        <div className="account-detail">
          <b>Name:</b> {this.state.details.name}
        </div>
        <div className="account-detail">
          <b>Gender:</b> {this.state.details.gender}
        </div>
        <div className="account-detail">
          <b>Address:</b> {this.state.details.address}
        </div>
        <div className="account-detail">
          <b>Aadhar Number:</b> {this.state.details.aadharNumber}
        </div>
        <div className="account-detail">
          <b>Contact:</b> {this.state.details.contact}
        </div>
        <div className="account-detail">
          <b>Guardian:</b> {this.state.details.guardian}
        </div>
      </div>
    );
  }
}

AccountDetails.propTypes = {
  getUserDetails: PropTypes.func.isRequired,

};

export default AccountDetails;
