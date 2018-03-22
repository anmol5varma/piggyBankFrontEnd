import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TabButton.css';

class TabButton extends Component {
  render() {
    return (
      <div className="tab-button">
        {this.props.text}
      </div>
    );
  }
}

TabButton.propTypes = {
  text: PropTypes.string.isRequired,

};

export default TabButton;
