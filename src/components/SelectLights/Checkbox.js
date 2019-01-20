import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox',id, name, checked = false, onChange }) => (
  <input id={id} className="select-light" type={type} name={name} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;
