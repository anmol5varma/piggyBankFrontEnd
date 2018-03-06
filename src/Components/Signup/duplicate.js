import React from 'react';
import { Grid, Table, Row, Col, FormControl, Button, Form, FormGroup, ControlLabel } from 'react-bootstrap';
import './Signup.css';

const axios = require('axios');

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      noOfComponent: 1,
      aadhaarNo: '',
      aadhaarClass: '',
    };
  }
  render() {
    const aadhaarField = (
      <div className="paadingTop">
        <Row className="show-grid Signup-row">
          <Col><ControlLabel>Registered aadhaar number</ControlLabel></Col>
        </Row>
        <Row className="show-grid Signup-row">
          <FormGroup controlId="formValidationSuccess1" validationState={this.state.aadhaarClass}>
            <Col mdOffset={3} md={4}>
              <FormControl
                type="text"
                placeholder="Enter 12 digit aadhaar number"
                onChange={(event) => {
                  if (!event.target.value.match(/^[0-9]*$/)) {
                    event.target.value = this.state.aadhaarNo;
                  } else if (event.target.value.length > 12) {
                    event.target.value = event.target.value.slice(0, 12);
                  } else {
                    this.setState({
                      aadhaarNo: event.target.value,
                    });
                  }
                }}
              />
            </Col>
            <Col md={4}>
              <Button
                onClick={() => {
                axios.post('/otpToken', {
                  aadhaarNo: this.state.aadhaarNo,
                }).then((response) => {
                  if (response.statusCode === 200) {
                    this.setState({
                      noOfComponent: 2,
                      aadhaarClass: 'success',
                    });
                  } else if (response.statusCode === 400) {
                    this.setState({
                      noOfComponent: 1,
                      aadhaarClass: 'error',
                    });
                  } else {
                    this.setState({
                      noOfComponent: 1,
                      aadhaarClass: 'error',
                    });
                  }
                }).catch(() => {
                  this.setState({
                    noOfComponent: 1,
                    aadhaarClass: 'error',
                  });
                });
            }}
                bsStyle="primary"
              >Send OTP
              </Button>
            </Col>
          </FormGroup>
        </Row>
      </div>
    );

    const otpField = (
      <div className="paddingTop">
        <Row className="show-grid Signup-row">
          <Col mdOffset={3} md={4}>
            <FormControl
              type="password"
              placeholder="Enter OTP"
              onChange={this.handleChange}
            />
          </Col>
          <Col md={4}>
            <Button
              onClick={() => {
            this.setState({
              noOfComponent: 3,
            });
          }}
              bsStyle="success"
            >Verify OTP
            </Button>
          </Col>
        </Row>
      </div>
    );

    const showDetails = () => (
      <div className="paddingTop">
        <Row className="show-grid Signup-row">
          <Col mdOffset={3} md={6}>
            <Table striped bordered condensed hover responsive>
              <thead>
                <tr><th colSpan="2">Verify your details</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Row 1</td>
                  <td>My name is anmol</td>
                </tr>
                <tr>
                  <td>Row 2</td>
                  <td>I am a good boy</td>
                </tr>
                <tr>
                  <td>Row 3</td>
                  <td>I am intelligent also</td>
                </tr>
                <tr>
                  <td>Row 3</td>
                  <td>I love mckinsey</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={5} />
          <Col md={4}>
            <Button
              onClick={() => {
            this.setState({
              noOfComponent: 4,
            });
          }}
              bsStyle="info"
            >Yes, this is me
            </Button>
          </Col>
        </Row>
      </div>
    );

    const signupField = () => (
      <Form className="Signup-row paddingTop" horizontal>
        <FormGroup className="Signup-row" controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} md={4}>
          Username
          </Col>
          <Col md={4}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} md={4}>
          Password
          </Col>
          <Col md={4}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col mdOffset={4} md={4}>
            <Button
              onClick={() => {
            this.setState({
              noOfComponent: 4,
            });
          }}>Open account
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );

    if (this.state.noOfComponent === 1) {
      return (
        <Grid>
          {aadhaarField}
        </Grid>);
    } else if (this.state.noOfComponent === 2) {
      return (
        <Grid>
          {aadhaarField}
          {otpField}
        </Grid>);
    } else if (this.state.noOfComponent === 3) {
      return (
        <Grid>
          {aadhaarField}
          {otpField}
          {showDetails()}
        </Grid>);
    }
    return (
      <Grid>
        {aadhaarField}
        {otpField}
        {showDetails()}
        {signupField()}
      </Grid>);
  }
}

export default Signup;
