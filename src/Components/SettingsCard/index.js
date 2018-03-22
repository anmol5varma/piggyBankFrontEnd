import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SettingsCard.css';

class SettingsCard extends Component {
  render() {
    return (
      <div className="settings-card">
        <div className="settings-card-title">
          {this.props.title}
        </div>
        {this.props.children}
      </div>
    );
  }
}

SettingsCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,

};

export default SettingsCard;
