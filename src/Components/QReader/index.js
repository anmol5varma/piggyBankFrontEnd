import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import PropTypes from 'prop-types';

class QReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 0,
      result: 'No result',
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      const recipients = data.split(/[<>]+/);
      const uid = recipients[3].split(' ')[1].substring(5, 17);
      // const uidString = `${uid}'`;
      this.setState({
        result: uid,
      }, () => {
        alert(`Your aadhaar number is ${uid}`);
        this.props.setAadhaarNumber(this.props.context, this.state.result);
      });
    }
  }
  render() {
    return (
      <div className="QRcode-wrapper">
        <div className="QRcode-camera">
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
          {/* <p>{this.state.result}</p> */}
        </div>
        <div className="Signupform-button-wrapper">
          <button
            className="Signupform-button"
            onClick={() => {
              this.props.setComponent(1);
            }}
          >
            <span className="Signupform-button-label">
              Go back
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default QReader;

QReader.propTypes = {
  setAadhaarNumber: PropTypes.func.isRequired,
  // context: PropTypes.object.isRequired,
};

