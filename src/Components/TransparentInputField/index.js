import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TransparentInputField.css';

class TransparentInputField extends Component {
  render() {
    return (
      <div className={this.props.className} >
        <input
          className="transparent-input-field"
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}

        />
      </div>
    );
  }
}

TransparentInputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,

};

TransparentInputField.defaultProps = {
  placeholder: '',
  onChange: () => {},
  value: '',
  className: '',

};

export default TransparentInputField;
