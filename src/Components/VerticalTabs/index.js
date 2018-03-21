import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './VerticalTabs.css';

import TabButton from '../TabButton';

class VerticalTabs extends Component {
  render() {
    return (
      <div className={`tab-container ${this.props.className} `}>
        <TabButton text="Change Password" />
      </div>
    );
  }
}

VerticalTabs.propTypes = {
  className: PropTypes.string,
};

VerticalTabs.defaultProps = {
  className: '',
};

export default VerticalTabs;
