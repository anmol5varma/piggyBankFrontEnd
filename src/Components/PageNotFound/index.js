import React from 'react';
import PropTypes from 'prop-types';
import './render.css';
import SignupSide from '../SignupSide';

class PageNotFound extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="HomePage-Container">
        <div className="HomePage-signup"><SignupSide
          welcomeMessage="This page isn't available!"
          buttonMessage="Try Signing Up ?"
          history={history}
          tagLine="The link you followed may be broken, or the page may have been removed."
        />
        </div>
      </div>
    );
  }
}

export default PageNotFound;
PageNotFound.propTypes = {
  history: PropTypes.shape.isRequired,
};
