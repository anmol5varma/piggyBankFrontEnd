import React from 'react';
import './PasswordReset.css';
import PasswordResetForm from '../PasswordResetForm';
import PasswordResetContent from '../PasswordResetContent';
import TokenExpired from '../TokenExpired';
// import PropTypes from 'prop-types';

const Axios = require('axios');

class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.match.params.token,
      isExpired: true,
    };
  }

  componentDidMount() {
    Axios.get(`/checkToken?resetCode=${this.state.code}`)
      .then((result) => {
        if (result.data.statusCode === 200) {
          this.setState({
            isExpired: false,
          });
        } else {
          this.setState({
            isExpired: true,
          });
        }
      });
  }

  render() {
    const { history } = this.props;
    if (this.state.isExpired) {
      return (
        <div className="PasswordReset-Container">
          <div className="PasswordReset-signup"><TokenExpired history={history} /></div>
        </div>
      );
    }
    return (
      <div className="PasswordReset-Container">
        <div className="PasswordReset-signup"><PasswordResetContent history={history} /></div>
        <div className="PasswordReset-login"><PasswordResetForm history={history} token={this.state.code} /></div>
      </div>
    );
  }
}

export default PasswordReset;

