import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import PropTypes from 'prop-types';

class QReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      console.log(data);
      this.setState({
        result: data,
      }, () => {
        this.props.setAadhaarNumber(this.props.context, this.state.result);
      });
    }
  }
  // handleError(err) {
  //   console.error(err);
  // }
  render() {
    return (
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '600px', height: '300px' }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QReader;

QReader.propTypes = {
  sendOTPButtonClicked: PropTypes.func.isRequired,
  setAadhaarNumber: PropTypes.func.isRequired,
  // context:PropTypes.
};

