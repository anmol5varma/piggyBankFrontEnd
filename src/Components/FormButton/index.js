import React from 'react';
import PropTypes from 'prop-types';

const FormButton = props => (
  <input className={props.buttonClassName} type="button" value={props.value} onClick={props.onClick} disabled={props.disabled} />
);


FormButton.propTypes = {
  buttonClassName: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

FormButton.defaultProps = {
  buttonClassName: '',
  value: '',
  onClick: () => {},
  disabled: false,
};

export default FormButton;
