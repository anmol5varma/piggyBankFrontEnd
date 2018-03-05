import React from 'react';
import { Grid, Table, Row, Col, FormControl, Button, Form, FormGroup, ControlLabel, Jumbotron } from 'react-bootstrap';
import './Signup.css';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      noOfComponent: 1,
    };
  }
  render() {
    const aadhaarField = (
      <div className="paadingTop">
        <Row className="show-grid Signup-row">
          <Col mdOffset={3} md={4}>
            <FormControl
              type="text"
              placeholder="Enter aadhaar number"
              onChange={this.handleChange}
            />
          </Col>
          <Col md={4}>
            <Button
              onClick={() => {
              this.setState({
                noOfComponent: 2,
              });
            }}
              bsStyle="primary"
            >Send OTP
            </Button>
          </Col>
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
