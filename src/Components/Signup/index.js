import React from 'react';
import { Grid, Row, Col, FormControl, Button } from 'react-bootstrap';

class Signup extends React.Component {
  render() {
    const aadhaarField = (
      <Grid>
        <Row>
          <Col md={3} />
          <Col md={4}>
            <FormControl
              type="text"
              placeholder="Enter aadhaar number"
              onChange={this.handleChange}
            />
          </Col>
          <Col md={4}>
            <Button bsStyle="primary">Send OTP</Button>
          </Col>
        </Row>
        <Row>
          <Col md={3} />
          <Col md={4}>
            <FormControl
              type="text"
              placeholder="Enter aadhaar number"
              onChange={this.handleChange}
            />
          </Col>
          <Col md={4}>
            <Button bsStyle="primary">Send OTP</Button>
          </Col>
        </Row>
      </Grid>
    );
    return (aadhaarField);
  }
}

export default Signup;
