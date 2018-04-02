import React from 'react';
<<<<<<< HEAD
import Axios from 'axios';
=======
import PropTypes from 'prop-types';
>>>>>>> master
import './PasswordForgot.css';
import PasswordForgotForm from '../PasswordForgotForm';
import PasswordForgotContent from '../PasswordForgotContent';


class PasswordForgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
    };
  }
  render() {
    const onShowLoader = (username) => {
      this.setState({
        showLoader: true,
      });
      return Axios.post('/forgot/password', { username });
    };
    const onHideLoader = () => {
      this.setState({
        showLoader: false,
      });
    };

    const { history } = this.props;
    if (this.state.showLoader) {
      return (
        <div className="Loader-div">
          <div className="Loader" />
        </div>

      );
    }
    return (
      <div className="PasswordForgot-Container">
        <div className="PasswordForgot-signup">
          <PasswordForgotContent
            history={history}
          />
        </div>
        <div
          className="PasswordForgot-login"
        >
          <PasswordForgotForm
            history={history}
            onShowLoader={onShowLoader}
            onHideLoader={onHideLoader}
          />
        </div>
      </div>
    );
  }
}

export default PasswordForgot;

PasswordForgot.propTypes = {
  history: PropTypes.shape.isRequired,
};
